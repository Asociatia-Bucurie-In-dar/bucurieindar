import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HomeHero.module.css';
import { ConfettiButton } from '@/components/ConfettiButton/ConfettiButton';

export function HomeHero() {
    return (
        <div className={classes.root}>
            <Container size="md">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Din această lume plecăm doar cu
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                {' '}faptele noastre.{' '}
                            </Text>
                        </Title>

                        <Text className={classes.description} mt={30}>
                            <b>Asoociația Bucurie în Dar</b> este o organizație non-profit care își propune să ajute copiii și tinerii din familii defavorizate, să aibă o viață mai bună și un viitor mai bun.
                        </Text>
                        <ConfettiButton size={"lg"} mt="xl" text={"Donează acum"}/>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
}