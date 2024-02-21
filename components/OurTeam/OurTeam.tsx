import {Avatar, Container, Divider, Group, SimpleGrid, Text, Title} from '@mantine/core';
import classes from './OurTeam.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import member from '@/public/team/member.svg';

const data = [
    {
        avatar: member.src,
        name: 'Robert Wolfkisser',
        job: 'Engineer',
    },
    {
        avatar:
            member.src,
        name: 'Jill Jailbreaker',
        job: 'Engineer',
    },
    {
        avatar:
            member.src,
        name: 'Henry Silkeater',
        job: 'Designer',
    },
    {
        avatar:
            member.src,
        name: 'Bill Horsefighter',
        job: 'Designer',
    },
    {
        avatar:
            member.src,
        name: 'Jeremy Footviewer',
        job: 'Manager',
    },
    {
        avatar:
            member.src,
        name: 'Jeremy Footviewer',
        job: 'Manager',
    },
];

export function OurTeam() {
    
    const items = data.map((item, index) => {
        return <Group gap="xl">
                <Avatar size="lg" src={item.avatar} radius={40} placeholder="blur"/>
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
        <Container mt="xl" mb={55} size="lg">
            <Container className={classes.wrapper}>
                
                <TitleWithDescription title={"Echipa noastră"} 
                                      description={"Fa conostință cu echipa noastră. Suntem oameni pasionați de ceea ce facem și ne dorim să aducem un impact pozitiv în lumea în care trăim."}/>
                
                <Divider mt="xl" mb="sm" color="transparent" />
                
                <SimpleGrid
                    cols={{ base: 2, sm: 3, md: 3 }}
                    spacing={{ base: 'xl', md: 50 }}
                    verticalSpacing={{ base: 'xl', md: 50 }}
                >
                    {items}
                </SimpleGrid>
        </Container>
    </Container>
    );
}