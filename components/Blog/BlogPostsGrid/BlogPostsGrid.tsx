import { SimpleGrid, Container } from '@mantine/core';
import {BlogPostPreviewCard} from "@/components/Blog/BlogPostPreviewCard/BlogPostPreviewCard";
import {BlogArticleType} from "@/utils/my-types";

const articlesData: BlogArticleType[] = [
    {
        id: '1',
        slug: 'blog-post-1',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_name: 'flowers.jpg',
    },
    {
        id: '2',
        slug: 'blog-post-2',
        category: 'Fruits',
        title: 'The best carrot of the year',
        content: 'The best carrot for juice in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_name: 'flowers.jpg',
    },
    {
        id: '3',
        slug: 'blog-post-3',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_name: 'flowers.jpg',
    },
    {
        id: '4',
        slug: 'blog-post-4',
        category: 'Fruits',
        title: 'The best carrot of the year',
        content: 'The best carrot for juice in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_name: 'flowers.jpg',
    },
    {
        id: '5',
        slug: 'blog-post-5',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_name: 'flowers.jpg',
    },
    {
        id: '6',
        slug: 'blog-post-6',
        category: 'Fruits',
        title: 'The best carrot of the year',
        content: 'The best carrot for juice in 2022 is verrri ver veri veri veri veri nais',
        date: '',
        image_name: 'flowers.jpg',
    },
    {
        id: '7',
        slug: 'blog-post-7',
        category: 'Tech',
        title: 'The best laptop for Frontend engineers in 2022',
        content: 'The best laptop for Frontend engineers in 2022 is',
        date: '',
        image_name: 'flowers.jpg',
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