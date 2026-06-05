import Hero from "@/app/components/Hero";
import Image from "next/image";
import Services from "@/app/components/Services";
import Quote from "@/app/components/Quote";
import CallToAction from "@/app/components/CallToAction";
import Number from "@/app/components/Number";
import Logos from "@/app/components/Logos";
import Navbar from "@/app/components/Navbar";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default async function Home({ children, 
  params}
) {
 
  const { locale } = await params;

  const messages = await import(`../../../messages/${locale}.json`)
  .then (m => m. default)


  return (
    <div>
      <Navbar color={'white'} locale={locale}/>
      <Hero/>
      <Services locale={locale}/>
      <Quote/>
      <CallToAction locale={locale}/>
      <Number/>
      <Logos/>
    </div>
  );
}
