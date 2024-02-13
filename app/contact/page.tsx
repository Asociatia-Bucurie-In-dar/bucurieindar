import commonClasses from "@/utils/commonClasses.module.css";
import {Container, Divider} from "@mantine/core";
import {ContactPanel} from "@/components/Contact/ContactPanel";

export default function ContactPage() {
  return (
      <Container size="full">
          <Container className={commonClasses.container} size="md">
              
              <ContactPanel />

              <Divider color="transparent" pb={100}/>
          </Container>
      </Container>
  );
}
