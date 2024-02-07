"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Menu, Group, Center, Burger, Container, Drawer, Text, Title, Button, Divider } from '@mantine/core';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import confetti from 'canvas-confetti';
import { Image } from '@mantine/core';
import classes from './Header.module.css';

const home = { link: '/', label: 'Home', links: null};
const projects = { link: '/projects', label: 'Projects', links: null };
const about = { link: '/about', label: 'About', links: null };
const gallery = { link: '/gallery', label: 'Gallery', links: null };
const blog = { link: '/blog', label: 'Blog', links: null };
const dash = { link: '/dash', label: 'My Donations', links: null };
const contact = { link: '/contact', label: 'Contact', links: null };
const contactParent = { link: contact.link, label: contact.label, links: [contact, dash,] };

const headerLinks = [ home, projects, about, gallery, blog, contactParent ];
const mobileMenuLinks = [ home, projects, about, gallery, blog, contact, dash ];


export function Header() {
    const pathname = usePathname();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    const confettiClicked = () => {
        confetti({
            // Customize your confetti here
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };
    
    const DonateBtn = (<Link href={projects.link} passHref>
        <Button onClick={confettiClicked}
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow', deg: 90 }}
                name={"Donate"}
        >
            Donate
        </Button>
    </Link>);

    const renderLinks = (links: any) => {
        return links.map((link: any) => {
            if (link.links) { // If the link has sub-links
                const menuItems = link.links.map((item: any) => (
                    <Menu.Item key={item.link} component={Link} href={item.link}>
                        {item.label}
                    </Menu.Item>
                ));

                return (
                    <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                        <Menu.Target>
                            <Link href={""} key={link.label}
                                  className={classes.link}
                                  data-active={pathname === link.link || undefined}>
                                <Center inline>
                                    <span className={classes.linkLabel}>{link.label}</span>
                                    <IconChevronDown size="0.9rem" stroke={1.5} />
                                </Center>
                            </Link>
                        </Menu.Target>
                        <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                    </Menu>
                );
            } else {
                // Render a simple link if there are no sub-links
                return (
                    <Link href={link.link} key={link.label}
                          className={classes.link}
                          data-active={pathname === link.link || undefined}>
                        {link.label}
                    </Link>
                );
            }
        });
    };

// Usage in your component
    const headerItems = renderLinks(headerLinks);
    const mobileMenuItems = renderLinks(mobileMenuLinks);

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <Title className={classes.title} size={18}>
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            <Link href="/">Bucurie in Dar</Link>
                        </Text>
                    </Title>
                    <Group h="100%" gap={0} visibleFrom="sm">
                        {headerItems}
                    </Group>
                    <Group visibleFrom="sm">
                        {DonateBtn}
                        <ThemeSwitcher/>
                    </Group>
                    <Group hiddenFrom="sm">
                        {DonateBtn}
                        <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" />
                    </Group>
                </div>
            </Container>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="60%"
                padding="lg"
                hiddenFrom="sm"
                zIndex={10000}
            >
                <Divider my="sm" />
                    {mobileMenuItems}
                <Divider my="sm" />
                <Group justify="left" px="md">
                    <ThemeSwitcher/>
                </Group>
            </Drawer>
        </header>
    );
}