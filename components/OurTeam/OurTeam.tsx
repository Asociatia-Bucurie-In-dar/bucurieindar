import {Avatar, Center, Container, Divider, Grid, Group, SimpleGrid, Text, Title} from '@mantine/core';
import classes from './OurTeam.module.css';

const data = [
    {
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'Robert Wolfkisser',
        job: 'Engineer',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
        name: 'Jill Jailbreaker',
        job: 'Engineer',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
        name: 'Henry Silkeater',
        job: 'Designer',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
        name: 'Bill Horsefighter',
        job: 'Designer',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Jeremy Footviewer',
        job: 'Manager',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Jeremy Footviewer',
        job: 'Manager',
    },
];

export function OurTeam() {
    
    const items = data.map((item, index) => {
        return <Group gap="sm">
                <Avatar size="lg" src={item.avatar} radius={40} />
                <div>
                    <Text fz="md" fw={500}>
                        {item.name}
                    </Text>
                    <Text c="dimmed" fz="sm">
                        {item.job}
                    </Text>
                </div>
        </Group>
    });
    
    return (
        <Container mt={50} mb={60}>
            <Container className={classes.wrapper}>
                <Title className={classes.title}>Echipa noastră</Title>

                <Container size={560} p={0}>
                    <Text size="sm" c="dimmed" className={classes.description}>
                        Fa conostință cu echipa noastră. Suntem oameni pasionați de ceea ce facem și ne dorim să aducem un impact pozitiv în lumea în care trăim.
                    </Text>
                </Container>
                
                <Divider mt="xl" mb="sm" color="transparent" />

                <Center>
                <SimpleGrid
                    cols={{ base: 2, sm: 2, md: 3 }}
                    spacing={{ base: 'xl', md: 50 }}
                    verticalSpacing={{ base: 'xl', md: 50 }}
                >
                    {items}
                </SimpleGrid>
                </Center>
        </Container>
    </Container>
    );
}