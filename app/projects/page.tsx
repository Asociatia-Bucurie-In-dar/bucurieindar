import { Container, Divider } from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import commonClasses from "@/utils/commonClasses.module.css";

export default function ProjectsPage() {
    return (
    <Container className={commonClasses.container}>
      <TitleWithDescription title="Test" 
                            description={"Test"}/>
    </Container>
  );
}
