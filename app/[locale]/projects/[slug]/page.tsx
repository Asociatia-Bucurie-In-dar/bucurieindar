import {Container, Divider, Title, Grid, GridCol, Card, Image, Text, rem} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {GetProjectStaticContentWithSlug, GetAllProjectsStaticContent} from "@/content/projects/projects-content";
import {ProjectDonationProgress} from "@/components/Projects/ProjectDonationProgress";
import {ShareButton} from "@/components/Popups/SharePopup/ShareButton";
import {DonatePopupButton} from "@/components/Popups/DonatePopup/DonatePopupButton";
import {unstable_setRequestLocale} from "next-intl/server";
import {getTranslations} from "next-intl/server";
import {useTranslations} from "next-intl";
import {GalleryTranslations, ProjectTranslationsType} from "@/utils/my-types";
import {MyRoutePaths} from "@/utils/route-paths";
import {locales} from "@/middleware";
import {Gallery} from "@/components/Gallery/Gallery";

export function generateStaticParams() {
    const allProjects = GetAllProjectsStaticContent(99);
    return allProjects.flatMap(project => locales.map(locale => ({
        params: { locale, slug: project.slug }
    })));
}

export async function generateMetadata({params: {locale, slug}}:{ params: { locale: string, slug: string } }) {
    const projectContent = GetProjectStaticContentWithSlug(slug);
    const t = await getTranslations({locale: locale, namespace: 'PROJECTS'});
    const title = t(projectContent.translation_key + '.TITLE');
    const description = t(projectContent.translation_key + '.DESCRIPTION');
    
    return {
        title: title,
        description: description.slice(0, 100),
    };
}

export default function FullProjectPage({params: {locale, slug}}:{ params: { locale: string, slug: string } }) {
    unstable_setRequestLocale(locale);

    const projectContent = GetProjectStaticContentWithSlug(slug);
    const t = useTranslations('PROJECTS');
    const projT = useTranslations('PROJECTS.' + projectContent.translation_key);
    const commonT = useTranslations('COMMON');
    const donateT = useTranslations('PROJECTS_MORE');
    const shareT = useTranslations('SHARE');
    const title = projT('TITLE');
    const description = projT('DESCRIPTION');
    const secondDescription = projT('SECOND_DESCRIPTION');
    const translations: GalleryTranslations = {
        ShowMore: commonT('SHOW_MORE'),
        Hide: commonT('HIDE'),
    };
    
    projectContent.other_images.forEach((image, index) => {
        if (image.title === '' || image.title === undefined) {
            //nothing
        }
        else {
            if (image.title.length < 3)
                image.title = projT('PHOTOS.' + image.title);
        }
    });
    projectContent.other_videos.forEach((video, index) => {
        if (video.title === '' || video.title === undefined) {
            //nothing
        }
        else {
            if (video.title.length < 3)
                video.title = projT('PHOTOS.' + video.title);
        }
    });
    
    const donatePopupTranslations : ProjectTranslationsType = {
        Donate: donateT('DONATE'),
        Options: donateT('OPTIONS'),
        CardOption: donateT('CARD_OPTION'),
        BankTransferOption: donateT('BANK_TRANSFER_OPTION'),
        DesiredAmount: donateT('DESIRED_AMOUNT'),
        Continue: donateT('CONTINUE'),
        DonateFor: donateT('DONATE_FOR'),
        IAgreeWith: donateT('I_AGREE_TO_THE'),
        TermsAndConditions: donateT('TERMS_AND_CONDITIONS'),
        And: donateT('AND'),
        PrivacyPolicy: donateT('PRIVACY_POLICY'),
        Locale: locale,
        TransferWarningFirstPart: donateT('TRANSFER_WARNING_FIRST_PART'),
        TransferWarningSecondPart: donateT('TRANSFER_WARNING_SECOND_PART'),
    };
    
    return (
        <Container className={commonClasses.container} size="lg">
            <Title> 
                {title} 
            </Title>
        <Divider mb="xl" color="transparent" />

        <Grid>
            {/* LEFT SIDE */}
            <GridCol span={{base: 12, sm: 8}}>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image src={projectContent.image_path} alt={title} />
                </div>
                <Divider color="transparent" mb="xl"/>
                <Text c="customDimmed" fw={500}>
                    {description}
                </Text>
                <Divider color="transparent" mb="xl"/>
                <Text c="customDimmed" fw={500}>
                    {secondDescription}
                </Text>
            </GridCol>

            {/* RIGHT SIDE */}
            <GridCol span={{base: 12, sm: 4}}>
                <Card shadow="sm" padding="lg">
                    <ProjectDonationProgress id={projectContent.id} goalAmount={projectContent.goalAmount}
                        sumTranslation={commonT('NECESSARY_AMOUNT')}/>

                    <Divider color="transparent" mb={10}/>
                    
                    <DonatePopupButton projectId={projectContent.id} 
                                       projectTile={title}
                                       fullWidth={true}
                                       translations={donatePopupTranslations}/>
                    
                    <Divider color="transparent" mb={10}/>
                    <ShareButton quote = {title} translation={shareT('MAIN')} path={`/${locale}${MyRoutePaths.Projects}/${slug}`}/>
                </Card>
            </GridCol>
        </Grid>

            {/* BOTTOM GALLERY */}
            
            <Gallery imagesData={projectContent.other_images} videosData={projectContent.other_videos} translations={translations}/>

        <Divider color="transparent" pb={100}/>
        </Container>
  );
}
