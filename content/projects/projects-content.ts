import {ProjectType} from "@/utils/my-types";

const imagesPath = '/projects/';
const projectsData : ProjectType[] = [
    {
        id: '1', 
        slug: 'ajuta-o-comunitate', 
        image_path: imagesPath + 'comunitate.png', 
        title: 'Ajută o comunitate', 
        content: 'Ne dorim să mergem des în locurile care ne sunt semnalate de voi în țară, dar și în București și în zonele limitrofe, pentru că familiile sărmane au nevoie să mănânce și să se îmbrace nu doar de Paște și de Crăciun. Deasemenea, poți dona ce consideri că nu mai porți sau nu mai folosești, cât de puțin ar fi. Îmbrăcăminte, produse de igienă, electrocasnice, mobilă și în special medicamente și alimente, lucruri pe care multe familii pe care nu le au și care le sunt de mare necesitate și ajutor.',
        goalAmount: 100000, 
        currentAmount: 0,
    },
    {
        id: '2',
        slug: 'masa-bucuriei',
        image_path: imagesPath + 'hrana.png',
        title: 'Masa bucuriei',
        content: "Hrană caldă pentru oamenii străzii, hrană pentru cei care postesc și când nu e post. Voi ne oferiți fonduri sau alimente, voluntarii noștri gătesc și împreună dăruim o masă gustoasă celor fără adăpost sau familiilor cu mulți copii.",
        goalAmount: 70000,
        currentAmount: 0,
    },
    {
        id: '3',
        slug: 'cazuri-medicale',
        image_path: imagesPath + 'medical.png',
        title: 'Cazuri medicale',
        content: "În fiecare zi, ne confruntăm cu situații medicale grave, în care oamenii nu își permit să își trateze afecțiunile. În aceste cazuri, noi încercăm să le oferim o șansă, fie că este vorba de o operație, de un tratament sau de un aparat medical. Împreună putem face posibilă această șansă. Fiecare donație contează și poate face diferența între viață și moarte.",
        goalAmount: 50000,
        currentAmount: 0,
    },
    {
        id: '4',
        slug: 'tabere-si-excursii',
        image_path: imagesPath + 'tabere.png',
        title: 'Tabere și excursii',
        content: "Cu ajutorul vostru, dorim să oferim excursii și tabere copiilor din familii defavorizate, care, de cele mai multe ori, nu au văzut niciodată marea sau muntele. Îi vom duce în locuri frumoase de care să se bucure, în care să se joace și să exploreze. Pe lângă bălăceala în valuri, la mare, sperăm să le dăm ocazia să meargă pe cărări de munte, în drumeții, la cules de ciuperci, de mure sau, în livadă, la cules de mere, să vadă cum arată o peșteră, să doarmă în cort și multe alte activități captivante. Aceste momente vor rămâne pentru ei amintiri frumoase care le vor lumina, mai apoi, zilele triste. Împreună putem face toate acestea posibile. Pentru realizarea acestui proiect sunt binevenite orice echipamente specifice: corturi, rulotă, echipamente de munte, hamace, aragaz de campanie etc.",
        goalAmount: 10000,
        currentAmount: 0,
    },
    {
        id: '5',
        slug: 'scoala-bucuriei',
        image_path: imagesPath + 'scoala.png',
        title: 'Școala bucuriei',
        content: "Avem în proiect organizarea de cursuri de reintegrare profesională, meditații pentru elevi și diverse ateliere pentru copii talentați, dar fără posibilități financiare. Împreună cu voi, le putem oferi acelor copii meditații la materiile de bază, ateliere de creație, pictură, muzică, fotografie, șah etc.",
        goalAmount: 10000,
        currentAmount: 0,
    },
    {
        id: '6',
        slug: 'adopta-o-familie',
        image_path: imagesPath + 'adopta.png',
        title: 'Adoptă o familie',
        content: "Asigură ce poți din nevoile unei familii defavorizate: un medicament sau o cutie de lapte praf, alimente de primă necesitate, un caiet sau un creion pentru un elev, sunt lucruri pe care, din păcate, unii nu și le pot permite în mod constant. Noi îți facem cunoscute cazurile, voi alegeți familia pe care doriți să o vizitați și să o ajutați pe termen mediu sau lung.",
        goalAmount: 100000,
        currentAmount: 0,
    },
];

export function GetAllProjectsStaticContent(amount: number): ProjectType[] {
    return projectsData.slice(0, amount);
}

export function GetProjectStaticContentWithSlug(slug: string): ProjectType {
    return projectsData.find((project) => project.slug === slug) as ProjectType;
}