import Benefits from '@/app/components/Benefits'
import Contact from '@/app/components/Contact'
import DistribuidorQuote from '@/app/components/DistribuidorQuote'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default async function page({ children, 
  params}
) {
 
  const { locale } = await params;
  return (
    <div>
        <Navbar color="black" locale={locale}/>
        <Contact locale={locale}/>
        <Benefits/>
        <DistribuidorQuote/>
    </div>
  )
}