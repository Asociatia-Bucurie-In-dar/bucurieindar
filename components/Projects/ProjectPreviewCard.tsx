"use client";
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
    Card,
    Image,
    Text,
    ActionIcon,
    Badge,
    Group,
    Center,
    Avatar,
    useMantineTheme,
    rem, Progress, Divider,
} from '@mantine/core';

import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";

import classes from './ProjectPreviewCard.module.css';
import Link from "next/link";


export function ProjectPreviewCard(props: { id: string, imagePath: string, title: string, description: string, donationGoal: number, donatedSoFar: number}) {

    const theme = useMantineTheme();
    const linkProps = { href: '/projects' };
    
    return (
            <Card withBorder radius="md" className={classes.card}>
                <Card.Section>
                    <a {...linkProps}>
                        <Image src={props.imagePath} 
                               height={180}
                               loading={"lazy"}
                            placeholder="blur"/>
                    </a>
                </Card.Section>

                {/*<Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>*/}
                {/*    outstanding*/}
                {/*</Badge>*/}

                <Text className={classes.title} fw={500} component={Link} {...linkProps}>
                    {props.title}
                </Text>

                <Text fz="sm" c="dimmed" lineClamp={3} component={Link} {...linkProps}>
                    {props.description}
                </Text>

                <Card padding={0} mt="sm">
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed" mt="sm">
                        Suma Necesară
                    </Text>
                    <Text fz="lg" fw={500}>
                        ${props.donatedSoFar} / ${props.donationGoal}
                    </Text>
                    <Progress animated value={(props.donatedSoFar/props.donationGoal) * 100} mt="sm" size="lg" radius="xl"
                              classNames={{
                                  root: classes.progressTrack,
                                  section: classes.progressSection,
                              }}/>
                    
                    <ConfettiButton text={"Donează"} size="sm" mt="md"/>
                </Card>
            </Card>
    );
}