import {Text, Container, ActionIcon, Group, rem, Title, Center, SimpleGrid, Divider} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

function link(link: { label: string, link: string }) {
    return (
        <Text component={Link} href={link.link} c="dimmed" size="sm">
                {link.label}
        </Text>
    );
}
export function Footer() {
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size="lg">
                <div className={classes.logo}>
                    <Title className={classes.title} size={18} mb="xs">
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            <Link href={MyRoutePaths.Home.link}>
                                {"Asociația Bucurie în Dar"}
                            </Link>
                        </Text>
                    </Title>
                    <Text size="xs" c="dimmed" className={classes.description}>
                        {"Misiunea noastră este să aducem bucurie în inimile cât mai multor oameni, mici și mari, tineri și bătrâni, împreună cu voi."}
                    </Text>
                </div>
            </Container>
            <Divider color="transparent" mb="lg" />
            <Container size="md">
                <Center>
            <SimpleGrid cols={6}>
                {link(MyRoutePaths.Home)}
                {link(MyRoutePaths.Projects)}
                {link(MyRoutePaths.About)}
                {link(MyRoutePaths.Gallery)}
                {link(MyRoutePaths.Blog)}
                {link(MyRoutePaths.Contact)}
            </SimpleGrid>
                </Center>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © {new Date().getFullYear()} Asociația Bucurie in Dar
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    
                </Group>
            </Container>
        </footer>
    );
}