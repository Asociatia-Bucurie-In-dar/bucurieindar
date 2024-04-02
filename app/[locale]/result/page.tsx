import type { Stripe } from "stripe";

import { stripe } from "@/utils/stripe/stripe";
import {Center, Container, Divider} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

import {MyZIndexes} from "@/utils/my-constants";
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";
import DonationConfetti from "@/components/CoolEffects/DonationConfetti";
import {track} from "@vercel/analytics";
import {useTranslations} from "next-intl";
//import confetti from "canvas-confetti";

export default async function ResultPage({searchParams}: { searchParams: { session_id: string } }) {
    
    const t = useTranslations("DONATIONS");
    
    if (!searchParams.session_id)
        throw new Error("Please provide a valid session_id (`cs_test_...`)");

    const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.retrieve(searchParams.session_id, {
            expand: ["line_items", "payment_intent"],
        });

    const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;
    const items = checkoutSession.line_items?.data as Stripe.Checkout.SessionCreateParams.LineItem[] | undefined;
    

    if (paymentIntent.status === 'succeeded')
    {
        try {
            const amount = items?.pop()?.price_data?.unit_amount ?? 0;
            track('Donation', {
                project: items?.pop()?.price_data?.product_data?.name ?? "Unknown",
                amount: amount / 100});
        }
        catch (error) {
            console.error(`Error tracking donation`);
        }
        
        return (
        <Container className={commonClasses.container}>
            <TitleWithDescription title={t('SUCCESS_TITLE')} 
                                  description={t('SUCCESS_DESCRIPTION')} />
            
            <Center>
            <ConfettiButton text={t('BACK')} size={"lg"} mt={"xl"} />
            </Center>
            
            <DonationConfetti />
            
            <Divider color="transparent" mb={150}/>
        </Container>
    );
        }
    else {
        return (
            <Container className={commonClasses.container}>
                <TitleWithDescription title={t('ERROR_TITLE')}
                                      description={t('ERROR_DESCRIPTION')}/>

                <Center>
                    <ConfettiButton text={t('BACK')} size={"lg"} mt={"xl"}/>
                </Center>

                <Divider color="transparent" mb={150}/>
            </Container>
        );
    }
};