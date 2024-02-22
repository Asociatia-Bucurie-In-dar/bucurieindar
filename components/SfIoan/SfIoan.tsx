import {Text, Title, Container, Center, Image, rem} from '@mantine/core';
import classes from './SfIoan.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import {IconExternalLink} from "@tabler/icons-react";
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

export function SfIoan() {
    
    const linkProps = {
        href: "https://centrulsfantulioancelmilostiv.org",
        rel:"noopener noreferrer",
        target:"_blank"
    };
    
    return (
        <Container className={commonClasses.darkerBackground} size="full" pt={0} pb={53}>
            <Container size="lg" className={classes.wrapper}>
                <Center>
                    <div className={classes.roundedImageWrapper}>
                        <Image src="/sfIoan.png" alt={"Icoana Sfantul Ioan"} loading="lazy" width={rem(280)} height={rem(280)}/>
                    </div>
                </Center>
                <div className={classes.body}>
                    <Center>
                        <Title className={classes.titleBig} component={Link} {...linkProps}>
                            Centrul Sf. Ioan cel Milostiv <IconExternalLink color="green"/>
                        </Title>
                    </Center>

                    <Center>
                        <Text fz="md" c="dimmed" style={{textAlign: "center"}} component={Link} {...linkProps}>
                            Avem deasemenea proiectul Centrul Sfantul Ioan cel Milostiv, pentru tratarea dependentelor de multe feluri. Suntem aici pentru a vă ajuta pe dumneavoastră și pe cei în nevoie. Puteti vedea mai multe detalii pe site-ul oficial dand <b>click aici</b>.
                        </Text>
                    </Center>
                </div>
            </Container>
        </Container>
    );
}