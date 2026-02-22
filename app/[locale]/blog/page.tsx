import {Container, Divider} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";
import {getTranslations, setRequestLocale} from "next-intl/server";

export async function generateMetadata({params}:{ params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    const t = await getTranslations({ locale, namespace: 'BLOG' });
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return { title: title, description: description };
}

export default async function BlogPage( {params} : {params: Promise<{locale: string}>} ) {
    const {locale} = await params;
    setRequestLocale(locale);
    const t = await getTranslations('BLOG');
    
  return (
      <div>
      <Container className={commonClasses.container} size="md">
            <TitleWithDescription title={t('TITLE')} />
            <Divider mb="xl" color="transparent" />

            <BlogPostsGrid amount={25} cols={1} />

            <Divider color="transparent" pb={100}/>
        </Container>
    </div>
  );
}
