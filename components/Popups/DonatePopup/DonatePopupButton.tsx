"use client";

import React, { useState } from "react";

import { createCheckoutSession } from "@/utils/stripe/stripe-actions";
import {Button, Center, Divider, Modal, NativeSelect, Text, TextInput, rem} from "@mantine/core";
import {Form} from "@storybook/components";
import {MyZIndexes} from "@/utils/my-constants";

import { useDisclosure } from '@mantine/hooks';
import {
    IconBrandApple,
    IconBrandGoogle,
    IconBuildingBank,
    IconCreditCard
} from "@tabler/icons-react";


export function DonatePopupButton(props: {projectId: string, projectTile: string, fullWidth?: boolean}) {

    const callDonateAPI = async (event: any) => {
        event.preventDefault();
        
        const data = 
            {projectId: props.projectId, projectTitle: props.projectTile, currencyAmount: Number(input.customDonation) };
        const { url } = await createCheckoutSession(data);

        window.location.assign(url as string);
    }
    
    const [input, setInput] = useState<{ customDonation: string }> ({ customDonation: '' } );
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
        e,
    ): void => {
        let numberAsString = e.target.value;
        if (numberAsString.length > 0 && numberAsString[0] === '0') {
            numberAsString = numberAsString.slice(1);
        }
        numberAsString = numberAsString.replace(/\D/g, '');
        setInput({customDonation: numberAsString});
    };

    const data = [
        { value: 'eur', label: '🇪🇺 EUR' },
        // { value: 'usd', label: '🇺🇸 USD' },
        // { value: 'cad', label: '🇨🇦 CAD' },
        // { value: 'gbp', label: '🇬🇧 GBP' },
        // { value: 'aud', label: '🇦🇺 AUD' },
    ];
    
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

        return <>

            <Modal opened={opened} onClose={close} withCloseButton={false} zIndex={MyZIndexes.DonateModal}
                   size="auto">
                <Form onSubmit={callDonateAPI}>
                    <Center><Text size="lg">
                        {"Donează pentru"} <b>{props.projectTile}</b>
                    </Text></Center>
                    <Divider mt="sm" mb="sm"/>
                    <Center>
                        <IconCreditCard size={iconSize}/><IconBrandGoogle size={iconSize}/><IconBrandApple  size={iconSize}/>
                        <IconBuildingBank size={iconSize}/> Transfer bancar
                    </Center>
                    <Divider mt="sm" mb="sm"/>

                    <TextInput type="number"
                               placeholder="10 EUR"
                               label={"Suma dorită"}
                               rightSection={select}
                               rightSectionWidth={115}
                               size="lg"
                               onChange={handleInputChange}
                               value={input.customDonation}/>

                    <Divider mb="lg"/>

                    <Center>
                        <Button type="submit" variant="gradient" gradient={{from: 'green', to: 'green', deg: 60}} size="lg">
                            {"Continuare"}
                        </Button>
                    </Center>
                </Form>
            </Modal>

            <Button style={{width: props.fullWidth ? 'auto' : 'max-content', minWidth: rem(100)}}
                    variant="gradient"
                    gradient={{from: 'pink', to: 'yellow', deg: 90}}
                    size="sm"
                    mt="md" onClick={open}>
                <b>{"Donează"}</b>
            </Button>
        </>;
}