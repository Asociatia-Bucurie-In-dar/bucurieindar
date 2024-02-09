"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import {Menu, Group, Center, Burger, Container, Drawer, Text, Title, Divider, rem,} from '@mantine/core';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";
import { Image } from '@mantine/core';
import classes from './Header.module.css';
import {MyRoutePaths} from "@/utils/route-paths";
import {MyZIndexes} from "@/utils/my-constants";

const home = { link: MyRoutePaths.Home.link, label: MyRoutePaths.Home.label, links: null};
const projects = { link: MyRoutePaths.Projects.link, label: MyRoutePaths.Projects.label, links: null};
const about = { link: MyRoutePaths.About.link, label: MyRoutePaths.About.label, links: null};
const gallery = { link: MyRoutePaths.Gallery.link, label: MyRoutePaths.Gallery.label, links: null};
const blog = { link: MyRoutePaths.Blog.link, label: MyRoutePaths.Blog.label, links: null};
const dash = { link: MyRoutePaths.Dash.link, label: MyRoutePaths.Dash.label, links: null};
const contact = { link: MyRoutePaths.Contact.link, label: MyRoutePaths.Contact.label, links: null};
const contactParent = { link: contact.link, label: contact.label, links: [contact, dash] };

const headerLinks = [ home, projects, about, gallery, blog, contactParent ];
const mobileMenuLinks = [ home, projects, about, gallery, blog, contact, dash ];


export function Header() {
    const pathname = usePathname();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const pinned = useHeadroom({ fixedAt: 120 });

    const renderLinks = (links: any) => {
        return links.map((link: any) => {
            if (link.links) { // If the link has sub-links
                const menuItems = link.links.map((item: any) => (
                    <Menu.Item key={item.link} component={Link} href={item.link}>
                        {item.label}
                    </Menu.Item>
                ));

                return (
                    <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} 
                          closeDelay={200} withinPortal zIndex={MyZIndexes.HeaderDropdown}>
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
    var headerZIndex = MyZIndexes.Header;

    return (
        
        <header className={classes.header} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: headerZIndex,
            transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
            transition: 'transform 400ms ease',
            backgroundColor: 'var(--mantine-color-body)',
        }}>
            <Container size="md">
                <div className={classes.inner}>
                    <Title className={classes.title} size={18}>
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            <Link href={MyRoutePaths.Home.link}>LOGO</Link>
                        </Text>
                    </Title>
                    <Group h="100%" gap={0} visibleFrom="sm">
                        {headerItems}
                    </Group>
                    <Group visibleFrom="sm">
                        <ConfettiButton text={"Donează"}/>
                        <ThemeSwitcher/>
                    </Group>
                    <Group hiddenFrom="sm">
                        <ConfettiButton text={"Donează"}/>
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
                zIndex={MyZIndexes.MobileMenu}
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