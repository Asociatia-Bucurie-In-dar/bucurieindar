import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import {Card, Text, Group, Center, rem, SimpleGrid, Image, AspectRatio} from '@mantine/core';
import classes from './Gallery.module.css';

const mockdata = [
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
    {
        title: 'Scurtă descriere a fotografiei',
        image: '/flowers.jpg',
    },
];

export function Gallery() {
    
    const allCards = mockdata.map((article) => (
        <Card p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    )); 
        
    return (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="lg" verticalSpacing="xl">
            {allCards}
        </SimpleGrid>
    );
}