import Download from "@/app/components/Download";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Catalogos = () => {
    const t = useTranslations("Catalogos")
  return (
    <div>
        {/* Catálogo General */}
        <div className="flex flex-col h-auto pt-[17vh] justify-center items-center gap-9">
          <h1 className="font-morganite text-orangeprimary text-[20vw]">
            {t("h1-1")}<span className="text-graybg">{t("h1-2")}</span>
          </h1>

          <div className="flex flex-col justify-center w-[90%] items-center gap-0 rounded-b-2xl">
            <div className="flex flex-col w-full h-full bg-[url('/assets/services/STRETCH.webp')] bg-no-repeat bg-center bg-cover text-center px-14 py-24">
              <h2 className="font-morganite text-[15vw] leading-[12vw] text-gray-200 uppercase mb-[4vw]">
              {t("h2-1")}
              </h2>
              <h2 className="font-morganite text-[9vw] leading-[0vw] uppercase text-gray-200">
              General Catalog
              </h2>
            </div>
            <div className="p-4 w-[100%] flex flex-row items-center justify-center gap-2 bg-graybg rounded-b-3xl">
              <Download
                fileName={"Versión en Español"}
                fileSize={"1 mb"}
                fileType={"PDF"}
                imageSrc={"/assets/mexico.png"}
                fileUrl={
                  "https://drive.google.com/file/d/13G74hq3EzQdUeSIhTFebYa5XjZwnRRp_/view?usp=drive_link"
                }
              />
              <Download
                fileName={"English Version"}
                fileSize={"1 mb"}
                fileType={"PDF"}
                imageSrc={"/assets/usa.png"}
                fileUrl={
                  "https://drive.google.com/file/d/1ppw5m9H7ziMvXYte-4IK7HHNyO2tJONm/view?usp=drive_link"
                }
              />
            </div>
          </div>

          <div className="flex flex-row flex-wrap w-[] bg-graybg py-20 px-8 justify-center items-center gap-8">
            <div className="flex flex-col gap-0">
              <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/services/ARPILLAS.webp')] py-20 w-[320px] aspect-video flex justify-center items-center">
                <h3 className="font-morganite text-whitesecondary text-[20vw] leading-[18vw] md:text-[12vw] md:leading-[10vw] lg:leading-[4.6vw] lg:text-[6vw] text-center uppercase">
                  {t("arpillas")}
                </h3>
              </div>

              <div className="flex flex-row justify-between bg-gray-400 h-[100px] w-[100%] p-4">
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/mexico.png"}
                      width={25}
                      height={25}
                      alt={"mexico"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ESP
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1hqE5U-cAgXrRq4gzUeMquHjAHS9YcaMd/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/usa.png"}
                      width={25}
                      height={25}
                      alt={"usa"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ENG
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/11C84opeUFft6cRdKZx0BDvFCTNHWJOHa/view?usp=sharing" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/services/ARPILLAS.webp')] py-20 w-[320px] aspect-video flex justify-center items-center">
                <h3 className="font-morganite text-whitesecondary text-[20vw] leading-[18vw] md:text-[12vw] md:leading-[10vw] lg:leading-[4.6vw] lg:text-[6vw] text-center uppercase">
                {t("cuerdas")}
                </h3>
              </div>

              <div className="flex flex-row justify-between bg-gray-400 h-[100px] w-[100%] p-4">
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/mexico.png"}
                      width={25}
                      height={25}
                      alt={"mexico"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ESP
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1j1hrpimoooUfrIAKiKkST-bgeZUqf_62/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150" target="_blank"/></Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/usa.png"}
                      width={25}
                      height={25}
                      alt={"usa"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ENG
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1zDh3oh7ce9JRm6FNOpvgWsOhangsN9Lj/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150" target="_blank"/></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/services/ARPILLAS.webp')] py-20 w-[320px] aspect-video flex justify-center items-center">
              <h3 className="font-morganite text-whitesecondary text-[16vw] leading-[18vw] md:text-[8vw] md:leading-[10vw] lg:leading-[4.6vw] lg:text-[5vw] text-center uppercase">
                {t("esquineros")}
                </h3>
              </div>

              <div className="flex flex-row justify-between bg-gray-400 h-[100px] w-[100%] p-4">
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/mexico.png"}
                      width={25}
                      height={25}
                      alt={"mexico"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ESP
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1fRNYty2QZ9IyxPzsynlMh-JOihpJXKG0/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/usa.png"}
                      width={25}
                      height={25}
                      alt={"usa"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ENG
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1jF2rcBw1aAvYNZN13xZSQzax6-u5pOGD/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/services/ARPILLAS.webp')] py-20 w-[320px] aspect-video flex justify-center items-center">
                <h3 className="font-morganite text-whitesecondary text-[16vw] leading-[18vw] md:text-[8vw] md:leading-[10vw] lg:leading-[4.6vw] lg:text-[4.5vw] text-center uppercase">
                {t("flexibles")}
                </h3>
              </div>

              <div className="flex flex-row justify-between bg-gray-400 h-[100px] w-[100%] p-4">
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/mexico.png"}
                      width={25}
                      height={25}
                      alt={"mexico"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ESP
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1ftS0Pbg9_tsm1hKu6wxmqWO5dPZivQyI/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/usa.png"}
                      width={25}
                      height={25}
                      alt={"usa"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ENG
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1YQwtvxeI3xKsBz-pi1WoJRLhGa43fgqA/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/services/ARPILLAS.webp')] py-20 w-[320px] aspect-video flex justify-center items-center">
                <h3 className="font-morganite text-whitesecondary text-[20vw] leading-[18vw] md:text-[12vw] md:leading-[10vw] lg:leading-[4.6vw] lg:text-[6vw] text-center uppercase">
                {t("rafia")}
                </h3>
              </div>

              <div className="flex flex-row justify-between bg-gray-400 h-[100px] w-[100%] p-4">
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/mexico.png"}
                      width={25}
                      height={25}
                      alt={"mexico"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ESP
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1xdufNXpy_oXLwDi0WI6ybKUmgHftiMW_/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/usa.png"}
                      width={25}
                      height={25}
                      alt={"usa"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ENG
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1JeooBwIX8KNt6faZ4l09JzBPQG-7SOio/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/services/ARPILLAS.webp')] py-20 w-[320px] aspect-video flex justify-center items-center">
                <h3 className="font-morganite text-whitesecondary text-[20vw] leading-[18vw] md:text-[12vw] md:leading-[10vw] lg:leading-[4.6vw] lg:text-[6vw] text-center uppercase">
                {t("sacos")}
                </h3>
              </div>

              <div className="flex flex-row justify-between bg-gray-400 h-[100px] w-[100%] p-4">
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/mexico.png"}
                      width={25}
                      height={25}
                      alt={"mexico"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ESP
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1MD593TXhotWE49qNI8riAMZw89VoLmnQ/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150" target="_blank"/></Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/usa.png"}
                      width={25}
                      height={25}
                      alt={"usa"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ENG
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1wGa6qUjIEqZW_nuwXz880pawZiJeT1Ih/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150" target="_blank"/></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="bg-no-repeat bg-center bg-cover bg-[url('/assets/services/ARPILLAS.webp')] py-20 w-[320px] aspect-video flex justify-center items-center">
                <h3 className="font-morganite text-whitesecondary text-[20vw] leading-[18vw] md:text-[12vw] md:leading-[10vw] lg:leading-[4.6vw] lg:text-[6vw] text-center uppercase">
                {t("stretch")}
                </h3>
              </div>

              <div className="flex flex-row justify-between bg-gray-400 h-[100px] w-[100%] p-4">
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/mexico.png"}
                      width={25}
                      height={25}
                      alt={"mexico"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ESP
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1qhXy0vaaC3oR21wXtqhPbmcr6hENMR7U/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row">
                  <div className="flex flex-row justify-center items-center gap-2 h-full p-2">
                    <Image
                      src={"/assets/usa.png"}
                      width={25}
                      height={25}
                      alt={"usa"}
                    ></Image>
                    <span className="font-helony text-graybg text-[4vw] md:text-[2vw] lg:text-[1vw]">
                      ENG
                    </span>
                  </div>
                  <div className="h-full bg-graybg flex items-center p-4 rounded-tr-xl rounded-br-xl">
                  <Link href="https://drive.google.com/file/d/1ssidXNl_MTfdY6Mg-FS17AjPJxIHa04v/view?usp=drive_link" target="_blank"><FaDownload className="text-white hover:scale-125 transform transition-transform duration-150"/></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Catalogos