'use client';
import classes from './TeleportButton.module.css';
import React, { useRef } from 'react';
import { Button } from '@mantine/core';
import {IconArrowDown, IconChevronDown} from "@tabler/icons-react";
import confetti from "canvas-confetti";
import {MyZIndexes} from "@/utils/my-constants";

export function TeleportButton(props: { targetID:string, text:string, variant?:string, size?:string, disableConfetti?:boolean, color?:string }) {
    const scrollToSection = () => {
        document.getElementById(props.targetID)?.scrollIntoView({ behavior: 'smooth' });
        if (!props.disableConfetti)
        {
            handleButtonClicked();
        }
    };

    const handleButtonClicked = () => {
        fire(0.2, {spread: 60,});
        fire(0.1, {spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2});
        fire(0.1, {spread: 120, startVelocity: 45,});
    };

    const defaults = { origin: { y: 0.6 } };
    const zIndex = MyZIndexes.Confetti;

    function fire(particleRatio: any, opts: any) {
        confetti({...defaults, ...opts,
            particleCount: Math.floor(150 * particleRatio),
            zIndex: zIndex,
        });
    }

    return (
    <Button variant={props.variant ?? "gradient"}
            gradient={{ from: 'pink', to: 'yellow', deg: 90 }}
            color={props.color ?? ''}
            onClick={scrollToSection}
            name={props.text}
            size={props.size ?? "lg"}
            aria-label={props.text}
            fw={600}
    >
        {props.text} <IconArrowDown size={20} style={{marginLeft: 10}}/> 
    </Button>
    );
}
