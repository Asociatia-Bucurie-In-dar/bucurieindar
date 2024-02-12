import {Text, Container, ActionIcon, Group, rem, Title} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

const data = [
    {
        title: 'About',
        links: [
            { label: 'Features', link: MyRoutePaths.Home.link },
            { label: 'Pricing', link: MyRoutePaths.Home.link },
            { label: 'Support', link: MyRoutePaths.Home.link },
            { label: 'Forums', link: MyRoutePaths.Home.link },
        ],
    },
    {
        title: 'Project',
        links: [
            { label: 'Contribute', link: MyRoutePaths.Home.link },
            { label: 'Media assets', link: MyRoutePaths.Home.link },
            { label: 'Changelog', link: MyRoutePaths.Home.link },
            { label: 'Releases', link: MyRoutePaths.Home.link },
        ],
    },
    {
        title: 'Community',
        links: [
            { label: 'Join Discord', link: MyRoutePaths.Home.link },
            { label: 'Follow on Twitter', link: MyRoutePaths.Home.link },
            { label: 'Email newsletter', link: MyRoutePaths.Home.link },
            { label: 'GitHub discussions', link: MyRoutePaths.Home.link },
        ],
    },
];

export function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
                component={Link}
                href={link.link}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Title className={classes.title} size={18} mb="xs">
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            <Link href={MyRoutePaths.Home.link}>
                                {"Asociația Bucurie în Dar"}
                            </Link>
                        </Text>
                    </Title>
                    <Text size="xs" c="dimmed" className={classes.description}>
                        {"Aici o mini-descriere a asociației. Sau un motto. Sau ceva frumos. Bla bla bla."}
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © {new Date().getFullYear()} Asociația Bucurie in Dar
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}