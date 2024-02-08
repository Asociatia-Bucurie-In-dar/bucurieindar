
import {Badge, Container, Divider, Group, Text, Title} from '@mantine/core';
import classes from './HomeFeeding.module.css';

const data = [
    {
        title: 'Beneficiari',
        stats: '6,000',
        description: '24% more than in the same month last year, 33% more that two years ago',
    },
    {
        title: 'Mese precedente',
        stats: '30,000',
        description: '13% less compared to last month, new user engagement up by 6%',
    },
    {
        title: 'Mese lunarss',
        stats: '48,000',
        description: '1994 orders were completed this month, 97% satisfaction rate',
    },
];

export function HomeFeeding() {
    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ));
    return <>
        <Container size="full" className={classes.background}>
        <Container size="md" py="xl" mt={33}>

            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Despre Mese
                </Badge>
            </Group>

            <Title order={2} className={classes.titleBig} ta="center" mt="sm">
                Masa Bucuriei
            </Title>

            <Text c="dimmed" className={classes.descriptionBig} ta="center" mt="md">
                Programul nostru de hrănire își propune să hrănească trupurile și spiritele celor care au nevoie. 
                Prin oferirea de mese sănătoase, oferim hrana și speranță multora, asigurându-ne că niciun copil nu merge la culcare flămând în comunitățile noastre.
                Alăturați-vă nouă în această cauză vitală.
            </Text>
            
        <Container mt={50} className={classes.root}>{stats}</Container>
        </Container>
        </Container>
        </>;
}