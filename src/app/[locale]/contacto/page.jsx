import React from 'react'
import Contactmap from '../../components/Contactmap';
import { AiOutlinePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FiAtSign } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import Navbar from '@/app/components/Navbar';


export default async function page({ children, 
    params}
  ) {

const { locale } = await params;
  return (
    <div className='w-full h-auto'>
    <Navbar color={'black'} locale={locale}/>
    <Contactmap/>
    </div>
  )
}