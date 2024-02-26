import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import {Card, Text, Group, Center, rem, SimpleGrid, Image, AspectRatio, Divider} from '@mantine/core';
import classes from './Gallery.module.css';

const imagesData = [
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

const videosData = [
    {
        title: 'Video - Reportaj, Universul Credinței',
        youtubeId: 'FKUvxS3grqg',
    },
    {
        title: ' Video - Fondator Bucurie în Dar',
        youtubeId: 'OBcBR5o5TpM',
    }
];

export function Gallery() {
    
    const allImageCards = imagesData.map((article) => (
        <Card p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text className={classes.title} mt={5} pt={5}>
                {article.title}
            </Text>
        </Card>
    ));
    
    const allVideoCards = videosData.map((video) => (
        <Card p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <iframe
                    src={"https://www.youtube-nocookie.com/embed/" + video.youtubeId}
                    allowFullScreen
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </AspectRatio>
            <Text className={classes.title} mt={5} pt={5}>
                {video.title}
            </Text>
        </Card>
    ));
        
    return (
        <>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="lg" verticalSpacing="xl">
                {allVideoCards}
            </SimpleGrid>
            <Divider  mb="xl" color="transparent"/>
            <SimpleGrid cols={{base: 1, sm: 2, md: 2}} spacing="lg" verticalSpacing="xl">
                {allImageCards}
            </SimpleGrid>
        </>
    );
}