
import classes from './HomeAboutGeneral.module.css';
import {Container, Avatar, Title, Text, Divider, Center} from "@mantine/core";
import image from '/public/favicon.svg';

export function HomeAboutGeneral() {
    return <>
        <Container size="md" mt="xl" className={classes.wrapper}>
                    <div className={classes.body}>
                        <Title className={classes.titleBig} align="center">
                            Potențialul copiilor
                        </Title>
                        <Divider mt="md" color="transparent"/>
                        <Text fz="md" c="dimmed" align="center">
                            Donația ta pentru cauza noastră creează un viitor mai strălucitor, oferind educație, sănătate și hrănire esențiale copiilor nevoiași. Fiecare contribuție aduce speranță și deschide uși către un univers de posibilități. Să construim împreună un viitor mai strălucitor. Donează acum și fă o diferență! Sprijinul tău este vital în misiunea noastră de a debloca potențialul unui copil. Cu fiecare donație, putem oferi mai mult decât nevoile de bază; oferim o bază pentru învățare și creștere pe tot parcursul vieții. Programele noastre se concentrează pe educație, îngrijire medicală și împuternicirea comunităților pentru a-și ridica cei mai tineri membri.
                        </Text>
                    </div>
                <Center>
                    <Avatar className={classes.image}
                            placeholder="blur"
                            size={250} src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>
                </Center>
        </Container>
    </>;
}