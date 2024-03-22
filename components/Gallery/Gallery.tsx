'use client';
import {Card, Text, SimpleGrid, Image, AspectRatio, Divider, Modal, Spoiler} from '@mantine/core';
import classes from './Gallery.module.css';
import {GalleryImage, GalleryTranslations, GalleryVideo} from "@/utils/my-types";
import {namedTypes} from "ast-types";
import {useDisclosure} from "@mantine/hooks";
import {MyZIndexes} from "@/utils/my-constants";
import {useState} from "react";

export function Gallery(props: { videosData: GalleryVideo[], imagesData: GalleryImage[], translations: GalleryTranslations }) {

    const [opened, {open, close}] = useDisclosure(false);
    const [imageToOpen, setImageToOpen] = useState('');

    function openModal(image: string) {
        return () => {
            setImageToOpen(image);
            open();
        }
    }
    
    const allImageCards = props.imagesData ? props.imagesData.map((imagePath, index) => (
        <Card p="md" radius="md" className={classes.card} key={index}>
            <AspectRatio ratio={16 / 10}>
                <Image src={imagePath.image} 
                       loading="lazy" 
                       onClick={openModal(imagePath.image)} 
                       style={{cursor: 'pointer'}} radius="sm"/>
            </AspectRatio>
            <Spoiler maxHeight={120} showLabel={props.translations.ShowMore} hideLabel={props.translations.Hide} transitionDuration={0}>
                <Text className={classes.title} mt={5} pt={5}>
                    {imagePath.title}
                </Text>
            </Spoiler>
        </Card>
)) : [];
    
    const allVideoCards = props.videosData ? props.videosData.map((video, index) => (
        <Card p="md" radius="md" className={classes.card} key={index}>
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

            <Modal opened={opened} onClose={close} zIndex={MyZIndexes.DonateModal} size="auto" >
                <Image src={imageToOpen} radius="sm"/>
            </Modal>
        </>
    );
}