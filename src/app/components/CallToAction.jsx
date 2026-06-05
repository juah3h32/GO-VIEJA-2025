"use client"
import React from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import Link from "next/link";


const CallToAction = ({locale}) => {

  const t = useTranslations("Distribuidor");

  return (
    <div className="h-[100vh] md:h-[90vh] lg:h-[80vh] bg-whitesecondary w-full flex flex-col lg:flex-row justify-left items-start md:items-center relative">
      <div className="flex flex-col justify-center items-center lg:items-start p-4 lg:p-8 w-[100%] xl:w-[50%] py-24 px-6 md:py-24 md:px-10 lg:px-24 lg:py-36 gap-3">
        <h3 className="text-center md:text-left px-14 md:px-0 text-[16vw] md:text-[10vw] xl:text-[9vw] md:leading-[12vw] xl:leading-[8vw] leading-[11vw] lg:leading-[8vw] font-morganite text-orangeprimary ">
          {t("h3-p1")}{" "}
          <span className="font-morganite text-graybg text-[13vw] md:text-[12vw] xl:text-[11vw]">
          {t("h3-p2")}
          </span>
        </h3>
        <Link
          href={`/${locale}/ser-distribuidor`}
          className=" w-auto py-[0.8vw] px-[1.2vw] text-[3.8vw] md:text-[2.3vw] lg:text-[1.3vw] text-whitesecondary bg-orangeprimary rounded-3xl font-helony hover:scale-110 transition-transform duration-150"
        >
         {t("cta")}
        </Link>
        <p className="text-graybg mt-[2.3vw] font-helony text-center lg:text-justify text-[3.2vw] md:text-[2.4vw] md:leading-[2vw] leading-[3.2vw] xl:text-[1.3vw] xl:leading-[1.4vw] md:w-[100%]">
        {t("cta-p")}
        </p>
      </div>

      <div className="w-[100%] h-full flex flex-col p-6 md:p-14 justify-end lg:justify-end items-center lg:items-end bg-cover bg-center bg-no-repeat bg-[url('/../assets/planta_monterrey.webp')]">
        <span className="w-full md:w-[90%] px-[2vw] py-[2.5vw] md:px-[1.8vw] md:py-[2.3vw] text-[4vw] sm:text-[2vw] text-center md:text-[1.8vw] xl:text-[1vw] xl:px-[1.2vw] xl:py-[1.5vw] xl:w-[60%] xl:leading-[1vw] bg-graybg font-helony leading-[4vw] md:leading-[2vw] rounded-[114px]">
        {t("span-3-1")}
        </span>
      </div>
    </div>
  );
};

export default CallToAction;
