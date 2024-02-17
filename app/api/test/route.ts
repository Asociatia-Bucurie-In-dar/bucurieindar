import {PrismaClient} from "@prisma/client";
import {random} from "nanoid";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

async function saveDonation(donationData: any) {
    return prisma.donation.create({
        data: donationData,
    });
}

export async function GET(req: Request) {
    const donationData = {
        causeId: '99',
        email: 'test@test.com',
        amount: 123123 / 100, // Stripe amounts are in cents
        paymentId: (Math.random() + 1).toString(36).substring(7),
        currency: 'eur',
        status: "succeeded",
    };

    // Save the donation data to the database
    try {
        const savedDonation = await saveDonation(donationData);
        console.log(`Donation saved: ${savedDonation.id}`);
    } catch (error: any) {
        console.error(`Error saving donation: ${error.message}`);
    }

    return NextResponse.json({ message: "Received" }, { status: 200 });
}