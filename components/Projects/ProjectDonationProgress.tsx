"use client";
import { useEffect, useState } from 'react';
import classes from './ProjectDonationProgress.module.css';
import {Progress, Text} from "@mantine/core";

const currentAmount = 1000;
const goalAmount = 10000;

export function ProjectDonationProgress (props :{id: string} ) {
    const [currentAmount, setCurrentAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const goalAmount = 10000;

    useEffect(() => {
        const fetchDonationAmount = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/donations/${props.id}`);
                const data = await response.json();
                setCurrentAmount(data.totalDonated);
            } catch (error) {
                console.error('Failed to fetch donation amount:', error);
                // Handle error appropriately
            }
            setLoading(false);
        };

        fetchDonationAmount();
    }, [props.id]);

    // You can display a loading state or a placeholder while the data is being fetched
    if (loading) {
        return <div>Loading...</div>;
    }
    
    return <>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed" mt="sm">
            Suma Necesară
        </Text>
        <Text fz="lg" fw={500}>
            {currentAmount.toLocaleString()} EUR / {goalAmount.toLocaleString()} EUR
        </Text>
        <Progress animated value={(currentAmount/goalAmount) * 100} mt="sm" size="lg" radius="xl"
                  classNames={{
                      root: classes.progressTrack,
                      section: classes.progressSection,
                  }}/>
        </>;
}