import {Center, Container, Divider, Image, rem, Text} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {GetArticleStaticContentWithSlug, GetAllArticlesStaticContent} from "@/content/blog/blog-content";
import {Metadata} from "next";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {routing} from "@/routing";

export function generateStaticParams() {
    const allArticles = GetAllArticlesStaticContent(99);
    return allArticles.flatMap(article => routing.locales.map(locale => ({
        locale, slug: article.slug
    })));
}

export async function generateMetadata({params}:{ params: Promise<{ locale: string, slug: string }> }) : Promise<Metadata> {
    const {locale, slug} = await params;
    const article = GetArticleStaticContentWithSlug(slug);
    const t = await getTranslations({locale, namespace: 'BLOG.ARTICLES.' + article.translation_key });
    return {
        title: t('TITLE'),
        description: t('DESCRIPTION').slice(0, 100)
    };
}

export default async function BlogPage({params}:{ params: Promise<{ locale: string, slug: string }> }) {
    const {locale, slug} = await params;
    setRequestLocale(locale);
    
    const imageFolder = '/blog/';
    const article = GetArticleStaticContentWithSlug(slug);
    const t = await getTranslations('BLOG.ARTICLES.' + article.translation_key);
    
  return (
      <div>
          <Container className={commonClasses.container} size="lg">
              <TitleWithDescription title={t('TITLE')} />

              <Divider mb="xl" color="transparent"/>

              <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                  <Image src={imageFolder + article.image_name}/>
              </div>

              <Divider mb="xl" mt="md" color="transparent"/>
              
                  <Text c="customDimmed" style={{textAlign: 'center'}} fw={500}>
                      {t('DESCRIPTION')}
                  </Text>

              <Divider color="transparent" pb={100}/>
              
          </Container>
      </div>
);
}
