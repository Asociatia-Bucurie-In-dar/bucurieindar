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
import { IconBowl, IconBackpack, IconMedicalCross } from '@tabler/icons-react';
import classes from './HomeAboutProjects.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

const mockdata = [
    {
        title: 'Hrană & apă',
        description:
            'Feeding the hungry, quenching thirst: Join us in providing essential food and water to impoverished communities. Every bit helps.',
        icon: IconBowl,
    },
    {
        title: 'Ajutor educație',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        icon: IconBackpack,
    },
    {
        title: 'Ajutor medical',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconMedicalCross,
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
<Container size="full" py="xl" className={classes.background}>
        <Container size="md" mt="md">
            <Group justify="center">
                <Badge variant="gradient" size="lg" gradient={{ from: 'yellow', to: 'orange', deg: -60 }}>
                    Cum putem ajuta
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Despre proiecte
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Acestea sunt categoriile de proiecte pe care le avem în desfășurare.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    
    <Divider color="transparent" mb="md"/>
    
</Container>
    );
}