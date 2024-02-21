import {MetadataRoute} from "next";
import {MyRoutePaths} from "../utils/route-paths";
import {GetAllProjectsStaticContent} from "../content/projects/projects-content";
import {GetAllArticlesStaticContent} from "../content/blog/blog-content";

const allLocales = [""]; //TODO

function getUrlsOfLocale(localeAsString: string) : { url: string }[] {
    const locale = localeAsString === "" 
                                            ? "" 
                                            : "/" + localeAsString;
    const baseUrl = "https://bucurieindar.org" + locale;
    
    const paths = Object.values(MyRoutePaths).map(x => x.link);
    let urls = paths.map(link => ({ url: baseUrl + link }));

    // Add projects
    const projects = GetAllProjectsStaticContent(99);
    projects.forEach(x => urls.push({ url: baseUrl + MyRoutePaths.Projects.link + "/" + x.slug }));

    // Add articles
    const articles = GetAllArticlesStaticContent(99);
    articles.forEach(x => urls.push({ url: baseUrl + MyRoutePaths.Blog.link + "/" +  x.slug }));

    return urls;
}

export default async function sitemap() : Promise<MetadataRoute.Sitemap>
{
    let allUrls : { url: string }[] = [];
    
    for (let locale of allLocales)
    {
        const urls = getUrlsOfLocale(locale);
        urls.forEach(x => allUrls.push(x));
    }
    
    return allUrls;
}