'use client';
import { useState, useEffect } from 'react';
import { Button, Modal, Text } from '@mantine/core';
import loadScript from './loadScript'; // Make sure this is correctly imported

const localStorageKEY = 'bucurieindar_org_cookie_consent_v1';


const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Ensure these are initialized outside of any component, perhaps in a separate file or included directly in a script tag in your HTML.
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        
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
        
        const consent = localStorage.getItem(localStorageKEY);
        if (!consent) {
            setIsVisible(true);
        } else {
           LoadAllScripts();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(localStorageKEY, 'true'); // Store consent status
        setIsVisible(false); // Hide consent modal
        //LoadAllScripts();
    };

    return (
        <Modal
            opened={isVisible}
            onClose={() => setIsVisible(false)}
            title="Cookie Consent"
            centered
            closeOnClickOutside={false}
        >
            <Text>We use cookies to improve your experience. By continuing to use our site, you accept our use of cookies, Privacy Policy, and Terms of Service.</Text>
            <Button onClick={handleAccept}>Accept</Button>
        </Modal>
    );
};

export default CookieConsent;
