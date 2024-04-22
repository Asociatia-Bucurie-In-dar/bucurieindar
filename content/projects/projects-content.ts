import {ProjectType} from "@/utils/my-types";

//TITLE used as TRANSLATION KEY until better solution!!
//MARK no translation with '' (empty title)

const imagesPath = '/projects/';
const projectsData : ProjectType[] = [
    {
        id: '2',
        slug: 'masa-bucuriei',
        is_campaign: false,
        image_path: imagesPath + 'hrana.png',
        other_images: [
            {title: '', image: imagesPath + 'masa1.jpeg'},
            {title: '', image: imagesPath + 'masa2.jpeg'},
            {title: '', image: imagesPath + 'masa3.jpeg'},
            {title: '', image: imagesPath + 'masa4.jpeg', positionPercent: '7%'},
            {title: '', image: imagesPath + 'masa5.jpeg'},
            {title: '', image: imagesPath + 'masa6.jpeg'},
            {title: '', image: imagesPath + 'masa7.jpeg'},
            {title: '', image: imagesPath + 'masa8.jpeg'},
            {title: '', image: imagesPath + 'masa9.jpeg'}
        ],
        other_videos: [],
        translation_key: 'TABLE_OF_JOY',
        goalAmount: 12000,
        currentAmount: 0,
        currentAmountExtra: 0,
    },
    {
        id: '1', 
        slug: 'ajuta-o-comunitate',
        is_campaign: false,
        image_path: imagesPath + 'comunitate.png',
        other_images: [
            {title: '', image: imagesPath + 'comunitate1.jpeg'},
            {title: '', image: imagesPath + 'comunitate2.jpeg'},
            {title: '', image: imagesPath + 'comunitate3.jpeg'},
            {title: '', image: imagesPath + 'comunitate4.jpeg'},
            {title: '', image: imagesPath + 'comunitate5.jpeg'},
            {title: '', image: imagesPath + 'comunitate6.jpeg'},
            {title: '', image: imagesPath + 'comunitate7.jpeg'},
            {title: '', image: imagesPath + 'comunitate8.jpeg'},
            {title: '', image: imagesPath + 'comunitate9.jpeg'},
            {title: '', image: imagesPath + 'comunitate10.jpeg'},
            {title: '', image: imagesPath + 'comunitate11.jpeg'},
            {title: '', image: imagesPath + 'comunitate12.jpeg'},
            {title: '', image: imagesPath + 'comunitate13.jpeg'},
            {title: '', image: imagesPath + 'comunitate14.jpeg'},
            {title: '', image: imagesPath + 'comunitate15.jpeg'},
            {title: '', image: imagesPath + 'comunitate16.jpeg'},
            {title: '', image: imagesPath + 'comunitate17.jpeg'}
        ],
        other_videos: [],
        translation_key: 'HELP_A_COMMUNITY',
        goalAmount: 7000, 
        currentAmount: 0,
        currentAmountExtra: 0,
    },
    {
        id: '3',
        slug: 'cazuri-medicale',
        is_campaign: false,
        image_path: imagesPath + 'medical.png',
        other_images: [],
        other_videos: [],
        translation_key: 'LOVE_AND_MEDICINE',
        goalAmount: 20000,
        currentAmount: 0,
        currentAmountExtra: 0,
    },
    {
        id: '4',
        slug: 'oameni-ai-strazii',
        is_campaign: false,
        image_path: imagesPath + 'beggar.jpeg',
        other_images: [],
        other_videos: [],
        translation_key: 'STREET_PEOPLE',
        goalAmount: 10000,
        currentAmount: 0,
        currentAmountExtra: 0,
    },
    {
        id: '5',
        slug: 'scoala-bucuriei',
        is_campaign: false,
        image_path: imagesPath + 'scoala.png',
        other_images: [
            {title: '', image: imagesPath + 'scoala1.jpeg'},
            {title: '', image: imagesPath + 'scoala3.jpeg'},
            {title: '', image: imagesPath + 'scoala4.jpeg'},
            {title: '', image: imagesPath + 'scoala5.jpeg'},
            {title: '', image: imagesPath + 'scoala6.jpeg'},
            {title: '', image: imagesPath + 'scoala7.jpeg'}
        ],
        other_videos: [],
        translation_key: 'SCHOOL_OF_JOY',
        goalAmount: 7000,
        currentAmount: 0,
        currentAmountExtra: 0,
    },
    {
        id: '6',
        slug: 'adopta-o-familie',
        is_campaign: false,
        image_path: imagesPath + 'adopta.jpeg',
        other_images: [
            {title: '1', image: imagesPath + 'fam11.jpeg', positionPercent: '38%'},
            {title: '2', image: imagesPath + 'fam10.jpeg', positionPercent: '60%'},
            {title: '3', image: imagesPath + 'fam9.jpeg', positionPercent: '40%'},
            {title: '4', image: imagesPath + 'fam8.jpeg'},
            {title: '5', image: imagesPath + 'fam7.jpeg', positionPercent: '38%'},
            {title: '6', image: imagesPath + 'fam6.jpeg'},
            {title: '7', image: imagesPath + 'fam5.jpeg'},
            {title: '8', image: imagesPath + 'fam2.jpeg'},
            {title: '9', image: imagesPath + 'fam1.jpeg', positionPercent: '5%'},
            {title: '10', image: imagesPath + 'fam12.jpeg', positionPercent: '80%'}
        ],
        other_videos: [],
        translation_key: 'ADOPT_A_FAMILY',
        goalAmount: 5000,
        currentAmount: 0,
        currentAmountExtra: 0,
    },
    {
        id: '300',
        slug: 'campania-invierii',
        
        is_campaign: true,
        campaign_end_date: '2024-05-1',
        
        image_path: imagesPath + 'invierii.webp',
        other_images: [],
        other_videos: [],
        translation_key: 'CAMPAIGN_RESURRECTION',
        goalAmount: 4550,
        currentAmount: 0,
        currentAmountExtra: 0,
    },
];

export function GetAllProjectsStaticContent(amount: number): ProjectType[] {
    return projectsData.slice(0, amount);
}

export function GetProjectStaticContentWithSlug(slug: string): ProjectType {
    return projectsData.find((project) => project.slug === slug) as ProjectType;
}