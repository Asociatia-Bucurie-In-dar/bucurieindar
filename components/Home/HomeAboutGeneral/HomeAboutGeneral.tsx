import classes from './HomeAboutGeneral.module.css';
import {Container, Avatar, Title, Text, Divider, Center, Image, rem} from "@mantine/core";
import {useTranslations} from "next-intl";
import commonClasses from "@/utils/commonClasses.module.css";

export function HomeAboutGeneral() {
    const t = useTranslations('HOME_POTENTIAL');
    return <Container size="full" pt={35} pb={35} className={commonClasses.darkerBackground}>
        <Container size="lg" className={classes.wrapper}>
                    <div className={classes.body}>
                        <Center>
                        <Title className={classes.titleBig} >
                            {t('TITLE')}
                        </Title>
                        </Center>
                        
                        <Center>
                        <Text fz="md" c="dimmed" style={{textAlign: "center"}} fw={500}>
                            {t('DESCRIPTION')}
                        </Text>
                        </Center>
                    </div>
                <Center>
                    <div className={classes.roundedImageWrapper}>
                        <Image src="/portret.png" alt={t('IMAGE_ALT')} width={rem(250)} height={rem(250)} loading="lazy"/>
                    </div>
                </Center>
        </Container>
    </Container>;
}