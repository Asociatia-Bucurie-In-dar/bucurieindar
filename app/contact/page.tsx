import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Button, Container, Divider} from "@mantine/core";
import {ContactPanel} from "@/components/Contact/ContactPanel";

import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";

export default function ContactPage() {
  return (
      <Container className={commonClasses.container} size="md">
          
        <ContactPanel />
          
          <Divider color="transparent" mb={100}/>
      </Container>
  );
}
