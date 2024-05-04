import {SimpleGrid, Container, Divider, Center} from '@mantine/core';
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import classes from './ProjectPreviewCardsSlider.module.css';
import {ProjectType} from "@/utils/my-types";
import {GetAllProjectsStaticContent} from "@/content/projects/projects-content";
import {useTranslations} from "next-intl";

export function ProjectPreviewCardsSlider(props: {amount: number}) {

    const projectsStaticContent: ProjectType[] = GetAllProjectsStaticContent(props.amount);
    const projT = useTranslations('PROJECTS');
    const projects = projectsStaticContent
        .filter(proj => !proj.is_campaign)
        .map((proj) => {
        const title = projT(proj.translation_key + '.TITLE');
        const description = projT(proj.translation_key + '.DESCRIPTION');
        return (
            <ProjectPreviewCard project={proj} title={title} description={description}/>
        );
    });
    
    // const campaigns = projectsStaticContent
    //     .filter(proj => proj.is_campaign)
    //     .map((proj) => {
    //     const title = projT(proj.translation_key + '.TITLE');
    //     const description = projT(proj.translation_key + '.DESCRIPTION');
    //     return (
    //         <ProjectPreviewCard project={proj} title={title} description={description}/>
    //     );
    // });

    return (
        <Container className={classes.container} size="lg">

            <SimpleGrid cols={{ base: 1, sm: 3, md: 3 }} spacing={45} verticalSpacing={45}>
                {projects}
            </SimpleGrid>
            
            <Divider color="transparent" mb={45} />

            {/*<SimpleGrid cols={{ base: 1, sm: 1, md: 1 }} spacing="xl">*/}
            {/*    {campaigns}*/}
            {/*</SimpleGrid>*/}
            
        </Container>
    );
}