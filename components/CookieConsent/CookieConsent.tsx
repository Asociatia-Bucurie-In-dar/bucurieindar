'use client';
import React, { useState, useEffect } from 'react';
import {Button, Center, Group, Modal, Text} from '@mantine/core';
import loadScript from './loadScript';
import {CookiesTranslationType} from "@/utils/my-types";
import {LanguagePicker} from "@/components/LanguagePicker/LanguagePicker";
import {MyZIndexes} from "@/utils/my-constants";
import {MyRoutePaths} from "@/utils/route-paths";
import classes from "@/components/Popups/DonatePopup/DonatePopupButton.module.css";
import Link from "next/link"; // Make sure this is correctly imported

const localStorageKEY = 'bucurieindar_org_cookie_consent_v1';

function LoadAllScripts() {
    // Load Google Tag Manager
    loadScript('https://www.googletagmanager.com/gtm.js?id=GTM-T6X3VKMD', 'gtm-script');
    // Load Google Analytics and initialize it after the script is loaded
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-D2H2GZ54SM', 'ga-script', () => {
        if (window !== undefined) {
            window.gtag('js', new Date());
            window.gtag('config', 'G-D2H2GZ54SM', {'anonymize_ip': true});
        }
    });
}

export default function CookieConsent ( props: { translations: CookiesTranslationType } ) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Ensure these are initialized outside of any component, perhaps in a separate file or included directly in a script tag in your HTML.
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        
        const consent = localStorage.getItem(localStorageKEY);
        const isOnPrivacyPage = window.location.pathname === props.translations.PrivacyPolicyLink;
        const isOnTermsPage = window.location.pathname === props.translations.TermsAndConditionsLink;
        if (isOnPrivacyPage || isOnTermsPage) {
            setIsVisible(false);
        }
        else if (!consent) {
            setIsVisible(true);
        } else {
           LoadAllScripts();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(localStorageKEY, 'true'); // Store consent status
        setIsVisible(false); // Hide consent modal
        LoadAllScripts();
    };

    return (
        <Modal zIndex={MyZIndexes.CookieConsent}
            opened={isVisible}
            onClose={() => setIsVisible(false)}
            title={props.translations.Title}
            centered
            closeOnClickOutside={false}
        >
            <Text>{props.translations.TextFirst}, <Link href={props.translations.PrivacyPolicyLink} target="_blank" className={classes.link}>{props.translations.PrivacyPolicy}</Link>, {props.translations.And} <Link href={props.translations.TermsAndConditionsLink} target="_blank" className={classes.link}>{props.translations.TermsAndConditions}</Link>.</Text>
            <Group mt="md">
                <Button onClick={handleAccept}>{props.translations.Accept}</Button>
                <LanguagePicker />
            </Group>
        </Modal>
    );
}
