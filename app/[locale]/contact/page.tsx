import commonClasses from "@/utils/commonClasses.module.css";
import {Container, Divider} from "@mantine/core";
import {ContactPanel} from "@/components/Contact/ContactPanel";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {ContactTranslationType} from "@/utils/my-types";

export async function generateMetadata({params}:{ params: Promise<{ locale: string }> }) {
    const {locale} = await params;
    const t = await getTranslations({ locale, namespace: 'CONTACT' });
    const title = t('TITLE');
    const description = t('DESCRIPTION');
    return {
        title: title,
        description: description,
    };
}

export default async function ContactPage( {params} : {params: Promise<{locale: string}>} ) {
    const {locale} = await params;
    setRequestLocale(locale);
    const t = await getTranslations('CONTACT');
    const commonT = await getTranslations('COMMON');
    const translations:ContactTranslationType = {
        FormTitle: t('FORM.TITLE'),
        Disclaimer: t('FORM.DISCLAIMER'),
        Email: t('FORM.EMAIL'),
        Phone: t('FORM.PHONE'),
        Address: t('FORM.ADDRESS'),
        WorkingHours: t('FORM.WORKING_HOURS'),
        Name: t('FORM.NAME'),
        YourMessage: t('FORM.YOUR_MESSAGE'),
        Send: t('FORM.SEND'),
        Success: t('FORM.SUCCESS'),
        Error: t('FORM.ERROR'),
        MaterialGoodsTitle: t('MATERIAL_GOODS.TITLE'),
        MaterialGoodsDescription: t('MATERIAL_GOODS.DESCRIPTION'),
        SeeCocosMap: t('SEE_COCOS_MAP'),
        InConstruction: commonT('IN_CONSTRUCTION')
    };
        
    
  return (
      <Container size="full">
          <Container className={commonClasses.container} size="lg">
              
              <ContactPanel translations={translations}/>

              <Divider color="transparent" pb={100}/>
          </Container>
      </Container>
  );
}
