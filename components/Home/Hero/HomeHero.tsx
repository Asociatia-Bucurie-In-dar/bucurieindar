import { Container, Title, Text, Button, Image } from '@mantine/core';
import classes from './HomeHero.module.css';
import { ConfettiButton } from '@/components/ConfettiButton/ConfettiButton';
import heroTemp from '@/public/hero3.png';

export function HomeHero() {
    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <Image
                    src={heroTemp.src}
                    alt="Background"
                    style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', position: 'absolute'}}
                    fetchPriority="auto" />
            </div>
            <div className={classes.overlay}></div>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Din această lume plecăm doar cu <br/>
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{from: 'pink', to: 'yellow'}}
                            >
                                {' '}faptele noastre.{' '}
                            </Text>
                        </Title>

                        <Text className={classes.description} mt={30}>
                            <b>Asoociația Bucurie în Dar</b> - Suntem sprijin, cu tot ce ne stă în putere, pentru cei care nu mai au pe cine să se sprijine. Misiunea noastră este să aducem bucurie în inimile cât mai multor oameni, mari și mici, tineri și bătrâni, împreună cu voi.

                        </Text>
                        <ConfettiButton size={"lg"} mt="xl" text={"Donează acum"}/>
                    </div>
                </div>
            </Container>
        </div>
    );
}