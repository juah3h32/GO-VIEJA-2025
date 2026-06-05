import Navbar from '@/app/components/Navbar'
import Promos from '@/app/components/Promos'
import React from 'react'

export default async function page({ children, 
  params}
) {
 
  const { locale } = await params;
  return (
    <div>
    <Navbar color='white' locale={locale}/>
    <Promos/>
    </div>
  )
}
