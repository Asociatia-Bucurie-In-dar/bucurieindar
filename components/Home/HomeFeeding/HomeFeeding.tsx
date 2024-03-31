import {Container, Divider, Progress, rem, Space, Text} from '@mantine/core';
import classes from './HomeFeeding.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {AnimatedThing} from "@/components/CoolEffects/AnimatedNumber/AnimatedThing";
import {useTranslations} from "next-intl";

export function HomeFeeding() {
    const activityT = useTranslations('HOME_ACTIVITY');
    const commonT = useTranslations('COMMON');

    const data = [
        {
            title: activityT('ACTIVITIES.THIRD.TITLE'),
            stats: '3' + ' ' + commonT('TONS') + '+',
            progress: 45,
            description: activityT('ACTIVITIES.THIRD.DESCRIPTION'),
        },
        {
            title: activityT('ACTIVITIES.FIRST.TITLE'),
            stats: '38,000+',
            progress: 45,
            description: activityT('ACTIVITIES.FIRST.DESCRIPTION'),
        },
        {
            title: activityT('ACTIVITIES.SECOND.TITLE'),
            stats: '24' + ' ' + commonT('TONS') + '+',
            progress: 34,
            description: activityT('ACTIVITIES.SECOND.DESCRIPTION'),
        },
        {
            title: activityT('ACTIVITIES.FOURTH.TITLE'),
            stats: '26' + ' ' + commonT('TONS') + '+',
            progress: 45,
            description: activityT('ACTIVITIES.FOURTH.DESCRIPTION'),
        },
    ];
    
    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <AnimatedThing thing={stat.stats.toLocaleString()} class={classes.count}/>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description} fw={500}>{stat.description}</Text>
            <Progress animated value={stat.progress} mt="md" size="lg" radius="xl"
                      aria-label={stat.title}
                      classNames={{
                          root: classes.progressTrack,
                          section: classes.progressSection,
                      }}/>
        </div>
    ));
    return <>
        <Container size="full" pt="xl" id="ourActivitySection">
        <Container size="lg" py="xl">
            
            <TitleWithDescription title={activityT('TITLE')} 
                                  description={activityT('DESCRIPTION')} maxWidth={rem(750)}/>
            
        <Container size="lg" mt="xl" className={classes.root}>
            {stats}
        </Container>
        </Container>
            <Divider mt={50} color="transparent" />
        </Container>
        
        </>;
}