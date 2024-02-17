import type { Stripe } from "stripe";

import { NextResponse } from "next/server";

import {stripe} from "@/utils/stripe/stripe";

import {Donation, PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function saveDonation(donationData: any) {
    return prisma.donation.create({
        data: donationData,
    });
}

export async function POST(req: Request) {
    let event: Stripe.Event;
    
    try {
        event = stripe.webhooks.constructEvent(
            await (await req.blob()).text(),
            req.headers.get("stripe-signature") as string,
            process.env.STRIPE_WEBHOOK_SECRET as string,
        );
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        // On error, log and return the error message.
        if (err! instanceof Error) console.log(err);
        console.log(`❌ Error message: ${errorMessage}`);
        return NextResponse.json(
            { message: `Webhook Error: ${errorMessage}` },
            { status: 400 },
        );
    }

    // Successfully constructed event.
    console.log("✅ Success:", event.id);

    const permittedEvents: string[] = [
        "checkout.session.completed",
        "payment_intent.succeeded",
        "payment_intent.payment_failed",
    ];

    if (permittedEvents.includes(event.type)) {
        let data : Stripe.Checkout.Session | Stripe.PaymentIntent | undefined;

        try {
            switch (event.type) {
                case "checkout.session.completed":
                    data = event.data.object as Stripe.Checkout.Session;
                    console.log(`💰 CheckoutSession status: ${data.payment_status}`);
                    break;
                case "payment_intent.payment_failed":
                    data = event.data.object as Stripe.PaymentIntent;
                    console.log(`❌ Payment failed: ${data.last_payment_error?.message}`);
                    break;
                case "payment_intent.succeeded":
                    data = event.data.object as Stripe.PaymentIntent;
                    console.log(`💰 PaymentIntent status: ${data.status}`);
                    
                    const donationData = {
                        causeId: data.metadata.projectId,
                        email: data.receipt_email === null ? '' : data.receipt_email,
                        amount: data.amount / 100, // Stripe amounts are in cents
                        paymentId: data.id,
                        currency: data.currency,
                        status: data.status,
                    };

                    // Save the donation data to the database
                    try {
                        const savedDonation = await saveDonation(donationData);
                        console.log(`Donation saved: ${savedDonation.id}`);
                    } catch (error: any) {
                        console.error(`Error saving donation: ${error.message}`);
                    }
                    
                    break;
                default:
                    throw new Error(`Unhandled event: ${event.type}`);
            }
            
        } catch (error) {
            console.log(error);
            return NextResponse.json(
                { message: "Webhook handler failed" },
                { status: 500 },
            );
        }
    }
    // Return a response to acknowledge receipt of the event.
    return NextResponse.json({ message: "Received" }, { status: 200 });
}