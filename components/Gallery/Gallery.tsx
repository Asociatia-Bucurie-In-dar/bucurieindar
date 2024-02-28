import {Card, Text, SimpleGrid, Image, AspectRatio, Divider} from '@mantine/core';
import classes from './Gallery.module.css';

const prePath = '/gallery/';

const imagesData = [
    {
        title: 'Bunul Dumnezeu lucrează prin oameni, prin voi toți care ați contribuit la fericirea acestor copii.',
        image: 'copii.jpeg',
    },
    {
        title: 'Mulțumim doamnei Monica și Asociației Amprenta că ne-au oferit increderea și ajutorul lor și uite așa am ajuns să sprijinim cel puțin 300 de copii.',
        image: 'supermarket.jpeg',
    },
    {
        title: 'Ne-am găndit să le facem o surpriză copiilor din Com. Budești, oferindu-le 30 de hanorace pe care să le folosească la antrenament. Dar surpriza lor a fost cu mult mai mare decăt a noastră.Le-am surprins pe fete pregatindu-ne mărțișoare.',
        image: 'martisoare.jpeg',
    },
    {
        title: 'Vă anunțăm că am reușit și în acest an, cu ajutorul Bunului Dumnezeu și al vostru să trimitem la mare 16 copii! Mulțumim tare, tare mult gazdelor de la CASA DEXTER, Vali și Cami, pentru că au avut grijă de copii!',
        image: 'mare.jpeg',
    },
    {
        title: 'Mulțumim Asociației Medicover pentru produsele de igienă donate!',
        image: 'medicover.jpeg',
    },
    {
        title: 'Noi vă mulțumim pentru implicare și grijă!',
        image: 'mancare.jpeg',
    },
    {
        title: 'In ultimii ani, împreună cu voi, am venit în ajutorul multor persoane, familii, copii, oameni ai străzii, nu cred ca am omis pe cineva, am ajutat fără rezerve, necondiționat, și continuam să o facem.',
        image: 'scoala.jpeg',
    },
    {
        title: '',
        image: '',
    },
    {
        title: '',
        image: '',
    },
    {
        title: '❤️',
        image: `copil.png`,
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
            <AspectRatio ratio={16 / 10}>
                <Image src={prePath + '/' + article.image} />
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