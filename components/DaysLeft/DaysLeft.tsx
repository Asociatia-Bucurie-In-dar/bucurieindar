'use client';
import classes from './DaysLeft.module.css';
import { useState, useEffect } from 'react';

export function DaysLeft(props: { endDate: string|undefined, leftTranslation: string, daysTranslation: string}) {
    const calculateTimeLeft = () => {
        // Convert both times to UTC
        const nowUTC = Date.now();
        const endUTC = Date.parse(props.endDate ?? nowUTC.toString());

        const difference = endUTC - nowUTC;
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 10000);

        return () => clearTimeout(timer);
    });
    
    return <>
        <>
            {props.leftTranslation}: {Object.keys(timeLeft).length > 0 ? timeLeft.days : 0} {props.daysTranslation}
        </>
    </>;
}