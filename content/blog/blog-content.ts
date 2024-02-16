import {BlogArticleType} from "@/utils/my-types";

const imagesPath = '/blog/';
const articlesData : BlogArticleType[] = [
    {
        id: '1',
        slug: 'blogpost-1',
        title: 'Postare 1',
        image_name: 'flowers.jpg',
        content: 'Acesta este un text de test pentru postarea 1',
        category: 'Caritate',
    },
    {
        id: '2',
        slug: 'blogpost-2',
        title: 'Postare 2',
        image_name: 'flowers.jpg',
        content: 'Acesta este un text de test pentru postarea 2',
        category: 'Caritate',
    },
    {
        id: '3',
        slug: 'blogpost-3',
        title: 'Postare 3',
        image_name: 'flowers.jpg',
        content: 'Acesta este un text de test pentru postarea 3',
        category: 'Caritate',
    },
    {
        id: '4',
        slug: 'blogpost-4',
        title: 'Postare 4',
        image_name: 'flowers.jpg',
        content: 'Acesta este un text de test pentru postarea 4',
        category: 'Caritate',
    },
    {
        id: '5',
        slug: 'blogpost-5',
        title: 'Postare 5',
        image_name: 'flowers.jpg',
        content: 'Acesta este un text de test pentru postarea 5',
        category: 'Caritate',
    },
    {
        id: '6',
        slug: 'blogpost-6',
        title: 'Postare 6',
        image_name: 'flowers.jpg',
        content: 'Acesta este un text de test pentru postarea 6',
        category: 'Caritate',
    },
];

export function GetAllArticlesStaticContent(amount: number): BlogArticleType[] {
    return articlesData.slice(0, amount);
}

export function GetArticleStaticContentWithSlug(slug: string): BlogArticleType {
    return articlesData.find((article) => article.slug === slug) as BlogArticleType;
}