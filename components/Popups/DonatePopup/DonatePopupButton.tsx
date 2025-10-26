"use client";

import React, { useState, useEffect } from "react";

import { createCheckoutSession } from "@/utils/stripe/stripe-actions";
import {
    Button,
    Center,
    Divider,
    Modal, Text, TextInput, rem, Paper, UnstyledButton, Checkbox
} from "@mantine/core";
import {Form} from "@storybook/components";
import {MyZIndexes} from "@/utils/my-constants";
import classes from "./DonatePopupButton.module.css";
import { useDisclosure } from '@mantine/hooks';
import {ProjectTranslationsType} from "@/utils/my-types";
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";
import {
    IconChevronRight,
    IconHeart,
    IconBuildingBank,
    IconCreditCard,
    IconCopy,
    IconCheck,
    IconCurrencyDollar
} from "@tabler/icons-react";


export function DonatePopupButton(props: {projectId: string,
    projectTile: string,
    translations: ProjectTranslationsType,
    fullWidth?: boolean}) {

    // Feature flag to easily enable/disable card payments
    const CARD_PAYMENTS_ENABLED = false;
    
    const payOption1 = props.translations.CardOption;
    const payOption2 = props.translations.BankTransferOption;
    const payOption3 = 'Revolut';
    
    const [loading, setLoading] = useState(false);
    const [badSum, setBadSum] = useState(true);
    const [payMethod, setPayMethod] = useState(CARD_PAYMENTS_ENABLED ? payOption1 : payOption2);
    const [redirectTo, setRedirectTo] = useState('');
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const [donationAmount, setDonationAmount] = useState<number>(50);
    const [customAmount, setCustomAmount] = useState<string>('');
    useEffect(() => {
        if (redirectTo) {
            window.location.assign(redirectTo);
        }
    }, [redirectTo]);
    
    const callDonateAPI = async (event: any) => {
        event.preventDefault();
        
        // Validation
        if (donationAmount < 10) {
            alert('Suma minimă este 10 EUR');
            return;
        }
        
        if (!agreeValue) {
            alert('Te rugăm să accepți termenii și condițiile');
            return;
        }
        
        setLoading(true);
        try {
        const data = 
            {
                projectId: props.projectId,
                projectTitle: props.projectTile,
                    currencyAmount: donationAmount,
                //email: input.email,
                agreed: agreeValue,
                locale: props.translations.Locale
            };
        const { client_secret, url } = await createCheckoutSession(data);
        
            if (url) {
                setRedirectTo(url as string);
            } else {
                throw new Error('No checkout URL received');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('A apărut o eroare. Te rugăm să încerci din nou.');
        } finally {
        setLoading(false);
        }
    }
    
    // Clean up unused handlers and state
    // const [input, setInput] = useState<{ customDonation: string, email: string }> ({ customDonation: '', email: '' } );
    // const handleMoneyChange: React.ChangeEventHandler<HTMLInputElement> = (
    //     e
    // ): void => {
    //     let numberAsString = e.target.value;
    //     if (numberAsString.length > 0 && numberAsString[0] === '0') {
    //         numberAsString = numberAsString.slice(1);
    //     }
    //     numberAsString = numberAsString.replace(/\D/g, '');
        
    //     setBadSum(Number(numberAsString) < 1);
        
    //     setInput({customDonation: numberAsString, email: input.email});
    // };
    
    // const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    //     setInput({customDonation: input.customDonation, email: e.target.value});
    // };

    const [agreeValue, onAgreeChange] = useState(false);
    
    // Removed unused currency data
    
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
        
        const forCard = <>
            <Text size="sm" c="dimmed" mb="md">
                Donează rapid și sigur cu cardul tău bancar prin Stripe.
            </Text>

            {/* Suggested Amounts */}
            <div>
                <Text size="sm" fw={500} mb="md">
                    Alege suma
                </Text>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
                    {[50, 100, 200].map((amount) => (
                        <Button
                            key={amount}
                            variant={donationAmount === amount && !customAmount ? "filled" : "outline"}
                            color={donationAmount === amount && !customAmount ? "yellow" : "gray"}
                            size="sm"
                            onClick={() => {
                                setDonationAmount(amount);
                                setCustomAmount('');
                            }}
                            style={{ 
                                fontWeight: 600,
                                border: donationAmount === amount && !customAmount ? '2px solid var(--mantine-color-yellow-4)' : undefined
                            }}
                        >
                            {amount} EUR
                        </Button>
                    ))}
                </div>
            </div>

            {/* Custom Amount */}
            <div>
                <Text size="sm" fw={500} mb="xs">
                    Sau introdu o altă sumă
                </Text>
                <TextInput 
                    type="number"
                    placeholder="50"
                    min="10"
                    value={customAmount}
                    onChange={(e) => {
                        setCustomAmount(e.target.value);
                        const value = parseInt(e.target.value);
                        if (!isNaN(value)) {
                            setDonationAmount(value);
                        }
                    }}
                    rightSection={<Text size="sm" fw={600} c="dimmed">EUR</Text>}
                    rightSectionWidth={50}
                       size="md"
                    mb="md"
                />
            </div>

            <Divider mb="sm" color="transparent"/>
            {/* AGREE CHECK */}
            <UnstyledButton onClick={() => onAgreeChange(!agreeValue)} className={classes.button}>
                <Checkbox
                    checked={agreeValue}
                    required
                    onChange={() => {}}
                    tabIndex={-1}
                    size="md"
                    mr="md"
                    styles={{ input: { cursor: 'pointer' } }}
                    aria-hidden
                    onClick={() => onAgreeChange(!agreeValue)}
                />
                <div>
                    <Text fw={500} mb={7} lh={1}>
                        {props.translations.IAgreeWith}:
                    </Text>
                    <Text fz="sm" fw={600}>
                        <Link href={'/' + props.translations.Locale + MyRoutePaths.Terms} target="_blank" onClick={stopPropagation} className={classes.link}>{props.translations.TermsAndConditions}</Link> {props.translations.And} <Link href={'/' + props.translations.Locale + MyRoutePaths.Privacy} target="_blank"  onClick={stopPropagation} className={classes.link}>{props.translations.PrivacyPolicy}</Link>
                    </Text>
                </div>
            </UnstyledButton>

            <Divider mb="md" color="transparent"/>
            {/* CONTINUE BUTTON */}
            <Center>
                <Button 
                    type="submit" 
                    variant="gradient" 
                    gradient={{from: 'yellow', to: 'orange', deg: 60}} 
                    size="md"
                    disabled={loading || donationAmount < 10 || !agreeValue}
                    mb="xs"
                    leftSection={<IconCreditCard size={20} />}
                    rightSection={<IconChevronRight size={20} />}
                >
                    {loading ? 'Se încarcă…' : 'Donează cu Cardul'}
                </Button>
            </Center>

            {/* Security Badge */}
            <Center>
                <Text size="xs" c="dimmed" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <IconCheck size={16} />
                    Plăți securizate prin Stripe
                </Text>
            </Center>
        </>;

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

        {/* Warning */}
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

        {/* Warning */}
        <Paper withBorder p="md" radius="md" mt="md" style={{ backgroundColor: 'light-dark(var(--mantine-color-red-0), var(--mantine-color-red-9))', borderColor: 'light-dark(var(--mantine-color-red-2), var(--mantine-color-red-7))' }}>
            <Text ta="center" fw={600} c="red" size="sm">
                {props.translations.TransferWarningFirstPart} <b>"{props.projectId}"</b> {props.translations.TransferWarningSecondPart}!
            </Text>
        </Paper>
    </>;
    
    // Removed unused radio icons

    function prepAndOpen() {
        setPayMethod(CARD_PAYMENTS_ENABLED ? payOption1 : payOption2);
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
                <Form onSubmit={callDonateAPI}>
                    {/* Header */}
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
                    
                    {/* Payment Method Tabs */}
                    <div style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        padding: '4px', 
                        backgroundColor: 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7))', 
                        borderRadius: '8px', 
                        marginBottom: '16px' 
                    }}>
                        {CARD_PAYMENTS_ENABLED && (
                            <Button
                                variant={payMethod === payOption1 ? "filled" : "subtle"}
                                color={payMethod === payOption1 ? "yellow" : "gray"}
                                size="sm"
                                fullWidth
                                onClick={() => setPayMethod(payOption1)}
                                leftSection={<IconCreditCard size={20} />}
                                style={{ fontWeight: 600 }}
                                aria-pressed={payMethod === payOption1}
                                aria-label={`Selectează ${payOption1} ca metodă de plată`}
                            >
                                {payOption1}
                            </Button>
                        )}
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

                    {CARD_PAYMENTS_ENABLED && payMethod === payOption1 ? forCard : null}
                    {payMethod === payOption2 ? forBank : null}
                    {payMethod === payOption3 ? forRevolut : null}
                </Form>
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
                leftSection={<IconHeart size={18} />}
            >
                {props.translations.Donate}&nbsp;<span style={{fontWeight: 500}}>({props.translations.Options})</span>
            </Button>
        </>;
}