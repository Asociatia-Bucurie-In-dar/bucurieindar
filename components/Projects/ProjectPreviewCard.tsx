import {Card, Image, Text, Progress, CardSection, Button, Container, rem, SimpleGrid, Group} from '@mantine/core';

import classes from './ProjectPreviewCard.module.css';
import Link from "next/link";
import {ProjectTranslationsType, ProjectType} from "@/utils/my-types";
import {MyRoutePaths} from "@/utils/route-paths";
import {DonatePopupButton} from "@/components/Popups/DonatePopup/DonatePopupButton";
import {ProjectDonationProgress} from "@/components/Projects/ProjectDonationProgress";
import {useTranslations} from "next-intl";
import {DaysLeft} from "@/components/DaysLeft/DaysLeft";

export function ProjectPreviewCard(props: { project: ProjectType, title: string, description: string} ) {
    const t = useTranslations('COMMON');
    const donateT = useTranslations('PROJECTS_MORE');
    const headerT = useTranslations('HEADER');
    const donatePopupTranslations : ProjectTranslationsType = {
        Donate: donateT('DONATE'),
        Options: donateT('OPTIONS'),
        CardOption: donateT('CARD_OPTION'),
        BankTransferOption: donateT('BANK_TRANSFER_OPTION'),
        DesiredAmount: donateT('DESIRED_AMOUNT'),
        Continue: donateT('CONTINUE'),
        DonateFor: donateT('DONATE_FOR'),
        HowToDonate: donateT('HOW_TO_DONATE'),
        BankTransferDescription: donateT('BANK_TRANSFER_DESCRIPTION'),
        RevolutDescription: donateT('REVOLUT_DESCRIPTION'),
        Beneficiary: donateT('BENEFICIARY'),
        Swift: donateT('SWIFT'),
        IbanRomania: donateT('IBAN_ROMANIA'),
        IbanInternational: donateT('IBAN_INTERNATIONAL'),
        IAgreeWith: donateT('I_AGREE_TO_THE'),
        TermsAndConditions: donateT('TERMS_AND_CONDITIONS'),
        And: donateT('AND'),
        PrivacyPolicy: donateT('PRIVACY_POLICY'),
        Locale: headerT('LOCALE'),
        TransferWarningFirstPart: donateT('TRANSFER_WARNING_FIRST_PART'),
        TransferWarningSecondPart: donateT('TRANSFER_WARNING_SECOND_PART')
    };
    
    const hrefPrefix = headerT('PROJECTS.LINK');
    
    const linkProps = {
        href: hrefPrefix + '/' + props.project.slug
    };
    
    return (
            <Card withBorder radius="md" className={classes.card}>
                <CardSection>
                    <Link {...linkProps}>
                        <Image src={props.project.image_path} 
                               height={200}
                               loading="lazy"
                            placeholder="blur"/>
                    </Link>
                </CardSection>

                {/*<Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>*/}
                {/*    outstanding*/}
                {/*</Badge>*/}

                <Text className={classes.title} fw={500} component={Link} {...linkProps}>
                    {props.title}
                </Text>

                <Text c="customDimmed" className={classes.text} fw={500} lineClamp={4} component={Link} {...linkProps}>
                    {props.description}
                </Text>
                {/*<Text c="orange" fw={500} mt={3} component={Link} {...linkProps}>*/}
                {/*    {commonT('SHOW_MORE')}*/}
                {/*</Text>*/}

                <Card padding={0} mt="sm" key={props.project.id}>
                    
                    {/*<ProjectDonationProgress id={props.project.id} goalAmount={props.project.goalAmount}*/}
                    {/*                         extraAmountDonated={props.project.currentAmountExtra}*/}
                    {/*    sumTranslation={t('NECESSARY_AMOUNT')}/>*/}
                    
                    
                    <DonatePopupButton projectId={props.project.id} projectTile={props.title} 
                                       translations={donatePopupTranslations}/>

                    {props.project.is_campaign ? (
                        <Text style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            margin: '5px' // Adjust as needed for spacing from the edges
                        }} fz="md" tt="uppercase" fw={700} c="darkred" mt="sm">
                            <DaysLeft leftTranslation={t('REMAINING')} endDate={props.project.campaign_end_date} daysTranslation={t('DAYS')}/>
                        </Text>
                    ) : (<span></span>)}
                </Card>
            </Card>
    );
}