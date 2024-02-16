import {ProjectType} from "@/utils/my-types";

const imagesPath = '/projects/';
const projectsData : ProjectType[] = [
    {
        id: '1', 
        slug: 'ajuta-o-comunitate', 
        image_path: imagesPath + 'flowers.jpg', 
        title: 'Ajută o comunitate', 
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000, 
        currentAmount: 0,
        stripeLink: 'https://donate.stripe.com/7sIdRo0gqaLG2Pu7su'
    },
    {
        id: '2',
        slug: 'masa-bucuriei',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Masa bucuriei',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0,
        stripeLink: 'https://donate.stripe.com/5kA14C1kubPK1LqdQT'
    },
    {
        id: '3',
        slug: 'cazuri-medicale',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Cazuri medicale',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0,
        stripeLink: 'https://donate.stripe.com/00g8x42oy1b6gGkdQU'
    },
    {
        id: '4',
        slug: 'tabere-si-excursii',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Tabere și excursii',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0,
        stripeLink: 'https://donate.stripe.com/dR69B84wG1b61Lq14a'
    },
    {
        id: '5',
        slug: 'scoala-bucuriei',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Școala bucuriei',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0,
        stripeLink: 'https://donate.stripe.com/fZe4gOgfo5rm1Lq005'
    }
];

export function GetProjectsStaticContent(amount: number): ProjectType[] {
    return projectsData.slice(0, amount);
}

export function GetProjectStaticContentWithSlug(slug: string): ProjectType {
    return projectsData.find((project) => project.slug === slug) as ProjectType;
}