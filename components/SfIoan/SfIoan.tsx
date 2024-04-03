import {Text, Title, Container, Center, Image, rem} from '@mantine/core';
import classes from './SfIoan.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import {IconExternalLink} from "@tabler/icons-react";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

export function SfIoan(props: { disableBackground?: boolean }) {
    
    const t = useTranslations('SAINT_JOHN');
    
    const linkProps = {
        href: "https://centrulsfantulioancelmilostiv.org",
        rel:"noopener noreferrer",
        target:"_blank"
    };
    
    return (
        <Container className={props.disableBackground ? '' : commonClasses.darkerBackground} size="full" pt={47} pb={47}>
            <Container size="lg" className={classes.wrapper}>
                <Center>
                    <div className={classes.roundedImageWrapper}>
                        <Image src="/sfIoan.png" alt={t('IMAGE_ALT')} 
                               width={rem(280)} height={rem(280)} 
                               className={classes.image} loading="lazy"/>
                    </div>
                </Center>
                <div className={classes.body}>
                    <Center>
                        <Title className={classes.titleBig} >
                                {/*component={Link} {...linkProps}>*/}
                            {t('TITLE')} {/*<IconExternalLink color="green"/>*/}
                        </Title>
                    </Center>
                    {/*<Center>*/}
                    {/*    <Title className={classes.subTitle} component={Link} {...linkProps}>*/}
                    {/*        {t('SUBTITLE')}*/}
                    {/*    </Title>*/}
                    {/*</Center>*/}

                    <Center>
                        <Text fz="md" c="customDimmed" fw={rem(500)} style={{textAlign: "center"}} >
                               {/*component={Link} {...linkProps}>*/}
                            {t('DESCRIPTION')}
                        </Text>
                    </Center>
                </div>
            </Container>
        </Container>
    );
}