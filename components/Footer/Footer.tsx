import {Text, Container, ActionIcon, Group, rem, Title, Center, SimpleGrid, Divider} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import Link from "next/link";
import {useTranslations} from "next-intl";
import {MyRoutePaths} from "@/utils/route-paths";

function link(link: string, label: string) {
    return (
        <Text component={Link} href={link} c="customDimmed" size="sm" fw={rem(500)}>
            <Center>{label}</Center>
        </Text>
    );
}
export function Footer() {
    const t = useTranslations('HEADER');
    const commonT = useTranslations('COMMON');
    const heroT = useTranslations('HOME_HERO');
    
    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size="lg">
                <div className={classes.logo}>
                    <Title className={classes.title} size={18}>
                        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                            <Link href={t('HOME.LINK')}>
                                {commonT('ASSOCIATION_FULL')}
                            </Link>
                        </Text>
                    </Title>
                    <Text size="sm" c="customDimmed" className={classes.description} fw={rem(500)} mt={5} mb="md">
                        {commonT('INDEPENDENT_NON_PROFIT')}
                    </Text>
                    <Text size="md" c="customDimmed" className={classes.description} fw={rem(500)}>
                        {heroT('MOTTO_FIRST_PART')}{' '}{heroT('MOTTO_SECOND_PART')}.
                    </Text>
                </div>
            </Container>
            <Divider color="transparent" mb="lg" />
            <Container size="md">
                <Center>
            <SimpleGrid cols={5}>
                {link(t('HOME.LINK'), t('HOME.LABEL'))}
                {link(t('PROJECTS.LINK'), t('PROJECTS.LABEL'))}
                {link(t('ABOUT.LINK'), t('ABOUT.LABEL'))}
                {link(t('GALLERY.LINK'), t('GALLERY.LABEL'))}
                {/*{link(MyRoutePaths.Blog, t('BLOG.LABEL'))}*/}
                {link(t('CONTACT.LINK'), t('CONTACT.LABEL'))}
            </SimpleGrid>
                </Center>
            </Container>
            <Container className={classes.afterFooter}>
                <Text c="customDimmed" size="sm" fw={400}>
                    © {new Date().getFullYear()} {commonT('ASSOCIATION_FULL')}
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    
                </Group>
            </Container>
        </footer>
    );
}