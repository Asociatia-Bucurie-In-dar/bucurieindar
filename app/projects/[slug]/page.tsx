import {Container, Divider, Title, Grid, GridCol, Card, Image, Text, Button} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {GetProjectStaticContentWithSlug} from "@/content/projects/projects-content";
import {ProjectDonationProgress} from "@/components/Projects/ProjectDonationProgress";
import {DonatePopupButton} from "@/components/Popups/DonatePopup/DonatePopupButton";
import {ShareButton} from "@/components/Popups/SharePopup/ShareButton";

export default function FullProjectPage({params}:any) {
    
    const projectContent = GetProjectStaticContentWithSlug(params.slug);
    
    return (
        <Container size="full">
        <Container className={commonClasses.container} size="md">
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
                    <ProjectDonationProgress id={projectContent.id}/>

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
        </Container>
  );
}
