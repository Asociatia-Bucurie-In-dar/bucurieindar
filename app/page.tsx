import {HomeHero} from '@/components/Home/Hero/HomeHero';
import {HomeProjects} from '@/components/Home/HomeProjects/HomeProjects';
import {HomeFeeding} from '@/components/Home/HomeFeeding/HomeFeeding';
import {HomeAboutGeneral} from '@/components/Home/HomeAboutGeneral/HomeAboutGeneral';

export default function HomePage() {
  return (
    <>
      <HomeHero />
        <HomeProjects />
      <HomeFeeding />
        <HomeAboutGeneral />
        {/* ... 
        //<HomeProjects />
            //<ProjectPreviewCard />
                <ProjectFullPage/>
       
        <HomeAboutGeneral />
        <HomeAboutProjects />
        <OurTeam />
        <FAQ />
        <HomeBlogPosts />
            <BlogPostPreviewCard />
                <BlogPostFullPage />  
                */}
    </>
  );
}
