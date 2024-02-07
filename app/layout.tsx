import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { theme } from '@/theme';

import FirstTimeConfetti from "@/components/FirstTimeConfetti/FirstTimeConfetti";

export const metadata = {
  title: 'Asociatia Bucurie in Dar',
  description: 'With the help of the Good Lord and your support, in a joint effort, we want to bring joy to the hearts of many people, young and old, young and elderly. We have the freedom to choose what we do in this life, and we have chosen to help, and we do it with all our joy and all our love. Give joy too, together with us.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
    <head>
        <ColorSchemeScript/>
        <link rel="shortcut icon" href="/favicon.svg"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </head>
    <body>
    <MantineProvider theme={theme} defaultColorScheme="light">
        <Header/>
        {children}
        <Footer/>
    </MantineProvider>
    
    <FirstTimeConfetti/>
    </body>
    </html>
  );
}
