import React from 'react'
import {useTranslations} from 'next-intl';

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className='h-[100vh] bg-graybg bg-no-repeat bg-right-bottom bg-sm sm:bg-md lg:bg-lg bg-[url("/assets/hero-bg.webp")] font-helony flex justify-center md:justify-start items-center p-8 lg:px-40 lg:pl-[6rem] lg:pt-[6rem] xl:px-24 xl:pt-24'>
        <h2 className='text-[18vw] leading-[14vw] md:text-[12vw] md:leading-[10vw] font-morganite text-whitesecondary text-center md:text-left'>{t("hero-title-1")}<br></br> <span className='text-orangeprimary'>{t("hero-title-2")}</span> {t("hero-title-3")}<br></br> <span className='text-orangeprimary'>{t("hero-title-4")}</span></h2>
    </div>
  )
}

export default Hero

// import {useTranslations} from 'next-intl';

// const Hero = () => {
//   const t = useTranslations("Hero");
//   return (

//     <div className='h-[100dvh] font-helony flex justify-center md:justify-start items-center p-8 lg:px-40 lg:pl-[6rem] lg:pt-[6rem] xl:px-24 xl:pt-24 overflow-hidden'>
//     {/* <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-[100dvh] object-cover z-0"
//       >
//         <source src="assets/loop_bg.mp4" type="video/mp4" />
//       </video> */}

//       <div className="absolute top-0 left-0 w-full h-[100dvh] bg-gray-800 opacity-60 z-5"></div>
//       <div className='h-[100vh] bg-graybg bg-no-repeat bg-right-bottom bg-mid bg-[url("/assets/hero-bg.webp")] font-helony flex justify-center md:justify-start items-center p-8 lg:px-40 lg:pl-[6rem] lg:pt-[6rem] xl:px-24 xl:pt-24'>

//         <h2 className='z-10 text-[18vw] leading-[14vw] md:text-[12vw] md:leading-[10vw] font-morganite text-whitesecondary text-center md:text-left'>{t("hero-title-1")}<br></br> <span className='text-orangeprimary'>{t("hero-title-2")}</span> {t("hero-title-3")}<br></br> <span className='text-orangeprimary'>{t("hero-title-4")}</span></h2>
//         </div>
//     </div>
//   )
// }

// export default Hero