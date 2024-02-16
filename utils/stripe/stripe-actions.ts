"use server";

import type { Stripe } from "stripe";

import { headers } from "next/headers";

import { formatAmountForStripe } from "@/utils/stripe/stripe-helpers";
import { stripe } from "@/lib/stripe";

const CURRENCY = "eur";

export async function createCheckoutSession( data: {projectId : string, projectTitle: string, currencyAmount: number  } ): Promise<{ url: string | null }> {
    const origin: string = headers().get("origin") as string;

    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create({
            mode: "payment",
            submit_type: "donate",
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: CURRENCY,
                        product_data: {
                            name: data.projectTitle,
                        },
                        unit_amount: formatAmountForStripe(data.currencyAmount, CURRENCY),
                    },
                    quantity: 1,
                },
            ],
            success_url: `${origin}`,//TODO
            cancel_url: `${origin}`,//TODO
            locale: "auto",
        });

    return {
        //client_secret: checkoutSession.client_secret,
        url: checkoutSession.url,
    };
}