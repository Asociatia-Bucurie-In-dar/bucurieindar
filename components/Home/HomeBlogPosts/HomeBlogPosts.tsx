
import classes from './HomeBlogPosts.module.css';
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";
import {Button, Container, Divider, Group} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";

export function HomeBlogPosts() {
    return (
        <Container size="lg" pt="xl">
            <TitleWithDescription title={"Blog"} 
                                  description={"Aici este un sub-titlu opțional pentru secțiunea Blog de pe prima pagina."}/>
            <Divider mb="xl" color="transparent" />
            <BlogPostsGrid amount={4} cols={2}/>
        </Container>
    );
}