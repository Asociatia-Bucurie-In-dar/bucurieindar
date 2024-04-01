
import {
    Image,
    Accordion,
    AccordionItem,
    Grid,
    Container,
    GridCol,
    Center,
    AccordionControl,
    AccordionPanel, Text, rem
} from '@mantine/core';
import classes from './FAQ.module.css';
import commonClasses from '@/utils/commonClasses.module.css';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {useTranslations} from "next-intl";


export function FAQ() {
    const t = useTranslations('FAQ');
    const aboutT = useTranslations('ABOUT');

    const questions = [
        {
            question: aboutT('WHO_ARE_WE.TITLE'),
            answer: aboutT('WHO_ARE_WE.DESCRIPTION'),
        },
        {
            question: aboutT('WHAT_WE_DO.TITLE'),
            answer: aboutT('WHAT_WE_DO.DESCRIPTION'),
        },
        {
            question: aboutT('WHY_WE_HELP.TITLE'),
            answer: aboutT('WHY_WE_HELP.DESCRIPTION'),
        }];

    const items = questions.map((item) => (
        <AccordionItem className={classes.item} value={item.question} key={item.question}>
            <AccordionControl className={classes.question}>
                <Text fw={550}>{item.question}</Text>
            </AccordionControl>
            <AccordionPanel>
                <Text fz={rem(14)} fw={500} c="dimmed">
                    {item.answer}
                </Text>
            </AccordionPanel>
        </AccordionItem>
    ));
    
    return (
        <Container size="full">
            <Container size="lg" className={classes.wrapper}>
                <Grid id="faq-grid" gutter={50}>
                    <GridCol span={{ base: 12, md: 6 }}>
                        
                        <Image src="/faq.svg" alt={t('TITLE')} 
                            loading="lazy" placeholder="blur"/>
                       
                    </GridCol>
                    <GridCol span={{ base: 12, md: 6 }}>
                        
                        <TitleWithDescription title={t('TITLE')} description={""} />

                        <Accordion chevronPosition="right" variant="separated" defaultValue={questions[0].question}>
                            {items}
                        </Accordion>
                    </GridCol>
                </Grid>
            </Container>
        </Container>
    );
}