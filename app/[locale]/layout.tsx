import '@mantine/core/styles.css';
import React from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ChatButton } from '@/components/ChatButton/ChatButton';
import { createTheme, MantineProvider, rem, ColorSchemeScript } from '@mantine/core';
import FirstTimeConfetti from "@/components/CoolEffects/FirstTimeConfetti";
import {locales} from "@/middleware";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from "next-intl";
import {Analytics} from "@vercel/analytics/next";
//import WavySeparator from '@/components/WavySeparator/WavySeparator';

export function generateStaticParams() {
    return locales.map((locale:string) => ({locale}));
}
export async function generateMetadata({children, params: {locale}}: { children: React.ReactNode; params: {locale: string}; }) {
    const commonT = await getTranslations({locale: locale, namespace: 'COMMON'});
    const heroT = await getTranslations({locale: locale, namespace: 'HOME_HERO'});
    const association = commonT('ASSOCIATION_FULL');
    return {
        title: {
            default: association,
            template: '%s | ' + association,
        },
        description: commonT('ASSOCIATION_FULL') + ' ' + '(' + commonT('INDEPENDENT_NON_PROFIT') + ')' + ' - ' + heroT('MOTTO_FIRST_PART') + ' ' + heroT('MOTTO_SECOND_PART'),
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
        // blog: { label: headerT('BLOG.LABEL'), link: headerT('BLOG.LINK') },
        contact: { label: headerT('CONTACT.LABEL'), link: headerT('CONTACT.LINK') },
        donate: commonT('DONATE'),
        burgerMenuLabel: commonT('BURGER_MENU_LABEL')
    };
    
    const theme = createTheme({
        colors: {
            customDimmed: [
                '#000000', // Lightest
                '#000000',
                '#000000',
                '#000000', // Light
                '#9297A0', //When dark theme
                '#000000', // Dark
                '#727A83', // Normal - this will be the primary 'dimmed' color
                '#000000',
                '#000000',
                '#000000', // Darkest
            ],
        }
    });
    
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
    <Analytics />
    <FirstTimeConfetti/>
    </body>
    </html>
  );
}
