import { SimpleGrid, Container } from '@mantine/core';
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import classes from './ProjectPreviewCardsSlider.module.css';
import {ProjectType} from "@/utils/my-types";
import {GetProjectsStaticContent} from "@/content/projects/projects-content";

export function ProjectPreviewCardsSlider(props: {amount: number}) {

    const projectsStaticContent: ProjectType[] = GetProjectsStaticContent(props.amount);
    
    const cards = projectsStaticContent.map((proj) => (
        <ProjectPreviewCard {...proj}/>
    ));

    return (
        <Container className={classes.container}>
            
            <SimpleGrid cols={{ base: 1, sm: 3, md: 3 }} spacing={27} verticalSpacing={30}>
                {cards}
            </SimpleGrid>
            
        </Container>
    );
}