import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';
import {contactInfo} from "@/content/contact/my-contact";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon style={{ width: rem(24), height: rem(24) }} />
            </Box>

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    { title: 'Email', description: contactInfo.email, icon: IconAt },
    { title: 'Telefon', description: contactInfo.phone, icon: IconPhone },
    { title: 'Adresa', description: contactInfo.address, icon: IconMapPin },
    { title: "Ore lucru", description: '9 a.m. – 5:30 p.m.', icon: IconSun },
];

export function ContactIcons() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}