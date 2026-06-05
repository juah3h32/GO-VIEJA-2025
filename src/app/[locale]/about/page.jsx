import React from 'react'
import About from '@/app/components/About'
import Navbar from '@/app/components/Navbar'
import Datos from '@/app/components/Datos'
import Map from '@/app/components/Map'
import Ruleta from '@/app/components/Ruleta'

export default async function page({ children, 
  params}
) {
 
  const { locale } = await params;

  return (
    <div>
    <Navbar color={'black'} locale={locale}/>
    <About locale={locale}/>
    <Datos/>
    <Map/>
    </div>
  )
}