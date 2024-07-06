import commonClasses from "@/utils/commonClasses.module.css";
import {rem, Text, Title} from "@mantine/core";

export function TitleWithDescription(props: {title: string, description?: string, maxWidth?: string }) {
    
    return  <>
            <Title order={2} className={commonClasses.titleBig} ta="center">
                {props.title}
            </Title>
    
            <Text ta="center" mt="md" c="customDimmed" className={commonClasses.description}
            style={{maxWidth: props.maxWidth ?? rem(600), margin: 'auto'}}>
                {props.description}
            </Text>
        </>;
}