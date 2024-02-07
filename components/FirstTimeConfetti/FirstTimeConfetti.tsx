"use client";

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const FirstTimeConfetti = () => {
    useEffect(() => {

        const firstTimeKey : string = 'firstTimeVisitedBucurieInDar';
        
        // Check if the user has visited before
        if (localStorage.getItem(firstTimeKey)) {
            return;
        }
        
        localStorage.setItem(firstTimeKey, 'true');
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    return null; // This component doesn't render anything
};

export default FirstTimeConfetti;
