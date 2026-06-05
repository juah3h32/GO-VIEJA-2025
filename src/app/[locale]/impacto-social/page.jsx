import ImpactoSocial from '@/app/components/ImpactoSocial'
import Navbar from '@/app/components/Navbar'
import SocialPartners from '@/app/components/SocialPartners'
import React from 'react'

export default async function page({ children, 
  params}
) {
 
  const { locale } = await params;
  return (
    <div>
        <Navbar color={'white'} locale={locale}/>
        <ImpactoSocial/>
        <SocialPartners/>
    </div>
  )
}

