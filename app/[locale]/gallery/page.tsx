import {Center, Container, Divider, Text, Title} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Gallery} from "@/components/Gallery/Gallery";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";
import classes from "@/components/SfIoan/SfIoan.module.css";
import Link from "next/link";
import {IconBrandFacebook, IconExternalLink} from "@tabler/icons-react";
import {contactInfo} from "@/content/contact/my-contact";

export async function generateMetadata({params: {locale}}:{ params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'GALLERY' });
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return {
        title: title,
        description: description,
    };
}

const linkProps = {
    href: contactInfo.facebookLink,
    rel:"noopener noreferrer",
    target:"_blank"
};

export default function GalleryPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('GALLERY');

    const videosData = [
        {
            title: t('VIDEOS.1.DESCRIPTION'),
            youtubeId: 'FKUvxS3grqg',
        },
        {
            title: t('VIDEOS.2.DESCRIPTION'),
            youtubeId: 'OBcBR5o5TpM',
        }
    ];

    const imagesData = [
        {
            title: t('PHOTOS.1.DESCRIPTION'),
            image: 'copii.jpeg',
        },
        {
            title: t('PHOTOS.2.DESCRIPTION'),
            image: 'supermarket.jpeg',
        },
        {
            title: t('PHOTOS.3.DESCRIPTION'),
            image: 'martisoare.jpeg',
        },
        {
            title: t('PHOTOS.4.DESCRIPTION'),
            image: 'mare.jpeg',
        },
        {
            title: t('PHOTOS.5.DESCRIPTION'),
            image: 'medicover.jpeg',
        },
        {
            title: t('PHOTOS.6.DESCRIPTION'),
            image: 'mancare.jpeg',
        },
        {
            title: t('PHOTOS.7.DESCRIPTION'),
            image: 'scoala.jpeg',
        },
        {
            title: t('PHOTOS.8.DESCRIPTION'),
            image: 'camion.jpeg',
        },
        {
            title: t('PHOTOS.9.DESCRIPTION'),
            image: 'masabucuriei.jpeg',
        },
        {
            title: t('PHOTOS.10.DESCRIPTION'),
            image: 'comunitate.jpeg',
        },
        {
            title: t('PHOTOS.11.DESCRIPTION'),
            image: 'cocos.jpeg',
        },
        {
            title: t('PHOTOS.12.DESCRIPTION'),
            image: 'portocale.jpeg',
        },
        {
            title: t('PHOTOS.13.DESCRIPTION'),
            image: 'pantofi.jpeg',
        },
        {
            title: t('PHOTOS.14.DESCRIPTION'),
            image: `copil.png`,
        },
    ];
    
  return (
    <>
        <Container className={commonClasses.container} size="xl">
          <TitleWithDescription title={t('TITLE')} />
            {/*<Center>*/}
            {/*<Text component={Link} {...linkProps}>*/}
            {/*    <IconBrandFacebook color="blue"/> <IconExternalLink color="blue"/>*/}
            {/*</Text>*/}
            {/*</Center>*/}
          <Divider mb="xl" color="transparent" />
            
            <Gallery imagesData={imagesData} videosData={videosData} />
            
          <Divider color="transparent" pb={100}/>
        </Container>
    </>
  );
}
