import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FiAtSign } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";

const Contactmap = () => {
  const t = useTranslations("ser-distribuidor");
  return (
    <div className="flex flex-col md:flex-row h-full gap-8 justify-between items-center w-full pt-[24vh] pb-[10vh] px-4 md:px-14 lg:px-32 md:py-64">
      <div className="flex flex-col justify-center items-center md:items-start gap-20 w-full md:w-[40%] px-16 md:px-2">
        <h2 className="font-morganite text-[20vw] leading-[8vw] md:text-[10vw] text-orangeprimary uppercase">
          {t("form-title")}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-orangeprimary rounded-full">
            <HiOutlinePhone className="!text-whitesecondary text-[14vw] md:text-[5vw] lg:text-[3vw] p-2" />
          </div>
          <div className="flex flex-col gap-3 md:gap-0 text-center md:text-left">
            <h3 className="text-graybg font-helony text-[6vw] leading-[5.5vw] md:text-[2vw] md:leading-7">
              {t("phone")}
            </h3>
            <span className="text-graybg font-helony w-full text-[5vw] leading-[5vw] md:text-[1.2vw] md:leading-6 md:w-[80%]">
              <Link href={'tel:+524432072593'} className="hover:underline">443 207 2593</Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center  gap-6">
        <div className="bg-orangeprimary rounded-full">
          <HiOutlineMail className="bg-orangeprimary rounded-full !text-whitesecondary text-[14vw] md:text-[5vw] lg:text-[3vw] p-2" />
          </div>
          <div className="flex flex-col gap-3 md:gap-0 text-center md:text-left">
            <h3 className="text-graybg font-helony text-[6vw] leading-[5.5vw] md:text-[2vw] md:leading-7">
              {t("mail")}
            </h3>
            <span className="text-graybg font-helony w-full text-[5vw] leading-[5vw] md:text-[1.2vw] md:leading-6 md:w-[80%]">
              <Link href={'mailto:atencionacliente@grupo-ortiz.com'}  className="hover:underline">atencionacliente@grupo-ortiz.com</Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row gap-6">
        <div><span className="text-graybg underline md:no-underline font-helony text-[8vw] md:text-[2vw]">{t("follow-us")}</span></div>
        <div className="flex flex-row gap-6 md:gap-3 lg:gap-6">
        <Link href={"https://web.facebook.com/profile.php?id=61559817857366&_rdc=1&_rdr"} className="bg-orangeprimary rounded-full">
            <FaFacebook className="text-whitesecondary text-[14vw] md:text-[4.5vw] lg:text-[3vw] p-3 md:p-2 lg:p-3 transition-transform duration-200 hover:scale-125" />
          </Link>
          <Link href={"https://www.instagram.com/grupoortiz_mexico"} className="bg-orangeprimary rounded-full">
            <SlSocialInstagram className="text-whitesecondary text-[14vw] md:text-[4.5vw] lg:text-[3vw] p-3 md:p-2 lg:p-3 transition-transform duration-200 hover:scale-125" />
          </Link>
          <Link href={'https://www.youtube.com/@grupoortizmx'} className="bg-orangeprimary rounded-full">
          <PiYoutubeLogoThin className="text-whitesecondary text-[14vw] md:text-[4.5vw] lg:text-[3vw] p-3 md:p-2 lg:p-3 transition-transform duration-200 hover:scale-125" />
          </Link>
          <Link href={"https://www.linkedin.com/company/grupo-ortiz-mexico-pol%C3%ADmeros/"} className="bg-orangeprimary rounded-full">
            <SlSocialLinkedin className="text-whitesecondary text-[14vw] md:text-[4.5vw] lg:text-[3vw] p-3 md:p-2 lg:p-3 transition-transform duration-200 hover:scale-125" />
          </Link>
        </div>
          
        </div>
      </div>
      <div className="flex justify-center w-[100%] md:w-[60%] items-end">
        <Image
        alt="GO-workers"
        width={1080}
        height={720}
        src={'/assets/contactanos.jpg'}
        loading="eager"
        className="w-[100%]"
        ></Image>
      </div>
    </div>
  );
};

export default Contactmap;
