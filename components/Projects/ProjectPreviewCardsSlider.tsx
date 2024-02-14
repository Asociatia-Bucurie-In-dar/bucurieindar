import { SimpleGrid, Container } from '@mantine/core';
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import classes from './ProjectPreviewCardsSlider.module.css';
import {ProjectType} from "@/utils/my-types";
export function ProjectPreviewCardsSlider(props: {amount: number}) {

    const projectsData: ProjectType[] = [
        {id: '1', slug: '111', image_name: 'flowers.jpg', title: 'Proiect 1', content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', goalAmount: 0, currentAmount: 0 },
        {id: '2', slug: '222', image_name: 'flowers.jpg', title: 'Proiect 2', content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', goalAmount: 0, currentAmount: 0 },
        {id: '3', slug: '333', image_name: 'flowers.jpg', title: 'Proiect 3', content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', goalAmount: 0, currentAmount: 0 },
        {id: '4', slug: '444', image_name: 'flowers.jpg', title: 'Proiect 3', content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', goalAmount: 0, currentAmount: 0 },
        {id: '5', slug: '555', image_name: 'flowers.jpg', title: 'Proiect 3', content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', goalAmount: 0, currentAmount: 0 },
        {id: '6', slug: '666', image_name: 'flowers.jpg', title: 'Proiect 3', content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', goalAmount: 0, currentAmount: 0 },
        {id: '7', slug: '777', image_name: 'flowers.jpg', title: 'Proiect 3', content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', goalAmount: 0, currentAmount: 0 },
    ].slice(0, props.amount);
    
    
    
    const cards = projectsData.map((proj) => (
        <ProjectPreviewCard {...proj}/>
    ));

    return (
        <Container className={classes.container}>
            
            <SimpleGrid cols={{ base: 1, sm: 3, md: 3 }} spacing="lg" verticalSpacing="xl">
                {cards}
            </SimpleGrid>
            
        </Container>
    );
}