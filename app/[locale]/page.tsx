import {HomeHero} from '@/components/Home/Hero/HomeHero';
import {HomeProjects} from '@/components/Home/HomeProjects/HomeProjects';
import {HomeFeeding} from '@/components/Home/HomeFeeding/HomeFeeding';
import {HomeAboutGeneral} from '@/components/Home/HomeAboutGeneral/HomeAboutGeneral';
import {HomeAboutProjects} from '@/components/Home/HomeAboutProjects/HomeAboutProjects';
import {OurTeam} from '@/components/OurTeam/OurTeam';
import {FAQ} from '@/components/FAQ/FAQ';
import {BankAccounts} from '@/components/BankAccounts/BankAccounts';
import {HomeBlogPosts} from '@/components/Home/HomeBlogPosts/HomeBlogPosts';
import {SfIoan} from "@/components/SfIoan/SfIoan";
import {Divider} from "@mantine/core";
import {setRequestLocale} from "next-intl/server";

export default async function HomePage({params}:{ params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    setRequestLocale(locale);
    
  return (
      <>
          {/* Story order: what we do -> impact -> how you can help -> why trust us -> donate */}
          <HomeHero/>
          <HomeFeeding/>
          <HomeAboutGeneral/>
          <HomeProjects/>
          <HomeAboutProjects/>
          <SfIoan disableBackground={true}/>
          <OurTeam/>
          <FAQ/>
          <BankAccounts/>
          {/*<HomeBlogPosts/>*/}
      </>
  );
}
