import {Container, Divider} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

export default function BlogPage({params} : any) {
  return (
      <Container size="full">
          <Container className={commonClasses.container} size="lg">
              <TitleWithDescription title={"Blog post " + params.slug} />
              <Divider mb="xl" color="transparent" />



              <Divider color="transparent" pb={100}/>
          </Container>
      </Container>
  );
}
