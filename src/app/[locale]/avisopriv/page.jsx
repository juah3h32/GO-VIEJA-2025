import React from 'react'
import Navbar from '@/app/components/Navbar';
import AvisoPrivacidad from '@/app/components/AvisoPrivacidad';


export default async function page({ children, 
    params}
  ) {
   
    const { locale } = await params;
  return (
    <div>
        <Navbar color={'white'} locale={locale}/>
        <AvisoPrivacidad/>
    </div>
  )
}