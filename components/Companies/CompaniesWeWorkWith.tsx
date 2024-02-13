import {Paper, Text, Title, Button, SimpleGrid, Container, Avatar, Center, Divider} from '@mantine/core';
import classes from './CompaniesWeWorkWith.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import favIcon from "@/public/favicon.svg";

interface CardProps {
    image: string;
    title: string;
    category: string;
}

const data = [
    {
        image: favIcon.src,
        title: 'Best forests to visit in North America',
        category: 'nature',
    },
    {
        image: favIcon.src,
        title: 'Hawaii beaches review: better than you think',
        category: 'beach',
    },
    {
        image: favIcon.src,
        title: 'Mountains at night: 12 best locations to enjoy the view',
        category: 'nature',
    },
    {
        image: favIcon.src,
        title: 'Aurora in Norway: when to visit for best experience',
        category: 'nature',
    },
    {
        image: favIcon.src,
        title: 'Best places to visit this winter',
        category: 'tourism',
    },
    {
        image: favIcon.src,
        title: 'Active volcanos reviews: travel at your own risk',
        category: 'nature',
    },
    {
        image: favIcon.src,
        title: 'Active volcanos reviews: travel at your own risk',
        category: 'nature',
    },
    {
        image: favIcon.src,
        title: 'Active volcanos reviews: travel at your own risk',
        category: 'nature',
    },
];

function Card({ image, title, category }: CardProps) {
    return (
        <Avatar size="xl"
            src={image}
            alt={title}
        />
    );
}

export function CompaniesWeWorkWith() {
    const slides = data.map((item) => (
            <Center><Card {...item} /></Center>
    ));

    return (
        <Container size="full" className={classes.background}>
        <Container size="md" pt={50} pb={65}>
            <TitleWithDescription title={"Parteneri"} 
                                  description={"Mulțumim partenerilor noștri pentru sprijinul acordat în realizarea proiectelor noastre. Fără ajutorul lor, nu am fi putut ajuta atât de multe persoane."}/>
            
            <Divider mb="xl" color="transparent"></Divider>
            
            <Center>
            <SimpleGrid cols={{ base: 4, sm: 8 }} spacing={75} className={classes.companies} verticalSpacing={35}>
                {slides}
            </SimpleGrid>
            </Center>
        </Container>
        </Container>
    );
}