import {Container, Divider, Title, Grid, GridCol, Card, Image, Text } from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {GetProjectStaticContentWithSlug, GetAllProjectsStaticContent} from "@/content/projects/projects-content";
import {ProjectDonationProgress} from "@/components/Projects/ProjectDonationProgress";
import {ShareButton} from "@/components/Popups/SharePopup/ShareButton";
import {DonatePopupButton} from "@/components/Popups/DonatePopup/DonatePopupButton";
import {unstable_setRequestLocale} from "next-intl/server";

// export function generateStaticParams() {
//     const allProjects = GetAllProjectsStaticContent(99);
//     return allProjects.map(project => ({
//         params: { slug: project.slug }
//     }));
// }

export function generateMetadata({params: {locale, slug}}:{ params: { locale: string, slug: string } }) {
    const projectContent = GetProjectStaticContentWithSlug(slug); //TODO pass locale too
    return {
        title: projectContent.title,
        description: projectContent.content.slice(0, 100),
    };
}

export default function FullProjectPage({params: {locale, slug}}:{ params: { locale: string, slug: string } }) {
    unstable_setRequestLocale(locale);
    
    const projectContent = GetProjectStaticContentWithSlug(slug);
    
    return (
        <Container className={commonClasses.container} size="lg">
            <Title> 
                {projectContent.title} 
            </Title>
        <Divider mb="xl" color="transparent" />

        <Grid>
            {/* LEFT SIDE */}
            <GridCol span={{base: 12, sm: 8}}>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image src={projectContent.image_path} alt={projectContent.title} />
                </div>
                <Divider color="transparent" mb="xl"/>
                <Text c="dimmed">
                    {projectContent.content}
                </Text>
            </GridCol>

            {/* RIGHT SIDE */}
            <GridCol span={{base: 12, sm: 4}}>
                <Card shadow="sm" padding="lg">
                    <ProjectDonationProgress id={projectContent.id} goalAmount={projectContent.goalAmount}/>

                    <Divider color="transparent" mb={10}/>
                    
                    <DonatePopupButton projectId={projectContent.id} 
                                       projectTile={projectContent.title}
                                        fullWidth={true}/>
                    
                    <Divider color="transparent" mb={10}/>
                    <ShareButton quote = {projectContent.title}/>
                </Card>
            </GridCol>
        </Grid>

        <Divider color="transparent" pb={100}/>
        </Container>
  );
}
