import { MetadataRoute } from "next";
import { MyRoutePaths } from "@/utils/route-paths";
import { GetAllProjectsStaticContent } from "@/content/projects/projects-content";
import {SitemapEntry} from "@/utils/my-types";



function getAllURLs(): MetadataRoute.Sitemap
{
    const baseUrl = "https://bucurieindar.org";

    const paths = Object.values(MyRoutePaths).map(x => x);
    let urls = paths.map(link => {
        const url = baseUrl + link;
        const lastModified = new Date();
        const priority = 1;
        const alternates = {
            languages: {
                ro: `${baseUrl}/ro${link}`,
                en: `${baseUrl}/en${link}`
            }
        }
        return { url, lastModified, priority, alternates };
    });

    // Add projects
    const projects = GetAllProjectsStaticContent(99);
    projects.forEach(x => {
        const projectUrl = baseUrl + MyRoutePaths.Projects + "/" + x.slug;
        const lastModified = new Date();
        const changeFrequency: string|undefined = "monthly";
        const priority = 1;
        const alternates = {
            languages: {
                ro: `${baseUrl}/ro${MyRoutePaths.Projects}/${x.slug}`,
                en: `${baseUrl}/en${MyRoutePaths.Projects}/${x.slug}`
            }
        }
        urls.push({ url: projectUrl, lastModified, priority, alternates });
    });

    // Add articles
    // const articles = GetAllArticlesStaticContent(99);
    // articles.forEach(x => {
    //     const articleUrl = baseUrl + MyRoutePaths.Blog + "/" + x.slug;
    //     const alternates = locales.map((loc) => {
    //         const locPrefix = loc === defaultLocale ? "" : "/" + loc;
    //         return { hreflang: loc, href: `https://bucurieindar.org${locPrefix}${MyRoutePaths.Blog }/${x.slug}` };
    //     });
    //     urls.push({ url: articleUrl, alternates });
    // });

    return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {
    
    return getAllURLs();
}