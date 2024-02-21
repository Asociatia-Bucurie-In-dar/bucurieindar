
import {Container, Divider, Space, Text} from '@mantine/core';
import classes from './HomeFeeding.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

const data = [
    {
        title: 'Ceva1',
        stats: '99,999',
        description: 'Descriere descriere descriere descriere descriere descriere.',
    },
    {
        title: 'Ceva2',
        stats: '99,999',
        description: 'Descriere descriere descriere descriere descriere descriere.',
    },
    {
        title: 'Ceva3',
        stats: '99,999',
        description: 'Descriere descriere descriere descriere descriere descriere.',
    },
    {
        title: 'Ceva4',
        stats: '99,999',
        description: 'Descriere descriere descriere descriere descriere descriere.',
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
        <Container size="full" pt="xl">
        <Container size="lg" py="xl">
            
            <TitleWithDescription title={"Activitatea noastră"} 
                                  description={"Acesta este ajutorul oferit de voi prin noi, de la înființarea Asociației Bucurie în Dar."}/>
            
        <Container size="lg" mt="xl" className={classes.root}>{stats}</Container>
        </Container>
            <Divider mt={50} color="transparent" />
        </Container>
        
        </>;
}