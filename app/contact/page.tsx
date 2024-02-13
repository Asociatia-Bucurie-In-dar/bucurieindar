import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Button, Container, Divider} from "@mantine/core";
import {ContactPanel} from "@/components/Contact/ContactPanel";
import background from "@/public/flowers.jpg";

import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

export default function ContactPage() {
  return (
      <Container size="full" style={{backgroundImage: `url(${background.src})`, backgroundSize: 'cover', zIndex: -22}}>
          <Container className={commonClasses.container} size="md">
              
              <ContactPanel />

              <Divider color="transparent" pb={100}/>
          </Container>
      </Container>
  );
}
