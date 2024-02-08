import {HomeHero} from '@/components/Home/Hero/HomeHero';
import {HomeProjects} from '@/components/Home/HomeProjects/HomeProjects';

export default function HomePage() {
  return (
    <>
      <HomeHero />
        <HomeProjects />
        {/* ... 
        <CompaniesWeWorkWith />
        <HomeProjects />
            <ProjectPreviewCard />
                <ProjectFullPage/>
        <HomeFeeding />
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
