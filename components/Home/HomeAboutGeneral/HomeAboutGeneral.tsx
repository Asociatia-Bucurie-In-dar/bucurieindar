
import classes from './HomeAboutGeneral.module.css';
import {Container, Avatar, Title, Text, Divider, Center} from "@mantine/core";
import image from '/public/favicon.svg';
import commonClasses from "@/utils/commonClasses.module.css";

export function HomeAboutGeneral() {
    return <Container size="full" className={commonClasses.darkerBackground}>
        <Container size="md" pt={35} pb={45} className={classes.wrapper}>
                    <div className={classes.body}>
                        <Center>
                        <Title className={classes.titleBig} >
                            Potențialul copiilor
                        </Title>
                        </Center>
                        
                        <Center>
                        <Text fz="md" c="dimmed" style={{textAlign: "center"}}>
                            Donația ta pentru cauza noastră creează un viitor mai strălucitor, oferind educație, sănătate și hrănire esențiale copiilor nevoiași. Fiecare contribuție aduce speranță și deschide uși către un univers de posibilități. Să construim împreună un viitor mai strălucitor. Donează acum și fă o diferență! Sprijinul tău este vital în misiunea noastră de a debloca potențialul unui copil. Cu fiecare donație, putem oferi mai mult decât nevoile de bază; oferim o bază pentru învățare și creștere pe tot parcursul vieții. Programele noastre se concentrează pe educație, îngrijire medicală și împuternicirea comunităților pentru a-și ridica cei mai tineri membri.
                        </Text>
                        </Center>
                    </div>
                <Center>
                    <Avatar className={classes.image}
                            placeholder={"blur"}
                            size={250} src={image.src}/>
                </Center>
        </Container>
    </Container>;
}