import {Avatar, Container, Divider, Group, SimpleGrid, Text, Title} from '@mantine/core';
import classes from './OurTeam.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import member from '@/public/team/member.svg';
import {useTranslations} from "next-intl";

export function OurTeam() {
    const t = useTranslations('OUR_TEAM');

    const data = [
        {
            avatar: member.src,
            name: t('TEAM_MEMBERS.FIRST.NAME'),
            job: t('TEAM_MEMBERS.FIRST.ROLE'),
        },
        {
            avatar: member.src,
            name: t('TEAM_MEMBERS.SECOND.NAME'),
            job: t('TEAM_MEMBERS.SECOND.ROLE'),
        },
        {
            avatar: member.src,
            name: t('TEAM_MEMBERS.THIRD.NAME'),
            job: t('TEAM_MEMBERS.THIRD.ROLE'),
        },
        {
            avatar: member.src,
            name: t('TEAM_MEMBERS.FOURTH.NAME'),
            job: t('TEAM_MEMBERS.FOURTH.ROLE'),
        },
        {
            avatar: member.src,
            name: t('TEAM_MEMBERS.FIFTH.NAME'),
            job: t('TEAM_MEMBERS.FIFTH.ROLE'),
        },
        {
            avatar: member.src,
            name: t('TEAM_MEMBERS.SIXTH.NAME'),
            job: t('TEAM_MEMBERS.SIXTH.ROLE'),
        }
    ];
    
    const items = data.map((item, index) => {
        return <Group gap="xl">
                <Avatar size="lg" src={item.avatar} radius={40} placeholder="blur" alt={item.name + " " + item.job}/>
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
                
                <TitleWithDescription title={t('TITLE')} 
                                      description={t('DESCRIPTION')}/>
                
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