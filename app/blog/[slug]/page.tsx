import {Center, Container, Divider, Image, Text} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {GetArticleStaticContentWithSlug, GetAllArticlesStaticContent} from "@/content/blog/blog-content";
import {Metadata} from "next";

export function generateStaticParams() {
    const allArticles = GetAllArticlesStaticContent(99);
    return allArticles.map(article => ({
        params: { slug: article.slug }
    }));
}

export function generateMetadata({params}:any) : Metadata {
    const article = GetArticleStaticContentWithSlug(params.slug);
    return {
        title: article.title,
        description: article.content.slice(0, 100)
    };
}

export default function BlogPage({params} : any) {
    const article = GetArticleStaticContentWithSlug(params.slug);
    
  return (
      <div>
          <Container className={commonClasses.container} size="lg">
              <TitleWithDescription title={article.title}/>

              <Divider mb="xl" color="transparent"/>

              <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                  <Image src={article.image_name}/>
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
