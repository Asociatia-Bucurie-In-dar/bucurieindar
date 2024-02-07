import classes from "@/components/Welcome/Welcome.module.css";
import {Title} from "@mantine/core";
import ConfettiExplosion from "@/components/CoolEffects/ConfettiExplosion";

export default function ProjectsPage() {
    return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Projects.
      </Title>
    </>
  );
}
