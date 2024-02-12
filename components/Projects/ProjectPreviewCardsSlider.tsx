import {Group, SimpleGrid, Container, Title, Text} from '@mantine/core';
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import classes from './ProjectPreviewCardsSlider.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

export function ProjectPreviewCardsSlider(props: {amount: number}) {

    const projectsData = [
        {id: '1', imagePath: '/public/favicon.svg', title: 'Proiect 1', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 30000, donatedSoFar: 5000 },
        {id: '2', imagePath: '/public/favicon.svg', title: 'Proiect 2', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 50000, donatedSoFar: 30000 },
        {id: '3', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 80000, donatedSoFar: 10000 },
        {id: '4', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 80000, donatedSoFar: 10000 },
        {id: '5', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 80000, donatedSoFar: 10000 },
        {id: '6', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 80000, donatedSoFar: 10000 },
        {id: '7', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 80000, donatedSoFar: 10000 },
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