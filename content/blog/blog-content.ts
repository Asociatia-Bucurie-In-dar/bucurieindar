import {BlogArticleType} from "@/utils/my-types";

const imagesPath = '/blog/';
const articlesData : BlogArticleType[] = [
    {
        id: '1',
        slug: "importanta-donatiilor-de-caritate",
        title: "Importanța Donațiilor de Caritate",
        image_name: 'flowers.jpg',
        content: "Într-o lume plină de nesiguranță și provocări, actele de caritate strălucesc ca faruri de speranță și umanitate. Caritatea nu este doar un gest de compasiune; este o punte care leagă sufletele, oferindu-le celor mai puțin norocoși o șansă la o viață mai bună. Donațiile de caritate sunt vitale pentru a susține această cauză nobilă, și iată de ce. Impactul Direct asupra Vieților Oamenilor Prin donațiile făcute către organizațiile de caritate, contribuim direct la îmbunătățirea vieții celor aflați în nevoie. Fie că este vorba de hrană, adăpost, educație sau acces la servicii medicale, fiecare leu donat poate face diferența între disperare și speranță pentru cineva. Consolidarea Comunității Donațiile noastre ajută la construirea și consolidarea comunității. Când susținem cauze caritabile, ne unim forțele cu ceilalți donatori și voluntari pentru a lupta împotriva inegalităților și pentru a crea o societate mai justă și mai compasivă. Educația pentru Generațiile Viitoare Donațiile în domeniul educațional asigură că generațiile viitoare vor avea resursele necesare pentru a învăța și a prospera. Educația este fundamentul pe care se construiește viitorul, iar sprijinul nostru poate deschide uși care altfel ar rămâne închise. Împlinirea Personală Donațiile nu sunt doar despre a da; sunt și despre a primi. Împlinirea personală și pacea interioară pe care o simțim atunci când ajutăm pe alții sunt neprețuite. Este o dovadă că, indiferent de dificultățile proprii, putem face o diferență pozitivă în lume. Influența Pozitivă Prin exemplul nostru, îi inspirăm și pe alții să fie generoși și să se implice în acte de caritate. Generozitatea este contagioasă, și atunci când ne arătăm susținerea pentru cauzele caritabile, îi motivăm pe cei din jur să facă același lucru. În concluzie, donațiile de caritate sunt mult mai mult decât un simplu transfer de resurse financiare. Ele sunt expresia noastră de solidaritate și empatie față de cei care au nevoie. Fiecare contribuție, indiferent de mărime, contează și are puterea de a transforma vieți. Așadar, să ne deschidem inimile și să fim generoși. Fiecare gest de caritate este o sămânță de bine plantată pentru un viitor mai luminos.",
        category: 'Caritate',
    },
    {
        id: '2',
        slug: "importanta-donatiilor-de-caritate",
        title: "Importanța Menținerii Sănătății Mintale și a Bunăstării",
        image_name: 'flowers.jpg',
        content: "În vremurile agitate de astăzi, sănătatea mintală a devenit un subiect crucial în discuțiile despre bunăstare. Menținerea sănătății mintale nu este doar despre a preveni sau trata condiții specifice, ci este despre crearea unui echilibru în viața noastră zilnică care să ne permită să ne realizăm potențialul și să facem față stresului cotidian. Sănătatea mintală influențează modul în care gândim, simțim și acționăm. Prin urmare, este esențial să ne acordăm timp pentru auto-îngrijire și să căutăm sprijin atunci când este necesar. Crearea unui mediu susținător în jurul nostru, unde dialogul deschis despre emoții și luptele interioare este încurajat, poate avea un impact semnificativ asupra stării noastre de bine. Activități precum meditația, exercițiile fizice și hobby-urile creative pot contribui la îmbunătățirea sănătății mintale. De asemenea, este important să recunoaștem că solicitarea de ajutor profesional este un semn de forță, nu de slăbiciune. În final, sănătatea mintală nu este o destinație, ci un proces continuu de creștere și adaptare, și fiecare pas pe care îl facem pentru a ne îngriji mintea este un pas către o viață mai împlinită și mai fericită.",
        category: 'Caritate',
    },
    // {
    //     id: '3',
    //     slug: "importanta-donatiilor-de-caritate",
    //     title: "Importanța Menținerii Sănătății Mintale și a Bunăstării",
    //     image_name: 'flowers.jpg',
    //     content: "",
    //     category: 'Caritate',
    // },
];

export function GetAllArticlesStaticContent(amount: number): BlogArticleType[] {
    return articlesData.slice(0, amount);
}

export function GetArticleStaticContentWithSlug(slug: string): BlogArticleType {
    return articlesData.find((article) => article.slug === slug) as BlogArticleType;
}