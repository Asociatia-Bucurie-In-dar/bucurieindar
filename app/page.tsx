import {HomeHero} from '@/components/Home/Hero/HomeHero';
import {HomeProjects} from '@/components/Home/HomeProjects/HomeProjects';
import {HomeFeeding} from '@/components/Home/HomeFeeding/HomeFeeding';
import {HomeAboutGeneral} from '@/components/Home/HomeAboutGeneral/HomeAboutGeneral';
import {HomeAboutProjects} from '@/components/Home/HomeAboutProjects/HomeAboutProjects';
import {OurTeam} from '@/components/OurTeam/OurTeam';
import {FAQ} from '@/components/FAQ/FAQ';
import {HomeBlogPosts} from '@/components/Home/HomeBlogPosts/HomeBlogPosts';
import {CompaniesWeWorkWith} from "@/components/Companies/CompaniesWeWorkWith";
import {Divider} from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CompaniesWeWorkWith />
        <HomeProjects />
        <HomeFeeding />
        <HomeAboutGeneral />
        <HomeAboutProjects />
        <OurTeam />
        <FAQ />
        <HomeBlogPosts />
      <Divider color="transparent" mb={100}/>
        {/* ... 
        //<HomeProjects />
            //<ProjectPreviewCard />
                <DonateModal />
                <ProjectFullPage/>
       
        //<HomeAboutGeneral />
        //<HomeAboutProjects />
        //<OurTeam />
        //<FAQ />
        //<HomeBlogPosts />
            //<BlogPostPreviewCard />
                <BlogPostFullPage />  
                */}
    </>
  );
}
