import {Center, Container, Divider, Image, Text} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {GetArticleStaticContentWithSlug, GetAllArticlesStaticContent} from "@/content/blog/blog-content";
import {Metadata} from "next";
import {unstable_setRequestLocale} from "next-intl/server";
import {locales} from "@/middleware";

export function generateStaticParams() {
    const allArticles = GetAllArticlesStaticContent(99);
    return allArticles.flatMap(article => locales.map(locale => ({
        params: { locale, slug: article.slug }
    })));
}

export function generateMetadata({params: {locale, slug}}:{ params: { locale: string, slug: string } }) : Metadata {
    const article = GetArticleStaticContentWithSlug(slug);//TODO pass locale
    return {
        title: article.title,
        description: article.content.slice(0, 100)
    };
}

export default function BlogPage({params: {locale, slug}}:{ params: { locale: string, slug: string } }) {
    unstable_setRequestLocale(locale);
    
    const imageFolder = '/blog/';
    const article = GetArticleStaticContentWithSlug(slug);
    
  return (
      <div>
          <Container className={commonClasses.container} size="lg">
              <TitleWithDescription title={article.title} description={"🛠️ " + "Blog-ul este încă în construcție"}/>

              <Divider mb="xl" color="transparent"/>

              <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                  <Image src={imageFolder + article.image_name}/>
              </div>

              <Divider mb="xl" mt="md" color="transparent"/>

              <Center>
                  <Text c="dimmed">
                      {article.content}
                  </Text>
              </Center>

              <Divider color="transparent" pb={100}/>
              
          </Container>
      </div>
);
}
