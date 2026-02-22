import {
    Badge, Group, Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem, DEFAULT_THEME, Divider, Button, Spoiler,
} from '@mantine/core';
import {IconBasketHeart, IconUsersGroup, IconScript, IconDownload, IconExternalLink} from '@tabler/icons-react';
import classes from './HomeAboutProjects.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";
import {useTranslations} from "next-intl";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import React from "react";

const iconSize = 17;

export function HomeAboutProjects() {
    const t = useTranslations('HOME_HELP');
    const headerT = useTranslations('HEADER');
    const commonT = useTranslations('COMMON');

    const data = [
        {
            title: t('FIRST.TITLE'),
            description: t('FIRST.DESCRIPTION'),
            icon: IconBasketHeart,
            links: [
                {
                    title: 'Contact',
                    href: headerT('CONTACT.LINK'),
                    newTab: false,
                    icon: undefined
                }
            ]
        },
        {
            title: t('SECOND.TITLE'),
            description: t('SECOND.DESCRIPTION'),
            icon: IconScript,
            links: [
                {
                    title: '230',
                    href: 'https://formular230.ro/asociatia-bucurie-in-dar',
                    newTab: true,
                    icon: <IconExternalLink size={iconSize} style={{marginLeft: '2px'}}/>
                },
                {
                    title: 'Sponsor',
                    href: '/base/contract-de-sponsorizare.doc',
                    newTab: false,
                    icon: <IconDownload size={iconSize} style={{marginLeft: '2px'}}/>
                }
            ]
        },
        {
            title: t('THIRD.TITLE'),
            description: t('THIRD.DESCRIPTION'),
            icon: IconUsersGroup,
            links: [
                {
                    title: 'Contact',
                    href: headerT('CONTACT.LINK'),
                    newTab: false,
                    icon: undefined
                }
            ]
        },
    ];
    
    const iconColor = DEFAULT_THEME.colors.orange[6];
    const badgeColor = DEFAULT_THEME.colors.orange[6];
    const gradient = `linear-gradient(
            -60deg,
            var(--mantine-color-orange-4) 0%,
            var(--mantine-color-orange-7) 100%`;
    
    const features = data.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            {/*component={Link} href={ MyRoutePaths.Contact }>*/}
            <feature.icon
                style={{width: rem(50), height: rem(50)}}
                stroke={2}
                color={iconColor}
            />
            <Text fz="lg" fw={600} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>

            <div className={classes.cardButtons}>
                {feature.links.map((link) => (
                    <Link href={link.href} target={link.newTab ? '_blank' : '_self'} key={link.title} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                            variant="outline"
                            color="orange"
                            mr="xs"
                            size="sm"
                            fw={600}
                        >{link.title}{link.icon}</Button>
                    </Link>
                ))}
            </div>

            <Spoiler maxHeight={140} showLabel={commonT('SHOW_MORE')} hideLabel={commonT('HIDE')}>
            <Text fz="md" c="customDimmed" mt="sm" fw={500}>
                {feature.description}
            </Text>
                {/* Content here */}
            </Spoiler>
        </Card>
    ));
    
    // const modal = <div>
    //     <Modal opened={opened} onClose={close} withCloseButton={false} zIndex={MyZIndexes.DonateModal}
    //            size="auto" transitionProps={{ transition: 'slide-up' }}>
    //         <>
    //                 <Center><Text size="lg">
    //                     Title
    //                 </Text></Center>
    //
    //                 <Divider mt="sm" mb="sm" color="transparent"/>
    //         </>
    //     </Modal>
    //
    //     <Button style={{width: props.fullWidth ? 'auto' : 'max-content', minWidth: rem(100)}}
    //             variant="gradient"
    //             gradient={{from: 'pink', to: 'yellow', deg: 90}}
    //             size="sm" fw={600}
    //             mt="md" onClick={open}>
    //         test
    //     </Button>
    // </div>

    return (
        <Container size="full" pt="xl" pb={35} id = "otherHelpSection">
            <Container size="lg" mt="md">
                <Group justify="center">
                    <Badge variant="gradient" size="lg" gradient={{from: 'yellow', to: 'orange', deg: -60}}>
                        {t('BADGE')}
                    </Badge>
                </Group>

                <Divider color="transparent" mb={15}/>

                <TitleWithDescription title={t('TITLE')} description={t('DESCRIPTION')} />

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={45}>
                {features}
            </SimpleGrid>
        </Container>
    
    <Divider color="transparent" mb="md"/>
    
</Container>
    );
}