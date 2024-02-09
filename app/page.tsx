import {HomeHero} from '@/components/Home/Hero/HomeHero';
import {HomeProjects} from '@/components/Home/HomeProjects/HomeProjects';
import {HomeFeeding} from '@/components/Home/HomeFeeding/HomeFeeding';
import {HomeAboutGeneral} from '@/components/Home/HomeAboutGeneral/HomeAboutGeneral';
import {HomeAboutProjects} from '@/components/Home/HomeAboutProjects/HomeAboutProjects';
import {OurTeam} from '@/components/OurTeam/OurTeam';
import {FAQ} from '@/components/FAQ/FAQ';
import {HomeBlogPosts} from '@/components/Home/HomeBlogPosts/HomeBlogPosts';

export default function HomePage() {
  return (
    <>
      <HomeHero />
        <HomeProjects />
        <HomeFeeding />
        <HomeAboutGeneral />
        <HomeAboutProjects />
        <OurTeam />
        <FAQ />
        <HomeBlogPosts />
        {/* ... 
        //<HomeProjects />
            //<ProjectPreviewCard />
                <DonateModal />
                <ProjectFullPage/>
       
        //<HomeAboutGeneral />
        //<HomeAboutProjects />
        //<OurTeam />
        //<FAQ />
        <HomeBlogPosts />
            <BlogPostPreviewCard />
                <BlogPostFullPage />  
                */}
    </>
  );
}
