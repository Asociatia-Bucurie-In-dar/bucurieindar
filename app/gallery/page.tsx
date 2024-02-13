import {Container, Divider} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Gallery} from "@/components/Gallery/Gallery";


export default function GalleryPage() {
  return (
    <>
        <Container className={commonClasses.container} size="md">
          <TitleWithDescription title={"Munca noastră"} />
          <Divider mb="xl" color="transparent" />
            
            <Gallery />
            
          <Divider color="transparent" pb={100}/>
        </Container>
    </>
  );
}
