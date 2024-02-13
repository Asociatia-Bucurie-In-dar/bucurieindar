import classes from "@/components/Welcome/Welcome.module.css";
import {Container, Divider, Title} from "@mantine/core";
import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";

export default function BlogPage() {
  return (
    <>
        <Container className={commonClasses.container} size="md">
            <TitleWithDescription title={"Articolele noastre"} />
            <Divider mb="xl" color="transparent" />

            <BlogPostsGrid amount={25} cols={1} />

        </Container>
    </>
  );
}
