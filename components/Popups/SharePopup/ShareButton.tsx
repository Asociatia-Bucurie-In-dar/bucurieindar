"use client";
import classes from './ShareButton.module.css';
import commonClasses from "@/utils/commonClasses.module.css";
import {Button, Center, Divider, Modal, SimpleGrid, Text} from "@mantine/core";
import {MyZIndexes} from "@/utils/my-constants";
import {useDisclosure} from "@mantine/hooks";
import {
    FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton,
    FacebookShareButton, LinkedinIcon, LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "next-share";

export function ShareButton(props: {quote: string} ) {
    const [opened, { open, close }] = useDisclosure(false);
    const pathname =  window.location.href;
    
    return <>
        <Modal opened={opened} onClose={close} withCloseButton={false} zIndex={MyZIndexes.DonateModal}
               size="auto">
            <Center>
                <Text className={commonClasses.titleBigLight}>Ajută distribuind!</Text>
            </Center>
            <Divider mt="sm" mb="sm"/>
            <SimpleGrid verticalSpacing={0} cols={5}>
                <FacebookShareButton url={pathname} quote={props.quote}>
                    <FacebookIcon size={40} round />
                </FacebookShareButton>
                <TwitterShareButton url={pathname} title={props.quote}>
                    <TwitterIcon size={40} round />
                </TwitterShareButton>
                <WhatsappShareButton url={pathname} title={props.quote} separator=": ">
                    <WhatsappIcon size={40} round />
                </WhatsappShareButton>
                <LinkedinShareButton url={pathname} title={props.quote}>
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton>
                <FacebookMessengerShareButton url={pathname} appId={''}>
                    <FacebookMessengerIcon size={40} round />
                </FacebookMessengerShareButton>
            </SimpleGrid>
        </Modal>
        
        <Button variant="gradient"
                gradient={{ from: 'violet', to: 'grape', deg: 60 }}
                fullWidth
                onClick={open}>
            {"Ajută distribuind!"}
        </Button>
        </>;
}