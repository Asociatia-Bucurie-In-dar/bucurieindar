import {Container, Divider} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";

export default function BlogPage() {
  return (
      <div>
      <Container className={commonClasses.container} size="md">
            <TitleWithDescription title={"Articolele noastre"} />
            <Divider mb="xl" color="transparent" />

            <BlogPostsGrid amount={25} cols={1} />

            <Divider color="transparent" pb={100}/>
        </Container>
    </div>
  );
}
