import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ChatButton } from '@/components/ChatButton/ChatButton';
import { theme } from '@/theme';
import FirstTimeConfetti from "@/components/CoolEffects/FirstTimeConfetti";
import {createTheme} from "@mantine/core";
//import WavySeparator from '@/components/WavySeparator/WavySeparator';
import {locales} from "@/middleware";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from "next-intl";

export function generateStaticParams() {
    return locales.map((locale:string) => ({locale}));
}
export async function generateMetadata({children, params: {locale}}: { children: React.ReactNode; params: {locale: string}; }) {
    const commonT = await getTranslations({locale: locale, namespace: 'COMMON'});
    const heroT = await getTranslations({locale: locale, namespace: 'HOME_HERO'});
    const assosiationName = commonT('ASSOCIATION_FULL');
    return {
        title: {
            default: assosiationName,
            template: '%s | ' + assosiationName,
        },
        description: heroT('MOTTO_FIRST_PART') + ' ' + heroT('MOTTO_SECOND_PART'),
    };
}

export default function RootLayout({children, params: {locale}}: { children: React.ReactNode; params: {locale: string}; }) {
    unstable_setRequestLocale(locale);

    const headerT = useTranslations('HEADER');
    const commonT = useTranslations('COMMON');

    const headerTranslations = {
        home: { label: headerT('HOME.LABEL'), link: headerT('HOME.LINK') },
        projects: { label: headerT('PROJECTS.LABEL'), link: headerT('PROJECTS.LINK') },
        about: { label: headerT('ABOUT.LABEL'), link: headerT('ABOUT.LINK') },
        gallery: { label: headerT('GALLERY.LABEL'), link: headerT('GALLERY.LINK') },
        blog: { label: headerT('BLOG.LABEL'), link: headerT('BLOG.LINK') },
        contact: { label: headerT('CONTACT.LABEL'), link: headerT('CONTACT.LINK') },
        donate: commonT('DONATE')
    };
    
  return (
    <html lang={"ro"}>
    <head>
        <ColorSchemeScript/>
        <link rel="shortcut icon" href="/logoPng.png"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </head>
    <body>
    <MantineProvider theme={theme} defaultColorScheme="light">
        <Header headerTranslations={headerTranslations} locale={locale}/>
        {children}
        <ChatButton />
        <Footer/>
    </MantineProvider>

    <FirstTimeConfetti/>
    </body>
    </html>
  );
}
