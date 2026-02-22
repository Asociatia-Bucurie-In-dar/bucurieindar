import { MetadataRoute } from "next";
import { MyRoutePaths } from "@/utils/route-paths";
import { GetAllProjectsStaticContent } from "@/content/projects/projects-content";
import { GetAllArticlesStaticContent } from "@/content/blog/blog-content";
import { routing } from "@/routing";

const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

function getUrlsOfLocale(localeAsString: string): MetadataRoute.Sitemap {
    const locale = localeAsString === "" ? "" : "/" + localeAsString;
    const baseUrl = "https://bucurieindar.org" + locale;

    const paths = Object.values(MyRoutePaths).map(x => x);
    let urls: MetadataRoute.Sitemap = paths.map((link, index) => {
        const url = baseUrl + link;
        const languages: Record<string, string> = {};
        for (const loc of locales) {
            const locPrefix = loc === defaultLocale ? "" : "/" + loc;
            languages[loc] = `https://bucurieindar.org${locPrefix}${link}`;
        }
        const priority = index === 0 ? 1 : 0.5;
        return { url, priority, alternates: { languages } };
    });

    const projects = GetAllProjectsStaticContent(99);
    projects.forEach(x => {
        const projectUrl = baseUrl + MyRoutePaths.Projects + "/" + x.slug;
        const languages: Record<string, string> = {};
        for (const loc of locales) {
            const locPrefix = loc === defaultLocale ? "" : "/" + loc;
            languages[loc] = `https://bucurieindar.org${locPrefix}${MyRoutePaths.Projects}/${x.slug}`;
        }
        urls.push({ url: projectUrl, priority: 0.7, alternates: { languages } });
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let allUrls: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        const localeStr = locale === defaultLocale ? "" : locale;
        const urls = getUrlsOfLocale(localeStr);
        urls.forEach(x => allUrls.push(x));
    }

    // Logic to convert allUrls to the desired sitemap format goes here
    // This part depends on how you plan to serialize or output the sitemap with hreflang annotations

    return allUrls;
}