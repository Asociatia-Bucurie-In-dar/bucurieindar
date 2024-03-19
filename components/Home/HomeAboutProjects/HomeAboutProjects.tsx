import {
    Badge, Group, Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem, DEFAULT_THEME, Divider, Button, CardSection,
} from '@mantine/core';
import {IconBasketHeart, IconUsersGroup, IconScript} from '@tabler/icons-react';
import classes from './HomeAboutProjects.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";
import {useTranslations} from "next-intl";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

export function HomeAboutProjects() {
    const t = useTranslations('HOME_HELP')

    const data = [
        {
            title: t('FIRST.TITLE'),
            description: t('FIRST.DESCRIPTION'),
            icon: IconBasketHeart,
        },
        {
            title: t('SECOND.TITLE'),
            description: t('SECOND.DESCRIPTION'),
            icon: IconScript,
        },
        {
            title: t('THIRD.TITLE'),
            description: t('THIRD.DESCRIPTION'),
            icon: IconUsersGroup,
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
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={iconColor}
            />
            <Text fz="lg" fw={600} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm" fw={500}>
                {feature.description}
            </Text>
        </Card>
    ));

    return (
<Container size="full" py="xl" className={commonClasses.darkerBackground}>
        <Container size="lg" mt="md">
            <Group justify="center">
                <Badge variant="gradient" size="lg" gradient={{ from: 'yellow', to: 'orange', deg: -60 }}>
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