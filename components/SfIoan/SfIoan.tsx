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
        <Container className={props.disableBackground ? '' : commonClasses.darkerBackground} size="full" pt={47} pb={40}>
            <Container size="lg" className={classes.wrapper}>
                <Center>
                    <div className={classes.roundedImageWrapper}>
                        <Image src="/sfIoan.png" alt={t('IMAGE_ALT')} 
                               width={rem(280)} height={rem(280)} 
                               className={classes.image} loading="lazy"/>
                    </div>
                </Center>
                <div className={classes.body}>
                    <TitleWithDescription title={t('TITLE')} description={t('DESCRIPTION')} maxWidth='100%'/>
                    <Link {...linkProps} style={{textDecoration: 'none'}}>
                        <Text ta="center" mt="md" c="blue">
                            CentrulSfantulIoanCelMilostiv.org <IconExternalLink size={18} />
                        </Text>
                    </Link>
                </div>
            </Container>
        </Container>
    );
}