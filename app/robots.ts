import {userAgent} from "next/server";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "",
                allow: "/",
                disallow: ["/admin"],
            }
        ],
        sitemap: "https://bucurieindar.org/sitemap.xml"
    }
}