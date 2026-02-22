"use client";

import React, { useState } from "react";

import {
    Button,
    Divider,
    Modal, Text, rem, Paper
} from "@mantine/core";
import {MyZIndexes} from "@/utils/my-constants";
import classes from "./DonatePopupButton.module.css";
import { useDisclosure } from '@mantine/hooks';
import {ProjectTranslationsType} from "@/utils/my-types";
import {
    IconBuildingBank,
    IconCopy,
    IconCheck,
    IconCurrencyDollar
} from "@tabler/icons-react";


export function DonatePopupButton(props: {projectId: string,
    projectTile: string,
    translations: ProjectTranslationsType,
    fullWidth?: boolean}) {

    const payOption2 = props.translations.BankTransferOption;
    const payOption3 = 'Revolut';
    
    const [payMethod, setPayMethod] = useState(payOption2);
    const [copiedField, setCopiedField] = useState<string | null>(null);
    
    // Bank details
    const bankDetails = {
        accountName: 'ASOCIATIA BUCURIE IN DAR',
        bank: 'Banca Transilvania',
        swift: 'BTRLRO22',
        accounts: [
            {
                iban: 'RO42BTRLRONCRT0610749701',
                currency: 'RON',
                label: 'Lei (RON)',
            },
            {
                iban: 'RO89BTRLEURCRT0610749701',
                currency: 'EUR',
                label: 'Euro (EUR)',
            },
            {
                iban: 'RO93BTRLUSDCRT0610749701',
                currency: 'USD',
                label: 'Dolari (USD)',
            },
        ],
    };
    
    const copyToClipboard = async (text: string, field: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedField(field);
            setTimeout(() => setCopiedField(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    
    const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation();
    
        const [opened, {open, close}] = useDisclosure(false);

    const forBank = <>
        <Text size="sm" c="dimmed" mb="md">
            {props.translations.BankTransferDescription}
        </Text>

        {/* Bank Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Account Name */}
            <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))' }}>
                <Text size="xs" fw={500} c="dimmed" mb="xs">
                    {props.translations.Beneficiary}
                </Text>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <Text size="sm" fw={600} c="light-dark(var(--mantine-color-gray-8), var(--mantine-color-white))">
                        {bankDetails.accountName}
                    </Text>
                    <Button
                        variant="subtle"
                        size="xs"
                        onClick={() => copyToClipboard(bankDetails.accountName, 'name')}
                        leftSection={copiedField === 'name' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                        color={copiedField === 'name' ? 'green' : 'gray'}
                    >
                        {copiedField === 'name' ? 'Copiat!' : 'Copiază'}
                    </Button>
                </div>
            </Paper>

            {/* IBAN Accounts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {bankDetails.accounts.map((account) => (
                    <Paper
                        key={account.currency}
                        withBorder
                        p="md"
                        radius="md"
                        style={{ 
                            backgroundColor: 'light-dark(var(--mantine-color-yellow-0), var(--mantine-color-yellow-9))',
                            borderColor: 'light-dark(var(--mantine-color-yellow-2), var(--mantine-color-yellow-7))'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <Text size="xs" fw={500} c="light-dark(var(--mantine-color-yellow-8), var(--mantine-color-yellow-2))">
                                {account.label}
                            </Text>
                            <Text size="xs" fw={600} c="light-dark(var(--mantine-color-yellow-7), var(--mantine-color-yellow-3))">
                                {account.currency}
                            </Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                            <Text size="sm" ff="monospace" fw={700} c="light-dark(var(--mantine-color-yellow-9), var(--mantine-color-yellow-1))">
                                {account.iban}
                            </Text>
                            <Button
                                variant="subtle"
                                size="xs"
                                onClick={() => copyToClipboard(account.iban, `iban-${account.currency.toLowerCase()}`)}
                                leftSection={copiedField === `iban-${account.currency.toLowerCase()}` ? <IconCheck size={16} /> : <IconCopy size={16} />}
                                color={copiedField === `iban-${account.currency.toLowerCase()}` ? 'green' : 'yellow'}
                            >
                                {copiedField === `iban-${account.currency.toLowerCase()}` ? 'Copiat!' : 'Copiază'}
                            </Button>
                        </div>
                    </Paper>
                ))}
            </div>

            {/* SWIFT */}
            <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))' }}>
                <Text size="xs" fw={500} c="dimmed" mb="xs">
                    {props.translations.Swift}
                </Text>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <Text size="sm" ff="monospace" fw={600} c="light-dark(var(--mantine-color-gray-8), var(--mantine-color-white))">
                        {bankDetails.swift}
                    </Text>
                    <Button
                        variant="subtle"
                        size="xs"
                        onClick={() => copyToClipboard(bankDetails.swift, 'swift')}
                        leftSection={copiedField === 'swift' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                        color={copiedField === 'swift' ? 'green' : 'gray'}
                    >
                        {copiedField === 'swift' ? 'Copiat!' : 'Copiază'}
                    </Button>
                </div>
            </Paper>
        </div>

        <Paper withBorder p="md" radius="md" mt="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-red-0), var(--mantine-color-red-9))', borderColor: 'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-7))' }}>
            <Text ta="center" fw={600} c="red" size="sm">
                {props.translations.TransferWarningFirstPart} <b>"{props.projectId}"</b> {props.translations.TransferWarningSecondPart}!
            </Text>
        </Paper>
    </>;
    
    const forRevolut = <>
        <Text size="sm" c="dimmed" mb="md">
            {props.translations.RevolutDescription}
        </Text>

        {/* Revolut Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Romanian IBAN */}
            <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-blue-0), var(--mantine-color-blue-9))', borderColor: 'light-dark(var(--mantine-color-blue-2), var(--mantine-color-blue-7))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>🇷🇴</span>
                    <Text size="xs" fw={500} c="light-dark(var(--mantine-color-blue-8), var(--mantine-color-blue-2))">
                        {props.translations.IbanRomania}
                    </Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <Text size="sm" ff="monospace" fw={700} c="light-dark(var(--mantine-color-blue-9), var(--mantine-color-blue-1))">
                        RO09 BREL 0005 5218 2476 0100
                    </Text>
                    <Button
                        variant="subtle"
                        size="xs"
                        onClick={() => copyToClipboard('RO09 BREL 0005 5218 2476 0100', 'revolut-ro')}
                        leftSection={copiedField === 'revolut-ro' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                        color={copiedField === 'revolut-ro' ? 'green' : 'blue'}
                    >
                        {copiedField === 'revolut-ro' ? 'Copiat!' : 'Copiază'}
                    </Button>
                </div>
            </Paper>

            {/* International IBAN */}
            <Paper withBorder p="md" radius="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-green-0), var(--mantine-color-green-9))', borderColor: 'light-dark(var(--mantine-color-green-2), var(--mantine-color-green-7))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>🌎</span>
                    <Text size="xs" fw={500} c="light-dark(var(--mantine-color-green-8), var(--mantine-color-green-2))">
                        {props.translations.IbanInternational}
                    </Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                    <Text size="sm" ff="monospace" fw={700} c="light-dark(var(--mantine-color-green-9), var(--mantine-color-green-1))">
                        LT89 3250 0480 7561 8520
                    </Text>
                    <Button
                        variant="subtle"
                        size="xs"
                        onClick={() => copyToClipboard('LT89 3250 0480 7561 8520', 'revolut-int')}
                        leftSection={copiedField === 'revolut-int' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                        color={copiedField === 'revolut-int' ? 'green' : 'green'}
                    >
                        {copiedField === 'revolut-int' ? 'Copiat!' : 'Copiază'}
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <Text size="sm" ff="monospace" fw={600} c="light-dark(var(--mantine-color-green-8), var(--mantine-color-green-2))">
                        BIC/SWIFT: REVOLT21
                    </Text>
                    <Button
                        variant="subtle"
                        size="xs"
                        onClick={() => copyToClipboard('REVOLT21', 'revolut-swift')}
                        leftSection={copiedField === 'revolut-swift' ? <IconCheck size={16} /> : <IconCopy size={16} />}
                        color={copiedField === 'revolut-swift' ? 'green' : 'green'}
                    >
                        {copiedField === 'revolut-swift' ? 'Copiat!' : 'Copiază'}
                    </Button>
                </div>
            </Paper>

        </div>

        <Paper withBorder p="md" radius="md" mt="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-red-0), var(--mantine-color-red-9))', borderColor: 'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-7))' }}>
            <Text ta="center" fw={600} c="red" size="sm">
                {props.translations.TransferWarningFirstPart} <b>"{props.projectId}"</b> {props.translations.TransferWarningSecondPart}!
            </Text>
        </Paper>
    </>;
    
    function prepAndOpen() {
        setPayMethod(payOption2);
        open();
    }

    return <>
        <Modal 
            opened={opened} 
            onClose={close} 
            withCloseButton={true} 
            zIndex={MyZIndexes.DonateModal}
            size="auto" 
            transitionProps={{ transition: 'slide-up' }}
            aria-labelledby="donate-modal-title"
            aria-describedby="donate-modal-description"
        >
            <>
                <div>
                    <div style={{ 
                        textAlign: 'center', 
                        marginBottom: '16px',
                        padding: '4px 0'
                    }}>
                        <Text 
                            size="xl" 
                            fw={700} 
                            style={{ 
                                fontFamily: 'var(--mantine-font-family-headings)',
                                marginBottom: '4px',
                                color: 'light-dark(var(--mantine-color-gray-8), var(--mantine-color-white))'
                            }}
                        >
                            {props.projectTile}
                        </Text>
                        <Text size="md" c="dimmed" style={{ fontWeight: 500 }}>
                            {props.translations.HowToDonate}
                        </Text>
                    </div>

                    <Divider mt="xs" mb="sm" color="transparent"/>
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        padding: '4px', 
                        backgroundColor: 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7))', 
                        borderRadius: '8px', 
                        marginBottom: '16px' 
                    }}>
                        <Button
                            variant={payMethod === payOption2 ? "filled" : "subtle"}
                            color={payMethod === payOption2 ? "yellow" : "gray"}
                            size="sm"
                            fullWidth
                            onClick={() => setPayMethod(payOption2)}
                            leftSection={<IconBuildingBank size={20} />}
                            style={{ fontWeight: 600 }}
                            aria-pressed={payMethod === payOption2}
                            aria-label={`Selectează ${payOption2} ca metodă de plată`}
                        >
                            {payOption2}
                        </Button>
                        <Button
                            variant={payMethod === payOption3 ? "filled" : "subtle"}
                            color={payMethod === payOption3 ? "yellow" : "gray"}
                            size="sm"
                            fullWidth
                            onClick={() => setPayMethod(payOption3)}
                            leftSection={<IconCurrencyDollar size={20} />}
                            style={{ fontWeight: 600 }}
                            aria-pressed={payMethod === payOption3}
                            aria-label={`Selectează ${payOption3} ca metodă de plată`}
                        >
                            {payOption3}
                        </Button>
                    </div>
                    
                    <Divider mt="sm" mb="sm" color="transparent"/>

                    {payMethod === payOption2 ? forBank : null}
                    {payMethod === payOption3 ? forRevolut : null}
                </div>
            </>
            </Modal>

            <Button 
                style={{width: props.fullWidth ? 'auto' : 'max-content', minWidth: rem(100)}}
                    variant="gradient"
                gradient={{from: 'pink', to: 'yellow', deg: 90}}
                size="sm" 
                fw={600}
                mt="md" 
                onClick={prepAndOpen}
            >
                {props.translations.Donate}&nbsp;<span style={{fontWeight: 500}}>({props.translations.Options})</span>
            </Button>
        </>;
}