"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import IconCard from "./IconCard";
import { TfiWorld } from "react-icons/tfi";
import { PiPlantLight } from "react-icons/pi";
import { SlRefresh } from "react-icons/sl";
import { PiHandsClapping } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";

const SocialPartners = () => {
  const t = useTranslations("Impacto-social");

  return (
    <div className="flex flex-col overflow-hidden bg-cover bg-center bg-[url('../../public/assets/texture-3.jpg')] md:bg-[url('../../public/assets/texture-2.jpg')] md:pt-20">
      {/* Compromiso con oceanos */}
      <div className="flex flex-col gap-4 pb-8">
        <div className="flex flex-col px-8 md:px-20 pt-12 gap-0">
          <span className="font-moisette-regular text-[6vw] leading-[6vw] text-graybg p-0 scroll-animation animate-[moveToLeft]">
            {t("ocean-1-sm")}
          </span>
          <span className="font-moisette-italic text-[4.5vw] text-graybg mt-[-10px] scroll-animation animate-[moveToRight]">
          {t("ocean-2-sm")}{" "}
            <span className="text-orangeprimary">{t("ocean-3-sm")}</span>
          </span>
        </div>

        <div className="w-full md:flex md:flex-row md:justify-center md:items-end px-8 md:px-20">
          <video className="w-[100%] md:w-[50%]" autoPlay muted loop playsInline
  controls={false}>
            <source src="/assets/waves.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <span className="text-graybg font-helony px-16 text-[1.4vw] leading-[2vw] text-left hidden md:flex md:-[50%]">
          {t("ocean-p")}
        </span>

        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 px-8 md:pl-20 md:pr-36 lg:pr-48 md:pt-20 py-4">
          <IconCard
            Icon={TfiWorld}
            title={t("icon-title-1")}
            subtitle={t("icon-subtitle-1")}
          />

          <IconCard
            Icon={PiPlantLight}
            title={t("icon-title-2")}
            subtitle={t("icon-subtitle-2")}
          />

          <IconCard
            Icon={SlRefresh}
            title={t("icon-title-3")}
            subtitle={t("icon-subtitle-3")}
          />

          <IconCard
            Icon={PiHandsClapping}
            title={t("icon-title-4")}
            subtitle={t("icon-subtitle-4")}
          />
        </div>

        <span className="text-graybg font-helony px-8 text-[3vw] text-justify md:hidden">
        {t("ocean-p")}
        </span>
      </div>

      {/* Tom Ford y Ocean CleanUp*/}
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="h-auto py-[45vw] md:py-[15vw] relative flex flex-col justify-center items-center bg-tom bg-[40%_80%] bg-no-repeat bg-[url('../../public/assets/impacto/tomford.webp')] md:w-[50%]">
            <Image
              src={"/assets/impacto/tomford.png"}
              width={200}
              height={200}
              alt="tom-ford-logo"
              className="absolute w-[40%] top-[75%] left-[40%]"
            ></Image>
          </div>
          <div className="h-auto py-24 md:py-[10vw] px-4 md:px-16 flex flex-col justify-center items-center gap-3 md:gap-12 bg-tom md:bg-tom md:bg-fixed bg-[top_center] md:bg-bottom bg-no-repeat bg-[url('../../public/assets/bubbles-movil.webp')] md:w-[50%]">
            <h4 className="font-moisette-regular text-orangeprimary w-[90%] text-[6vw] leading-[6vw] md:text-[4vw] md:leading-[3.5vw] lg:text-[2.5vw] lg:leading-[2vw] text-center">
              Tom Ford Plastic Innovation Prize powered by Lonely Whale
            </h4>
            <p className="font-helony text-graybg px-6 text-[3vw] text-justify md:text-[2vw] md:leading-[2.2vw]  lg:text-[1.5vw] lg:leading-[1.6vw]">
              {t("tom-ford-p")}
            </p>
            <div className="flex flex-row gap-2 justify-center items-end">
              <Link
                href={"https://unwrapthefuture.org/"}
                className="text-orangeprimary font-helony uppercase text-[4vw] md:text-[3vw] lg:text-[2vw] underline"
                target="_blank"
              >
                {t("know-more")}
              </Link>
              <HiArrowUpRight className="text-[8vw] md:text-[6vw] lg:text-[4vw] text-orangeprimary" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="h-auto py-[55vw] md:py-[20vw] relative flex flex-col justify-center items-center bg-[top_center] bg-ocean md:bg-ocean-md bg-no-repeat bg-[url('../../public/assets/impacto/theoceanbg.jpg')] md:w-[50%]">
            <Image
              src={"/assets/impacto/theoceancleanup.png"}
              width={200}
              height={200}
              alt="tom-ford-logo"
              className="absolute w-[30%] top-[30%] left-[35%]"
            ></Image>
          </div>
          <div className="h-auto py-24 md:py-[10vw] md:px-16 px-4 flex flex-col justify-center items-center gap-3 md:gap-12 md:bg-fixed bg-tom bg-[bottom_center] md:bg-bottom bg-no-repeat bg-[url('../../public/assets/bubbles-movil.webp')] md:w-[50%]">
            <h4 className="font-moisette-regular text-orangeprimary w-[90%] text-[6vw] leading-[6vw] md:text-[4vw] md:leading-[3.5vw] lg:text-[2.5vw] lg:leading-[2vw] text-center">
              The Ocean Cleanup
            </h4>
            <p className="font-helony text-graybg px-6 text-[3vw] text-justify md:text-[2vw] md:leading-[2.2vw] lg:text-[1.5vw] lg:leading-[1.6vw]">
              {t("ocean-clean-p")}
            </p>
            <div className="flex flex-row gap-2 justify-center items-end">
              <Link
                href={"https://theoceancleanup.com/"}
                target="_blank"
                className="text-orangeprimary font-helony uppercase text-[4vw] md:text-[3vw] lg:text-[2vw] underline"
              >
                {t("know-more")}
              </Link>
              <HiArrowUpRight className="text-[8vw] md:text-[6vw] lg:text-[4vw] text-orangeprimary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPartners;
