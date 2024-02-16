"use client";

import type Stripe from "stripe";

import React, { useState } from "react";

import { formatAmountForDisplay } from "@/utils/stripe/stripe-helpers";
import { createCheckoutSession } from "@/utils/stripe/stripe-actions";
import getStripe from "@/utils/stripe/get-stripejs";
import {Button, rem} from "@mantine/core";

interface CheckoutFormProps {
    uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
}


export function DonatePopupButton(props: {projectId: string, projectTile: string, fullWidth?: boolean}) {

    const callDonateAPI = async (event: any) => {
        event.preventDefault();
        
        const data = {projectId: props.projectId, projectTitle: props.projectTile};
        const { client_secret, url } = await createCheckoutSession(data);

        window.location.assign(url as string);
    }
    
    return <>
        <Button style={{width: props.fullWidth ? 'auto' : 'max-content', minWidth: rem(100)}}
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow', deg: 90 }}
                size="sm"
                mt="md" onClick={callDonateAPI}>
            {"Donează"}
        </Button>
        </>;
}