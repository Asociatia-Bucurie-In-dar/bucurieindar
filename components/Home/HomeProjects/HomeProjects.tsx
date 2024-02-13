
import classes from './HomeProjects.module.css';
import { ProjectPreviewCardsSlider } from '@/components/Projects/ProjectPreviewCardsSlider';
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Center, Container, Divider, Group} from "@mantine/core";
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";
import commonClasses from "@/utils/commonClasses.module.css";

export function HomeProjects() {
    return (
        <Container size="full" className={commonClasses.darkerBackground}>
            
            <Divider pt="xl" color="transparent" />
            
            <TitleWithDescription title="Proiecte"
                                  description="Descoperă câteva din proiectele noastre care au nevoie de ajutorul tău. Asociatia noastră are nevoie de tine pentru a putea ajuta cât mai multe persoane." />

            <Divider mb={45} color="transparent" />
            
            <ProjectPreviewCardsSlider amount={3}/>
    
            <Group justify="center" mt="xl" pb={52}>
                <ConfettiButton text={"Vezi toate proiectele"} size="md"/>
            </Group>
            
        </Container>
    );
}