import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme,} from '@mantine/core';
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './ProjectPreviewCardsSlider.module.css';

export function ProjectPreviewCardsSlider() {

    const projectsData = [
        {id: '1', imagePath: '/public/favicon.svg', title: 'Proiect 1', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 100, donatedSoFar: 33 },
        {id: '2', imagePath: '/public/favicon.svg', title: 'Proiect 2', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 100, donatedSoFar: 33 },
        {id: '3', imagePath: '/public/favicon.svg', title: 'Proiect 3', description: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi', donationGoal: 100, donatedSoFar: 33 },
    ];
    
    const features = projectsData.map((proj) => (
        <ProjectPreviewCard {...proj}/>
    ));

    return (
        <Container size="md" py="xl" mt={33}>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Proiectele noastre.
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Descoperă câteva din proiectele noastre care au nevoie de ajutorul tău. Asociatia noastră are nevoie de tine pentru a putea ajuta cât mai multe persoane.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>

            <Group justify="center" mt="xl">
                <ConfettiButton text={"Vezi toate proiectele"}/>
            </Group>
            
        </Container>
    );
}

//NEW-------