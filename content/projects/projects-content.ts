import {ProjectType} from "@/utils/my-types";

const imagesPath = '/projects/';
const projectsData : ProjectType[] = [
    {
        id: '2', 
        slug: '111', 
        image_path: imagesPath + 'flowers.jpg', 
        title: 'Proiect 1', 
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000, 
        currentAmount: 0 
    },
    {
        id: '2',
        slug: '222',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Proiect 2',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0
    },
    {
        id: '3',
        slug: '333',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Proiect 3',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0
    },
    {
        id: '4',
        slug: '444',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Proiect 4',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0
    },
    {
        id: '5',
        slug: '555',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Proiect 5',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0
    },
    {
        id: '6',
        slug: '666',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Proiect 6',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0
    },
    {
        id: '7',
        slug: '777',
        image_path: imagesPath + 'flowers.jpg',
        title: 'Proiect 7',
        content: 'Lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi lorem ipsum veni vidi',
        goalAmount: 60000,
        currentAmount: 0
    },
];

export function GetProjectsStaticContent(amount: number): ProjectType[] {
    return projectsData.slice(0, amount);
}

export function GetProjectStaticContentWithSlug(slug: string): ProjectType {
    return projectsData.find((project) => project.slug === slug) as ProjectType;
}