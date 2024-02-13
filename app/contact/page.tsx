import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Button, Container, Divider} from "@mantine/core";
import {ContactPanel} from "@/components/Contact/ContactPanel";
import background from "@/public/flowers.png";

import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

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
