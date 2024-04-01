"use client";

import React, { useState, useEffect } from "react";

import { createCheckoutSession } from "@/utils/stripe/stripe-actions";
import {
    Button,
    Center,
    Divider,
    Modal, NativeSelect, Text, TextInput, rem, SegmentedControl, Paper, UnstyledButton, Checkbox, Title
} from "@mantine/core";
import {Form} from "@storybook/components";
import {MyZIndexes} from "@/utils/my-constants";
import classes from "./DonatePopupButton.module.css";
import { useDisclosure } from '@mantine/hooks';
import {ProjectTranslationsType} from "@/utils/my-types";
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";
import {IconBrandRevolut, IconBuildingBank, IconChevronRight, IconCreditCard} from "@tabler/icons-react";
// import {
//     IconBrandApple,
//     IconBrandGoogle,
//     IconBuildingBank,
//     IconCreditCard
// } from "@tabler/icons-react";


export function DonatePopupButton(props: {projectId: string,
    projectTile: string,
    translations: ProjectTranslationsType,
    fullWidth?: boolean}) {

    const payOption1 = props.translations.CardOption;
    const payOption2 = 'Revolut';
    const payOption3 = props.translations.BankTransferOption;
    
    const [loading, setLoading] = useState(false);
    const [badSum, setBadSum] = useState(true);
    const [payMethod, setPayMethod] = useState(payOption1);
    const [redirectTo, setRedirectTo] = useState('');
    useEffect(() => {
        if (redirectTo) {
            window.location.assign(redirectTo);
        }
    }, [redirectTo]);
    
    const callDonateAPI = async (event: any) => {
        event.preventDefault();
        
        setLoading(true);
        const data = 
            {
                projectId: props.projectId,
                projectTitle: props.projectTile,
                currencyAmount: Number(input.customDonation),
                //email: input.email,
                agreed: agreeValue,
            };
        const { client_secret, url } = await createCheckoutSession(data);
        
        setLoading(false);
        
        if (url)
        {
        setRedirectTo(url as string);
        }
    }
    
    const [input, setInput] = useState<{ customDonation: string, email: string }> ({ customDonation: '', email: '' } );
    const handleMoneyChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ): void => {
        let numberAsString = e.target.value;
        if (numberAsString.length > 0 && numberAsString[0] === '0') {
            numberAsString = numberAsString.slice(1);
        }
        numberAsString = numberAsString.replace(/\D/g, '');
        
        setBadSum(Number(numberAsString) < 1);
        
        setInput({customDonation: numberAsString, email: input.email});
    };
    
    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setInput({customDonation: input.customDonation, email: e.target.value});
    };

    const [agreeValue, onAgreeChange] = useState(false);
    
    const data = [
        { value: 'eur', label: '🇪🇺 EUR' },
        // { value: 'usd', label: '🇺🇸 USD' },
        // { value: 'cad', label: '🇨🇦 CAD' },
        // { value: 'gbp', label: '🇬🇧 GBP' },
        // { value: 'aud', label: '🇦🇺 AUD' },
    ];
    
    const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation();
    
    const iconSize = 25;
    
        const [opened, {open, close}] = useDisclosure(false);

        const select = (
            <NativeSelect
                data={data}
                rightSectionWidth={28}
                styles={{
                    input: {
                        fontWeight: 500,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        width: rem(115),
                        marginRight: rem(-2),
                    },
                }}
            />
        );
        
        const forCard = <>
            {/* EMAIL */}
            {/*<TextInput type="email"*/}
            {/*           autoComplete="email"*/}
            {/*           placeholder=""*/}
            {/*           label={"Email"}*/}
            {/*           required*/}
            {/*           size="md"*/}
            {/*           onChange={handleEmailChange}*/}
            {/*           value={input.email}/>*/}
            
            {/*<Divider mb="xs" color="transparent"/>*/}
            {/* MONEY */}
            <TextInput type="number"
                       placeholder="10 EUR"
                       required
                       label={props.translations.DesiredAmount}
                       rightSection={select}
                       rightSectionWidth={115}
                       size="md"
                       onChange={handleMoneyChange}
                       value={input.customDonation}/>

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
                        <Link href={MyRoutePaths.Terms} target="_blank" onClick={stopPropagation} className={classes.link}>{props.translations.TermsAndConditions}</Link> {props.translations.And} <Link href={MyRoutePaths.Privacy} target="_blank"  onClick={stopPropagation} className={classes.link}>{props.translations.PrivacyPolicy}</Link>
                    </Text>
                </div>
            </UnstyledButton>

            <Divider mb={30} color="transparent"/>
            {/* CONTINUE BUTTON */}
            <Center>
                <Button type="submit" variant="gradient" gradient={{from: 'green', to: 'lime', deg: 60}} size="md"
                        disabled={loading} mb="xs">
                     {props.translations.Continue}<IconChevronRight style={{marginLeft:3}} size={20} stroke={2}/>
                </Button>
            </Center>
        </>;

    const forBank = <>
        <Paper withBorder p="lg" radius="md" shadow="md">
            <Center>
                <Text size="lg"><b>RON</b> - RO42BTRLRONCRT0610749701</Text>
            </Center>
            <br></br>
            <Center>
                <Text size="lg"><b>EUR</b> - RO89BTRLEURCRT0610749701</Text>
            </Center>
            <br></br>
            <Center>
                <Text size="lg"><b>USD</b> - RO93BTRLUSDCRT0610749701</Text>
            </Center>
        </Paper>
    </>;
    
    const forRevolut = <>
        <Paper withBorder p="lg" radius="md" shadow="md">
            <span style={{fontSize: 30}}>🇷🇴</span>
            <Text size="lg" ta="left"><b>IBAN</b> - RO09 BREL 0005 5218 2476 0100</Text>
            <Divider mb="md" color="transparent"/>
            <span style={{fontSize: 30}}>🌎</span>
            <Text size="lg" ta="left"><b>IBAN</b> - LT89 3250 0480 7561 8520</Text>
            <Text size="lg" ta="left"><b>BIC/SWIFT</b> -  REVOLT21</Text>
            <Divider mb="xs" color="transparent"/>
            <Text size="lg" ta="left">
                Revolut Bank UAB <br/>
                Konstitucijos ave. 21B, 08130, Vilnius, Lithuania<br/>
                BIC bancă corespondentă: BARCGB22
            </Text>
        </Paper>
    </>;
    
    return <>
        <Modal opened={opened} onClose={close} withCloseButton={false} zIndex={MyZIndexes.DonateModal}
               size="auto" transitionProps={{ transition: 'slide-up' }}>
            <>
                <Form onSubmit={callDonateAPI}>
                    <Center><Text size="lg">
                        {props.translations.DonateFor} <b>{props.projectTile}</b>
                    </Text></Center>

                    <Divider mt="sm" mb="sm" color="transparent"/>

                    {/* SEGMENTED CONTROL */}
                    <SegmentedControl
                        radius="xl"
                        size="md"
                        fullWidth
                        data={[
                            {
                                value: payOption1,
                                label: (
                                    <Center style={{ gap: 5 }}>
                                        <IconCreditCard />
                                        <span style={{fontWeight: '600'}}>{payOption1}</span>
                                    </Center>
                                )
                            },
                            {
                                value: payOption2,
                                label: (
                                    <Center style={{ gap: 5 }}>
                                        <IconBrandRevolut />
                                        <span style={{fontWeight: '600'}}>{payOption2}</span>
                                    </Center>
                                )
                            },
                            {
                                value: payOption3,
                                label: (
                                    <Center style={{ gap: 5 }}>
                                        <IconBuildingBank />
                                        <span style={{fontWeight: '600'}}>{payOption3}</span>
                                    </Center>
                                )
                            }
                            ]}
                        defaultValue={payOption1}
                        classNames={classes}
                        onChange={(value) => setPayMethod(value)}
                    />
                    
                    <Divider mt="sm" mb="sm" color="transparent"/>

                    {payMethod === payOption1 ? forCard : null}
                    {payMethod === payOption2 ? forRevolut : null}
                    {payMethod === payOption3 ? forBank : null}
                    
                </Form>
            </>
            </Modal>

            <Button style={{width: props.fullWidth ? 'auto' : 'max-content', minWidth: rem(100)}}
                    variant="gradient"
                    gradient={{from: 'pink', to: 'yellow', deg: 90}}
                    size="sm" fw={600}
                    mt="md" onClick={open}>
                {props.translations.Donate}
            </Button>
        </>;
}