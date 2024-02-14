"use client";
import classes from './DonatePopupButton.module.css';
import commonClasses from "@/utils/commonClasses.module.css";
import { useDisclosure } from '@mantine/hooks';
import {MyRoutePaths} from "@/utils/route-paths";
import {Button, Center, Divider, Modal, NativeSelect, Text, TextInput, rem} from "@mantine/core";
import {ProjectType} from "@/utils/my-types";
import {MyZIndexes} from "@/utils/my-constants";
import {Form} from "@storybook/components";

const data = [
    { value: 'eur', label: '🇪🇺 EUR' },
    // { value: 'usd', label: '🇺🇸 USD' },
    // { value: 'cad', label: '🇨🇦 CAD' },
    // { value: 'gbp', label: '🇬🇧 GBP' },
    // { value: 'aud', label: '🇦🇺 AUD' },
];

export function DonatePopupButton(props: {projectId: string, projectTile: string }) {
    const [opened, { open, close }] = useDisclosure(false);

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
        <Modal opened={opened} onClose={close} centered withCloseButton={false} zIndex={MyZIndexes.DonateModal} 
        size="auto">
            <Form>
            <Center><Text size="lg">
                {"Donează pentru"} <b>{props.projectTile}</b>
            </Text></Center>
            <Divider mt="sm" mb="sm"/>

            <TextInput type="number" 
                       placeholder="100 EUR" 
                       label={"Suma dorită"} 
                       rightSection={select} 
                       rightSectionWidth={115} 
                       size="lg"/>

                <Divider mb="lg"/>
                
                <Center>
                <Button type="submit" variant="gradient" gradient={{ from: 'green', to: 'lime', deg: 60 }} size="lg">
                    {"Continuă"}
                </Button>
                </Center>
            </Form>
        </Modal>
        
        <Button className={classes.donateButton}
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow', deg: 90 }}
                name={MyRoutePaths.Projects.label}
                size="sm"
                mt="md" onClick={open}>
            {"Donează"}
        </Button>
        </>;
}