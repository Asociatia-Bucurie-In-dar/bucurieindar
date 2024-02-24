import {Container, Divider} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Gallery} from "@/components/Gallery/Gallery";
import {unstable_setRequestLocale} from "next-intl/server";

export const metadata = {
    title: "Galerie",
    description: "Galerie de imagini cu munca noastră.",
};

export default function GalleryPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    
  return (
    <>
        <Container className={commonClasses.container} size="lg">
          <TitleWithDescription title={"Munca noastră"} />
          <Divider mb="xl" color="transparent" />
            
            <Gallery />
            
          <Divider color="transparent" pb={100}/>
        </Container>
    </>
  );
}
