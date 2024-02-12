import {Container, Divider, Group, SimpleGrid} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import commonClasses from "@/utils/commonClasses.module.css";
import {ProjectPreviewCardsSlider} from "@/components/Projects/ProjectPreviewCardsSlider";
import {ProjectPreviewCard} from "@/components/Projects/ProjectPreviewCard";
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";

export default function ProjectsPage() {
    
    return (
    <Container className={commonClasses.container} size="md">
      <TitleWithDescription title={"Toate proiectele noastre"} />
        <Divider mb="xl" color="transparent" />

        <ProjectPreviewCardsSlider amount={100}/>
        
    </Container>
  );
}
