
import classes from './ProjectDonationProgress.module.css';
import {Progress, Text} from "@mantine/core";

const currentAmount = 1000;
const goalAmount = 10000;

export function ProjectDonationProgress(props :{id: string} ) {
    return <>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed" mt="sm">
            Suma Necesară
        </Text>
        <Text fz="lg" fw={500}>
            {currentAmount} RON / {goalAmount} RON
        </Text>
        <Progress animated value={(currentAmount/goalAmount) * 100} mt="sm" size="lg" radius="xl"
                  classNames={{
                      root: classes.progressTrack,
                      section: classes.progressSection,
                  }}/>
        </>;
}