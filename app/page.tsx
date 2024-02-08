import {HomeHero} from '@/components/Home/Hero/HomeHero';
import {HomeProjects} from '@/components/Home/HomeProjects/HomeProjects';
import {CompaniesWeWorkWith} from '@/components/Companies/CompaniesWeWorkWith';
import {HomeFeeding} from '@/components/Home/HomeFeeding/HomeFeeding';

export default function HomePage() {
  return (
    <>
      <HomeHero />
        <HomeProjects />
      <HomeFeeding />
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
