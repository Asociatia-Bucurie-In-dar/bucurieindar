"use client";
import {Image, Accordion, Grid, Container, Title, Center} from '@mantine/core';
import image from '@/public/faq.svg';
import classes from './FAQ.module.css';

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

const questions = [
    {
        question: 'How can I reset my password?',
        answer: placeholder,
        value: 'reset-password',
    },
    {
        question: 'Can I create more that one account?',
        answer: placeholder,
        value: 'another-account',
    },
    {
        question: 'How can I subscribe to monthly newsletter?',
        answer: placeholder,
        value: 'newsletter',
    },
    {
        question: 'Do you store credit card information securely?',
        answer: placeholder,
        value: 'credit-card',
    }];

export function FAQ() {

    const items = questions.map((item) => (
        <Accordion.Item className={classes.item} value={item.value} key={item.value}>
            <Accordion.Control>{item.question}</Accordion.Control>
            <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
    ));
    
    return (
        <Container className={classes.background} size="full">
            <Container size="md" className={classes.wrapper}>
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Center>
                        <Image src={image.src} alt="Frequently Asked Questions" 
                            loading="lazy" placeholder="blur"/>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Title order={2} ta="left" className={classes.title}>
                            Întrebări Frecvente
                        </Title>

                        <Accordion chevronPosition="right" variant="separated" defaultValue={questions[0].value}>
                            {items}
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </Container>
    );
}