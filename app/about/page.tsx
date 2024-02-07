import classes from "@/components/Welcome/Welcome.module.css";
import {Title} from "@mantine/core";

export default function AboutPage() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        About.
      </Title>
    </>
  );
}
