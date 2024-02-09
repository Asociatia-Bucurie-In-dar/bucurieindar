import {HomeHero} from '@/components/Home/Hero/HomeHero';
import {HomeProjects} from '@/components/Home/HomeProjects/HomeProjects';
import {HomeFeeding} from '@/components/Home/HomeFeeding/HomeFeeding';
import {HomeAboutGeneral} from '@/components/Home/HomeAboutGeneral/HomeAboutGeneral';
import {HomeAboutProjects} from '@/components/Home/HomeAboutProjects/HomeAboutProjects';

export default function HomePage() {
  return (
    <>
      <HomeHero />
        <HomeProjects />
      <HomeFeeding />
        <HomeAboutGeneral />
        <HomeAboutProjects />
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
