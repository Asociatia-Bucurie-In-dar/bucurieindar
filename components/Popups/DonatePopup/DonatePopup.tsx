"use client";
import { useDisclosure } from '@mantine/hooks';
import {Modal} from "@mantine/core";
import classes from './DonatePopup.module.css';

export function DonatePopup() {
    const [opened, { open, close }] = useDisclosure(false);
    
    return <>
        <Modal opened={true} onClose={close} title="Authentication" centered>
            TESTTTT
        </Modal>
        </>;
}