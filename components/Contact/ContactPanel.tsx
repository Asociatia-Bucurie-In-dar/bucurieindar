import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon, Divider, Container,
} from '@mantine/core';
import { IconBrandFacebook, IconBrandWhatsapp } from '@tabler/icons-react';
import { ContactIcons } from './ContactIcons';
import classes from './ContactPanel.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import Link from "next/link";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {MyRoutePaths} from "@/utils/route-paths";

const social = 
    [{icon: IconBrandFacebook, link: 'https://www.facebook.com/asociatiabucurieindar/'},
        {icon: IconBrandWhatsapp, link: 'https://wa.me/40727786725'}];

export function ContactPanel() {
    const icons = social.map((props, index) => (
        <ActionIcon key={index} size={28} className={classes.social} variant="transparent"
        component={Link} href={props.link}>
            <props.icon size="1.4rem" stroke={1.5} />
        </ActionIcon>
    ));

    return (
        <div>
            <Divider color="transparent" mb="xl"/>
        <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title mb="sm" className={classes.title}>
                        Contactați-ne
                    </Title>
                    <Text className={classes.description}>
                        {"Anularea plăților recurente se poate face şi în secțiunea"}{" "}
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'yellow', to: 'yellow' }}>
                            <Link href={MyRoutePaths.Home.link}>
                                <b>{MyRoutePaths.Dash.label}</b>
                            </Link>
                        </Text>
                    </Text>
                    <Text className={classes.description} mt="sm" mb={30}>
                        <b>
                            {"Vă rugăm să sunați inainte de a veni la sediul nostru. Vă mulțumim!"}
                        </b>
                    </Text>

                    <ContactIcons />

                    <Group mt="xl">{icons}</Group>
                </div>
                <div className={classes.form}>
                    <TextInput
                        label="Email"
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label={"Nume"}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                        required
                        label={"Mesajul tău"}
                        minRows={4}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button className={classes.control}> {"Trimite mesaj"} </Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
        </div>
    );
}