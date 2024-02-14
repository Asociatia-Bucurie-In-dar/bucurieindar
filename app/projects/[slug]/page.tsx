import {Container, Divider, SimpleGrid} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import commonClasses from "@/utils/commonClasses.module.css";

export default function FullProjectPage({params}:any) {
    
    const slug = params.slug;
    //get info from database
    
    return (
        <Container size="full">
        <Container className={commonClasses.container} size="lg">
            <TitleWithDescription title={"Proiectul " + slug} />
        <Divider mb="xl" color="transparent" />

        

        <Divider color="transparent" pb={100}/>
        </Container>
        </Container>
  );
}
