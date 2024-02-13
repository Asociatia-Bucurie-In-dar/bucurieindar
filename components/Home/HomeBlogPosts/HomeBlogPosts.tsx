
import classes from './HomeBlogPosts.module.css';
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";
import {Button, Container, Divider, Group} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import commonClasses from "@/utils/commonClasses.module.css";

export function HomeBlogPosts() {
    return (
    <Container size="full" className={commonClasses.darkerBackground}>
        <Container size="lg" pt="xl">
            <TitleWithDescription title={"Blog"} 
                                  description={"Aici este un sub-titlu opțional pentru secțiunea Blog de pe prima pagina."}/>
            <Divider pb="xl" color="transparent" />
            <BlogPostsGrid amount={4} cols={2}/>
        </Container>
    </Container>
    );
}