
import classes from './HomeBlogPosts.module.css';
import {BlogPostsGrid} from "@/components/Blog/BlogPostsGrid/BlogPostsGrid";
import {Button, Container, Divider, Group} from "@mantine/core";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {MyRoutePaths} from "@/utils/route-paths";
import Link from "next/link";
import {ConfettiButton} from "@/components/ConfettiButton/ConfettiButton";

export function HomeBlogPosts() {
    return (
        <Container size="lg" mt="xl">
            <TitleWithDescription title={"Blog"} 
                                  description={"Aici este un sub-titlu opțional pentru secțiunea Blog de pe prima pagina."}/>
            <Divider mb="xl" color="transparent" />
            <BlogPostsGrid amount={4} cols={2}/>
        </Container>
    );
}