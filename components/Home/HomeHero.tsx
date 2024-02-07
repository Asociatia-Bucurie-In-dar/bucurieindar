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
                            From this life we leave only with our{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                deeds.
                            </Text>
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Bucurie in Dar Association is a non-profit organization that aims to help children and young people from disadvantaged families, to have a better life and a better future.
                        </Text>
                        <ConfettiButton size={"lg"} mt={40} text={"Donate now"}/>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
}