import {Container, Divider, Group, SimpleGrid} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import commonClasses from "@/utils/commonClasses.module.css";
import {ProjectPreviewCardsSlider} from "@/components/Projects/ProjectPreviewCardsSlider";

export default function ProjectsPage() {
    
    return (
        <Container className={commonClasses.container} size="lg">
      <TitleWithDescription title={"Proiectele noastre"} />
        <Divider mb="xl" color="transparent" />

        <ProjectPreviewCardsSlider amount={100}/>

        <Divider color="transparent" pb={100}/>
        </Container>
  );
}
