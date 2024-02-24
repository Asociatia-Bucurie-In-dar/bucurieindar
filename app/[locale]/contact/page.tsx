import commonClasses from "@/utils/commonClasses.module.css";
import {Container, Divider} from "@mantine/core";
import {ContactPanel} from "@/components/Contact/ContactPanel";
import {unstable_setRequestLocale} from "next-intl/server";

export const metadata = {
    title: "Contact",
    description: "Cum ne puteți contacta.",
};

export default function ContactPage( {params: {locale}} : {params: {locale: string}} ) {
    unstable_setRequestLocale(locale);
    
  return (
      <Container size="full">
          <Container className={commonClasses.container} size="lg">
              
              <ContactPanel />

              <Divider color="transparent" pb={100}/>
          </Container>
      </Container>
  );
}
