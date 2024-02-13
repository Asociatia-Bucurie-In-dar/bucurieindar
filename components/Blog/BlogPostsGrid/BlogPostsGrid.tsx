import { SimpleGrid, Container } from '@mantine/core';
import {BlogPostPreviewCard} from "@/components/Blog/BlogPostPreviewCard/BlogPostPreviewCard";
import {BlogArticleType} from "@/utils/my-types";
import blogImage from '@/public/flowers.jpg';

import classes from './BlogPostsGrid.module.css';

const articlesData: BlogArticleType[] = [
    {
        article_id: '1',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_url: blogImage.src,
    },
    {
        article_id: '2',
        category: 'Fruits',
        title: 'The best carrot of the year',
        content: 'The best carrot for juice in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_url: blogImage.src,
    },
    {
        article_id: '3',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_url: blogImage.src,
    },
    {
        article_id: '4',
        category: 'Fruits',
        title: 'The best carrot of the year',
        content: 'The best carrot for juice in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_url: blogImage.src,
    },
    {
        article_id: '5',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_url: blogImage.src,
    },
    {
        article_id: '6',
        category: 'Fruits',
        title: 'The best carrot of the year',
        content: 'The best carrot for juice in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_url: blogImage.src,
    },
    {
        article_id: '7',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is',
        date: '',
        image_url: blogImage.src,
    }
];

export function BlogPostsGrid(props: { amount: number; cols: number }) {
    const previews = articlesData
        .slice(0, props.amount > 0 ? props.amount : articlesData.length)
        .map((article    ) => (
            <BlogPostPreviewCard article={article} />
        ));

    return (
        <SimpleGrid cols={{ base: 1, sm: props.cols }}>
            {previews}
        </SimpleGrid>
    );
}