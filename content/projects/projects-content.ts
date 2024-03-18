import {ProjectType} from "@/utils/my-types";

const imagesPath = '/projects/';
const projectsData : ProjectType[] = [
    {
        id: '2',
        slug: 'masa-bucuriei',
        image_path: imagesPath + 'hrana.png',
        other_images: [],
        translation_key: 'TABLE_OF_JOY',
        goalAmount: 12000,
        currentAmount: 0,
    },
    {
        id: '1', 
        slug: 'ajuta-o-comunitate', 
        image_path: imagesPath + 'comunitate.png',
        other_images: [],
        translation_key: 'HELP_A_COMMUNITY',
        goalAmount: 7000, 
        currentAmount: 0,
    },
    {
        id: '3',
        slug: 'cazuri-medicale',
        image_path: imagesPath + 'medical.png',
        other_images: [],
        translation_key: 'LOVE_AND_MEDICINE',
        goalAmount: 20000,
        currentAmount: 0,
    },
    {
        id: '4',
        slug: 'oameni-ai-strazii',
        image_path: imagesPath + 'beggar.jpeg',
        other_images: [],
        translation_key: 'STREET_PEOPLE',
        goalAmount: 10000,
        currentAmount: 0,
    },
    {
        id: '5',
        slug: 'scoala-bucuriei',
        image_path: imagesPath + 'scoala.png',
        other_images: [],
        translation_key: 'SCHOOL_OF_JOY',
        goalAmount: 7000,
        currentAmount: 0,
    },
    {
        id: '6',
        slug: 'adopta-o-familie',
        image_path: imagesPath + 'adopta.jpeg',
        other_images: [
            //TITLE used as TRANSLATION KEY until better solution!!
            //MARK no translation with -1
            {title: '1', image: imagesPath + 'fam11.jpeg'},
            {title: '2', image: imagesPath + 'fam10.jpeg'},
            {title: '3', image: imagesPath + 'fam8.jpeg'}
        ],
        translation_key: 'ADOPT_A_FAMILY',
        goalAmount: 5000,
        currentAmount: 0,
    },
];

export function GetAllProjectsStaticContent(amount: number): ProjectType[] {
    return projectsData.slice(0, amount);
}

export function GetProjectStaticContentWithSlug(slug: string): ProjectType {
    return projectsData.find((project) => project.slug === slug) as ProjectType;
}