import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";

const Footer = ({locale}) => {
  const t = useTranslations("Footer")
  return (
    <div>
      <footer className="bg-black font-helony p-8">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex justify-between md:justify-left gap-8">
            <div className="mb-6 md:mb-0 flex flex-col w-[100%] md:w-[40%] gap-2 md:gap-8">
              <Link href="" className="flex items-center">
                <span className="self-center text-3xl font-semibold whitespace-nowrap font-helony text-orangeprimary">
                  Grupo Ortiz®
                </span>
                
              </Link>
              <ul className="text-gray-500 font-medium flex flex-col">
                  <li className="mb-2 md:mb-4">
                    <Link href="mailto:atencionacliente@grupo-ortiz.com" className="hover:underline text-whitesecondary">
                      atencionacliente@grupo-ortiz.com
                    </Link>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <Link
                      href="tel:+524432072593"
                      className="hover:underline text-whitesecondary"
                    >
                      44-32-07-25-93
                    </Link>
                  </li>
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-8 sm:gap-14 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 font-helony text-md font-semibold text-orangeprimary ">
                  Quiénes somos
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-2 md:mb-4">
                    <Link href={`/${locale}/about`} className="hover:underline text-whitesecondary">
                      {t("acerca de")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/impacto-social`} 
                      className="hover:underline text-whitesecondary"
                    >
                      {t("responsabilidad")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link className="mb-6 font-semibold text-md text-orangeprimary" href={'tel:443 207 2593'}>
                  {t("att-client")}
                </Link>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-2 mt-6 md:mb-4">
                    <Link
                      href={`/${locale}/ser-distribuidor`} 
                      className="hover:underline text-whitesecondary"
                    >
                      {t("ser-dist")}
                    </Link>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <Link
                      href={`/${locale}/catalogo`}
                      className="hover:underline text-whitesecondary"
                    >
                      {t("catalog")}
                    </Link>
                  </li>
                  <li className="mb-2 md:mb-4">
                    <Link
                      href={`/${locale}/promos`}
                      className="hover:underline text-whitesecondary"
                    >
                      {t("promos")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-row md:justify-end gap-4 text-2xl">
              <Link href={"https://www.instagram.com/grupoortiz_mexico?igsh=dWJtbHhrN3A2d254"}><FaInstagram className="hover:text-orangeprimary hover:cursor-pointer hover:scale-105 transition-transform duration-200"/></Link>
              <Link href={"https://www.facebook.com/profile.php?id=61559817857366"}><FaFacebook className="hover:text-orangeprimary hover:cursor-pointer hover:scale-105 transition-transform duration-200"/></Link>
              <Link href={"https://www.linkedin.com/company/grupo-ortiz-mexico-polímeros/"}><FaLinkedin className="hover:text-orangeprimary hover:cursor-pointer hover:scale-105 transition-transform duration-200"/></Link>
              <Link href={"https://www.youtube.com/@grupoortizmx"}><FaYoutube className="hover:text-orangeprimary hover:cursor-pointer hover:scale-105 transition-transform duration-200"/></Link>
              

                
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center sm:items-start sm:justify-between">
            <span className="text-sm text-whitesecondary text-center md:text-center dark:text-gray-400">
            2024 Grupo Ortiz, SA. de CV. {t("reserved")}
            </span>
            <div className="flex flex-row w-[70%] md:w-[38%] mt-4 justify-center md:justify-end sm:mt-0">
             <Link href={`/${locale}/avisopriv`} className="hover:text-orangeprimary text-center">{t("privacy")}</Link>
            
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
