import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

const Number = () => {
  const t = useTranslations("Number");
  return (
    <div className="flex md:flex-row flex-col bg-graybg h-auto justify-center items-center xl:px-0">
      <div className="flex flex-col md:flex-row h-full w-[100%] md:w-[70%] pt-12 lg:w-[60%] items-center md:py-14 xl:items-center justify-center xl:justify-start gap-3 md:pl-20">
        <span className="text-[35vw] leading-none md:text-[20vw] md:leading-none font-morganite">
          260
        </span>
        <div className="flex flex-col w-[100%]">
          <span className="text-[14vw] leading-[11vw] flex flex-wrap flex-row items-center justify-center md:justify-start gap-x-2 gap-y-2 font-morganite w-[full] md:text-[10vw] md:leading-[7.4vw]">
            <span className="text-orangeprimary">{t("span-1")}</span>
            <span className="text-whitesecondary">{t("span-2")}</span>
            <span className=" text-orangeprimary">{t("span-3")}</span>
            <Link href="https://wa.link/21d2az" className="py-2 px-4 bg-orangeprimary rounded-2xl text-whitesecondary font-helony text-[5vw] md:text-[1vw] leading-none hover:scale-110 transition-transform duration-150">
              Cotizar flete
            </Link>
          </span>
          <span className="text-whitesecondary font-helony w-full pt-6 md:pt-0 text-center md:text-left text-[2.5vw] md:text-[1.4vw] leading-none">
            Envíos seguros y monitoreados a todo el mundo
          </span>
        </div>
      </div>
      <div className="bg-graybg w-full md:w-[45%] flex flex-col self-end h-[100%]">
        <Image
        src={'/assets/trucks.webp'}
        width={1080}
        height={1}
        alt={'trucks'}
        className="w-[100%]"
        />
      </div>
    </div>
  );
};

export default Number;
