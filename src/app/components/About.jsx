import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Router from "next/navigation";
import { PiArrowUpRightThin } from "react-icons/pi";
import Image from "next/image";

const About = ({ locale }) => {
  const t = useTranslations("About-page");
  return (
    <div className="flex flex-row py-[17%] md:py-[10%] lg:py-[5%] relative overflow-x-hidden">
      <div className="flex flex-col justify-center gap-6 items-center md:items-start pt-[20vw] lg:pt-[15vw] px-12 lg:px-16 xl:px-32">
        <h1 className="uppercase text-center md:text-left text-[25vw] md:text-[16vw] text-orangeprimary font-morganite leading-[80%] h-auto">
          {t("h1-1")}
          <span className="text-graybg"> {t("h1-2")}</span>
        </h1>
        <p className="text-graybg text-justify md:text-left font-helony leading-[5vw] text-[4vw] md:text-[1.7vw] md:leading-8 w-[80%] md:w-[55%]">
          {t("p")}
        </p>
        <Link
          className="text-orangeprimary uppercase font-helony underline text-[5vw] md:text-[2vw] flex flex-row justify-center items-center group"
          href={`/${locale}/catalogo`}
        >
          {t("link")}{" "}
          <span className="text-[8vw] md:text-[4vw]">
            <PiArrowUpRightThin className="group-hover:scale-125 transition-transform duration-200" />
          </span>
        </Link>
        <div className="flex flex-col justify-center items-center md:flex-row md:gap-10 w-[100%] md:w-[85%] pt-14">
          <div className="flex flex-col justify-around h-[100%]">
            <div className="flex flex-col md:flex-row gap-6 justify-start items-center pt-5">
              <Image
                src={"/assets/about/65.png"}
                alt="65"
                width={90}
                height={90}
                className="w-[35%] md:w-[18%]"
              ></Image>
              <span className="font-helony text-graybg text-[5vw] md:text-[2vw] leading-none">
                {t("item-4")}{" "}
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-start items-center pt-5">
            <Image
              src={"/assets/about/4000.png"}
              alt="65"
              width={100}
              height={90}
              className="w-[40%] md:w-[18%]"
            ></Image>
            <span className="font-helony text-graybg text-[5vw] md:text-[2vw] leading-none">
            {t("item-3")}
            </span>
          </div>

            
          </div>
          <div className="flex flex-col justify-around h-[100%] md:gap-14">

          <div className="flex flex-col md:flex-row gap-6 justify-start items-center pt-5">
              <Image
                src={"/assets/about/24.png"}
                alt="65"
                width={120}
                height={80}
                className="w-[40%] md:w-[18%]"
              ></Image>
              <span className="font-helony text-graybg text-[5vw] md:text-[2vw] leading-none">
              {t("item-1")}{" "}
              </span>
            </div>

          <div className="flex flex-col md:flex-row gap-6 justify-start items-center pt-5">
            <Image
              src={"/assets/about/25.png"}
              alt="65"
              width={80}
              height={80}
              className="w-[35%] md:w-[15%]"
            ></Image>
            <span className="font-helony text-graybg text-[5vw] md:text-[2vw] leading-none">
            {t("item-2")}
            </span>
          </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-30% justify-center items-center overflow-hidden">
        <Image
          src={"/assets/circle.webp"}
          alt="circle"
          width={800}
          height={800}
          className="absolute w-[45%] top-[18%] right-[-18%]"
        ></Image>
        <span className="absolute px-7 py-6 bg-graybg text-whitesecondary text-[1.8vw] xl:text-[1.2vw] rounded-3xl w-auto font-helony leading-5 top-[30%] xl:top-[35%] right-[10%]">
          {t("link1-1")}{" "}
          <Link href={`/${locale}/catalogo`} className="underline">
          {t("link1-2")}
          </Link>
        </span>
        <span className="absolute px-7 py-6 bg-graybg text-whitesecondary text-[2vw] xl:text-[1.5vw] rounded-3xl w-auto font-helony leading-5 top-[55%] xl:top-[65%] right-[13%]">
          <Link href={`/${locale}/contacto`} className="underline">
          {t("link2-1")}
          </Link>{" "}
          {t("link2-2")}
        </span>
      </div>
    </div>
  );
};

export default About;
