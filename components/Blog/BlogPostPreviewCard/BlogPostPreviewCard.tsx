import {Card, Image, Avatar, Text, Group, Button} from '@mantine/core';
import classes from './BlogPostPreviewCard.module.css';
import Link from "next/link";
import {MyRoutePaths} from "@/utils/route-paths";
import {BlogArticleType} from "@/utils/my-types";

const imageFolder = '/blog/';

export function BlogPostPreviewCard(props: { article: BlogArticleType }) {
    return (
        <Card withBorder radius="md" p={0} className={classes.card}
            component={Link} href={MyRoutePaths.Blog + '/' + props.article.slug}>
            <Group wrap="nowrap" gap={0}>
                <Image
                    src={imageFolder + props.article.image_name}
                    alt="{ 'blog article cover for' + ' ' + props.article.title }"
                    className={classes.image}
                    height={160}
                />
                <div className={classes.body}>
                    <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                        {props.article.category}
                    </Text>
                    <Text className={classes.title} mt="xs" mb="md" lineClamp={2}>
                        {props.article.title}
                    </Text>
                    <Group wrap="nowrap" gap="xs">
                        <Button variant="light">{"Citeşte articolul"}</Button>
                    </Group>
                </div>
            </Group>
        </Card>
    );
}