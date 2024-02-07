import classes from "@/components/Welcome/Welcome.module.css";
import {Title} from "@mantine/core";

export default function DashPage() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Donor Dash.
      </Title>
    </>
  );
}
