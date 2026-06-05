import React from 'react'
import {useTranslations} from 'next-intl';

const DistribuidorQuote = () => {

  const t = useTranslations("Distribuidor-quote")

  return (
    <div className="h-[40vh] bg-cover bg-center bg-[url('/assets/dist-bg.png')] flex flex-col justify-center items-center">
    <h3 className='font-helony text-[7vw] md:text-[4vw] text-whitesecondary'>Grupo Ortiz</h3>
    <span className='font-morganite text-center text-[14vw] leading-[11vw] md:leading-inherit md:text-[8vw] text-whitesecondary'>{t("Quote")}</span>
    
    </div>
  )
}

export default DistribuidorQuote