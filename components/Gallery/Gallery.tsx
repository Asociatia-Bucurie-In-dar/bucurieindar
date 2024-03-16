import {Card, Text, SimpleGrid, Image, AspectRatio, Divider} from '@mantine/core';
import classes from './Gallery.module.css';
import {useTranslations} from "next-intl";
import {GalleryImage, GalleryVideo} from "@/utils/my-types";
import {namedTypes} from "ast-types";
import JSXElement = namedTypes.JSXElement;

const prePath = '/gallery/';

export function Gallery(props: { videosData: GalleryVideo[], imagesData: GalleryImage[] }) {
    
    const allImageCards = props.imagesData ? props.imagesData.map((article) => (
        <Card p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={16 / 10}>
                <Image src={prePath + '/' + article.image} />
            </AspectRatio>
            <Text className={classes.title} mt={5} pt={5}>
                {article.title}
            </Text>
        </Card>
)) : [];
    
    const allVideoCards = props.videosData ? props.videosData.map((video) => (
        <Card p="md" radius="md" className={classes.card}>
            <AspectRatio ratio={16 / 9}>
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
    )) : [];
        
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