import {Container, Divider, Group, SimpleGrid} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import commonClasses from "@/utils/commonClasses.module.css";
import {ProjectPreviewCardsSlider} from "@/components/Projects/ProjectPreviewCardsSlider";
import {unstable_setRequestLocale} from "next-intl/server";

export const metadata = {
    title: "Proiectele noastre",
    description: "Vezi toate proiectele noastre."
};

export default function ProjectsPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    
    return (
        <Container className={commonClasses.container} size="lg">
      <TitleWithDescription title={"Proiectele noastre"} />
        <Divider mb="xl" color="transparent" />

        <ProjectPreviewCardsSlider amount={100}/>

        <Divider color="transparent" pb={100}/>
        </Container>
  );
}
