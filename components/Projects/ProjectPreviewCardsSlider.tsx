import {Group, SimpleGrid, Container, Title, Text} from '@mantine/core';
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import classes from './ProjectPreviewCardsSlider.module.css';

export function ProjectPreviewCardsSlider() {

    const projectsData = [
        {id: '1', imagePath: '/public/favicon.svg', title: 'Proiect 1', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 30000, donatedSoFar: 5000 },
        {id: '2', imagePath: '/public/favicon.svg', title: 'Proiect 2', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 50000, donatedSoFar: 30000 },
        {id: '3', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 80000, donatedSoFar: 10000 },
    ];
    
    const cards = projectsData.map((proj) => (
        <ProjectPreviewCard {...proj}/>
    ));

    return (
        <Container size="md" py="xl" mt={33}>
            
            <TitleWithDescription title="Proiectele noastre" 
                                  description="Descoperă câteva din proiectele noastre care au nevoie de ajutorul tău. Asociatia noastră are nevoie de tine pentru a putea ajuta cât mai multe persoane." />

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {cards}
            </SimpleGrid>

            <Group justify="center" mt="xl">
                <ConfettiButton text={"Vezi toate proiectele"} size="md"/>
            </Group>
            
        </Container>
    );
}