import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem, DEFAULT_THEME, Divider,
} from '@mantine/core';
import {IconBasketHeart, IconUsersGroup, IconScript} from '@tabler/icons-react';
import classes from './HomeAboutProjects.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

const mockdata = [
    {
        title: 'Bunuri materiale',
        description:
            'Feeding the hungry, quenching thirst: Join us in providing essential food and water to impoverished communities. Every bit helps.',
        icon: IconBasketHeart,
    },
    {
        title: 'Formulare',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        icon: IconScript,
    },
    {
        title: 'Voluntariat',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconUsersGroup,
    },
];

export function HomeAboutProjects() {
    const iconColor = DEFAULT_THEME.colors.orange[6];
    const badgeColor = DEFAULT_THEME.colors.orange[6];
    const gradient = `linear-gradient(
            -60deg,
            var(--mantine-color-orange-4) 0%,
            var(--mantine-color-orange-7) 100%`;
    
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl"
        component={Link} href={MyRoutePaths.Projects.link}>
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={iconColor}
            />
            <Text fz="lg" fw={600} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
<Container size="full" py="xl" className={commonClasses.darkerBackground}>
        <Container size="lg" mt="md">
            <Group justify="center">
                <Badge variant="gradient" size="lg" gradient={{ from: 'yellow', to: 'orange', deg: -60 }}>
                    Ajută altfel
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Alte moduri de a ajuta
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Există multe moduri de a ajuta, nu doar prin donații. Fiecare gest contează. Iată câteva din modalitățile prin care poți contribui.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    
    <Divider color="transparent" mb="md"/>
    
</Container>
    );
}