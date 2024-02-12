import classes from './TitleWithDescription.module.css';
import {Container, StyleProp, Text, Title} from "@mantine/core";

export function TitleWithDescription(props: {title: string, description?: string }) {
    
    return  <>
            <Title order={2} className={classes.titleBig} ta="center">
                {props.title}
            </Title>
    
            <Text c="dimmed" className={classes.descriptionBig} ta="center" mt="md">
                {props.description}
            </Text>
        </>;
}