import { SimpleGrid, Container } from '@mantine/core';
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import classes from './ProjectPreviewCardsSlider.module.css';
import {ProjectType} from "@/utils/my-types";
import {GetAllProjectsStaticContent} from "@/content/projects/projects-content";

export function ProjectPreviewCardsSlider(props: {amount: number}) {

    const projectsStaticContent: ProjectType[] = GetAllProjectsStaticContent(props.amount);
    
    const cards = projectsStaticContent.map((proj) => (
        <ProjectPreviewCard {...proj}/>
    ));

    return (
        <Container className={classes.container} size="lg">
            
            <SimpleGrid cols={{ base: 1, sm: 3, md: 3 }} spacing={45} verticalSpacing={35}>
                {cards}
            </SimpleGrid>
            
        </Container>
    );
}