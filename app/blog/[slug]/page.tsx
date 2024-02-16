import {Center, Container, Divider, Text} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {GetArticleStaticContentWithSlug} from "@/content/blog/blog-content";

export default function BlogPage({params} : any) {
    const article = GetArticleStaticContentWithSlug(params.slug);
  return (
      <Container size="full">
          <Container className={commonClasses.container} size="lg">
              <TitleWithDescription title={article.title} />
              <Divider mb="xl" color="transparent" />

              <Center>
                <Text c="dimmed">
                    {article.content}
                </Text>
              </Center>

              <Divider color="transparent" pb={100}/>
          </Container>
      </Container>
  );
}
