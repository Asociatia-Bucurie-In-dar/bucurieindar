import {Container, Divider, Title, Grid, GridCol, Card, Image, Text} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {GetProjectStaticContentWithSlug} from "@/content/projects/projects-content";

export default function FullProjectPage({params}:any) {
    
    const slug = params.slug;
    const projectContent = GetProjectStaticContentWithSlug(slug);
    
    return (
        <Container size="full">
        <Container className={commonClasses.container} size="md">
            <Title> 
                {projectContent.title} 
            </Title>
        <Divider mb="xl" color="transparent" />

        <Grid>
            {/* LEFT SIDE */}
            <GridCol span={{base: 12, sm: 7}}>
                <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image src={projectContent.image_path} alt={projectContent.title} />
                </div>
                <Divider color="transparent" mb="xl"/>
                <Text c="dimmed">
                    {projectContent.content}
                </Text>
            </GridCol>

            {/* RIGHT SIDE */}
            <GridCol span={{base: 12, sm: 5}}>
                <Card shadow="sm" padding="lg">
                    
                </Card>
            </GridCol>
        </Grid>

        <Divider color="transparent" pb={100}/>
        </Container>
        </Container>
  );
}
