import classes from "@/components/Welcome/Welcome.module.css";
import {Title} from "@mantine/core";

export default function ContactPage() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Contact.
      </Title>
    </>
  );
}
