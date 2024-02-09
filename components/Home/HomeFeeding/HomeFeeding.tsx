
import {Container, Space, Text} from '@mantine/core';
import classes from './HomeFeeding.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

const data = [
    {
        title: 'Beneficiari',
        stats: '6,000',
        description: 'Beneficiarii noștri primesc mese sănătoase în fiecare zi.',
    },
    {
        title: 'Mese oferite',
        stats: '30,000',
        description: 'Mesele oferite de către asociația noastră până în prezent.',
    },
    {
        title: 'Mese lunar',
        stats: '48,000',
        description: 'Mesele oferite lunar de către asociația noastră.',
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
        <Container size="full" mt="xl" className={classes.background}>
        <Container size="md" py="xl">
            
            <TitleWithDescription title={"Masa Bucuriei"} 
                                  description={"Programul nostru de hrănire își propune să hrănească trupurile și spiritele celor care au nevoie. Prin oferirea de mese sănătoase, oferim hrana și speranță multora, asigurându-ne că niciun copil nu merge la culcare flămând în comunitățile noastre.Alăturați-vă nouă în această cauză vitală."}/>
            
        <Container mt={50} className={classes.root}>{stats}</Container>
        </Container>
        </Container>
        
        </>;
}