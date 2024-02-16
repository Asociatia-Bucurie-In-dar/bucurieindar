"use server";

import type { Stripe } from "stripe";

import { headers } from "next/headers";

import { formatAmountForStripe } from "@/utils/stripe/stripe-helpers";
import { stripe } from "@/lib/stripe";

const CURRENCY = "eur";

export async function createCheckoutSession( data: {projectId : string, projectTitle: string} ): Promise<{ client_secret: string | null; url: string | null }> {
    const origin: string = headers().get("origin") as string;

    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create({
            mode: "payment",
            submit_type: "donate",
            line_items: [
                {
                    quantity: 1,
                    price_data: {
                        currency: CURRENCY,
                        product_data: {
                            name: data.projectTitle,
                        },
                        unit_amount: formatAmountForStripe(
                            Number('10' as string),
                            CURRENCY,
                        ),
                    },
                },
            ],
            ...({
                success_url: `${origin}/donate-with-checkout/result?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${origin}/donate-with-checkout`,
            })
        });

    return {
        client_secret: checkoutSession.client_secret,
        url: checkoutSession.url,
    };
}

export async function createPaymentIntent(
    data: FormData,
): Promise<{ client_secret: string }> {
    const paymentIntent: Stripe.PaymentIntent =
        await stripe.paymentIntents.create({
            amount: formatAmountForStripe(
                Number(data.get("customDonation") as string),
                CURRENCY,
            ),
            automatic_payment_methods: { enabled: true },
            currency: CURRENCY,
        });

    return { client_secret: paymentIntent.client_secret as string };
}