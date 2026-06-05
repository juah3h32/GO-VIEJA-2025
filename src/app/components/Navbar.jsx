"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslations } from "next-intl";
import { IoMdArrowDropdown } from "react-icons/io";
import LanguageIndicator from "./LanguageIndicator";




const Navbar = ({ color, locale }) => {
  const t = useTranslations("Navbar");
  const [nav, setNav] = useState(false);
  const [navAbout, setNavAbout] = useState(false);
  const [navCatalog, setNavCatalog] = useState(false);
  const [language, setLanguage] = useState(false);
  const [shadow, setShadow] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLanguage = (locale) => {
    const pathWithoutLocale = pathname.startsWith('/en') || pathname.startsWith('/es') || pathname.startsWith('/pt')
      ? pathname.slice(3) // Remueve '/es' o '/en' al inicio
      : pathname;

    const params = new URLSearchParams(searchParams);
    router.push(`/${locale}${pathWithoutLocale}?${params.toString()}`);
  };


  const handleNav = () => {
    setNav(!nav);
  };

  const handleLanguage = () => {
    setLanguage(!language);
  };

  const handleCatalog = () => {
    setNavCatalog(!navCatalog);
  };

  const handleAbout = () => {
    setNavAbout(!navAbout);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-[10vh] z-[100] shadow-xl backdrop-blur-xl px-2 md:flex md:justify-center"
          : "fixed w-full h-[20vh] z-[100] bg-amv-pri px-2 md:flex md:flex-row md:justify-center md:items-center"
      }
    >
      <div
        className={`flex justify-between items-center w-full h-full px-2 2xl:px-16 lg:max-w-[90%] ${
          color === "black" ? "!text-graybg" : "!text-whitesecondary"
        }`}
      >
        <ul className="hidden md:text-sm lg:gap-8 lg:flex gap-6 justify-between items-center w-[90%] md:w-[100%]">
          <li>
            <Image
              src={`${
                color === "black"
                  ? "/assets/logo_black.png"
                  : "/assets/logo_white.png"
              }`}
              alt="/"
              width="100"
              height="90"
              className={
                shadow
                  ? "lg:block w-[10%] md:w-[100%] scale-50 transition-transform duration-700"
                  : "lg:block w-[10%] md:w-[100%] transition-transform duration-700"
              }
            />
          </li>
          <Link href={`/${locale}`}>
            <li className="text-base transition-all duration-75 font-helony hover:text-orangeprimary active:text-orangeprimary">
              {t("home")}
            </li>
          </Link>

          <div className="relative group">
              <li className="flex flex-row text-base items-center transition-all duration-75 font-helony hover:text-orangeprimary active:text-orangeprimary cursor-default">
                {t("about")}
                <MdOutlineKeyboardArrowDown className="text-3xl" />
              </li>
            

            {/* Menú desplegable */}
            <ul className="absolute hidden hover:flex group-hover:block rounded-lg w-full flex-col">
              <Link href={`/${locale}/about`}>
                <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full mb-2 font-helony text-center w-full text-base">
                  {t("about")}
                </li>
              </Link>
              <Link href={`/${locale}/impacto-social`}>
                <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full font-helony text-center text-sm">
                  {t("social commitment")}
                </li>
              </Link>
            </ul>
          </div>

          <div className="relative group">
              <li className="flex flex-row text-base items-center transition-all duration-75 font-helony hover:text-orangeprimary active:text-orangeprimary cursor-default">
                {t("go catalog")}
                <MdOutlineKeyboardArrowDown className="text-3xl" />
              </li>
            

            {/* Menú desplegable */}
            <ul className="absolute hidden hover:flex group-hover:block rounded-lg w-full flex-col">
              <Link href={`/${locale}/catalogo`}>
                <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full mb-2 font-helony text-center w-full text-base">
                  {t("go catalog")}
                </li>
              </Link>
              <Link href={`/${locale}/promos`}>
                <li className="py-1 hover:bg-orangeprimary text-whitesecondary bg-gray-400 rounded-full font-helony text-center text-base">
                  {t("promos")}
                </li>
              </Link>
            </ul>
          </div>

          <Link href={`/${locale}/ser-distribuidor`}>
            <li className="text-base transition-all duration-75 font-helony hover:text-orangeprimary active:text-orangeprimary">
              {t("be distributor")}
            </li>
          </Link>

          <Link href={`/${locale}/contacto`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ease-out transition-all duration-100 bg-orangeprimary  px-6 py-2 border-solid rounded-2xl flex justify-center items-center hover:bg-graybg hover:border-orangeprimary hover:border"
            >
              <li className="text-center font-helony text-whitesecondary text-base transition-all duration-75 flex flex-row gap-3 items-center justify-center">
                {t("contact us")}
              </li>
            </motion.button>
          </Link>

          {/* Boton Lenguaje DESKTOP */}

          <LanguageIndicator locale={locale}/>
        </ul>

        {/* Imagen Responsive Nav */}

        <Image
          src={`${
            color === "black"
              ? "/assets/logo_black.png"
              : "/assets/logo_white.png"
          }`}
          alt="/"
          width="80"
          height="90"
          className={
            shadow
              ? "w-[15%] lg:hidden scale-50 transition-transform duration-700"
              : "w-[15%] lg:hidden transition-transform duration-700"
          }
        />

        {/* Boton Responsive */}

        <div className="lg:hidden flex flex-row items-center gap-4">
          
          <LanguageIndicator locale={locale}/>
          <AiOutlineMenu
            onClick={handleNav}
            size="25"
            className="text-orangeprimary cursor-pointer"
          />

          {/* <AiOutlineClose className='text-white'/> */}
        </div>
      </div>

      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-graybg/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-orangeprimary p-10 ease-in duration-500"
              : "fixed left-[-150%] sm:w-[60%] h-screen md:w-[45%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/logo_white.png"
                alt="/"
                width="100"
                height="90"
              />

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg border border-amv-sec p-3 cursor-pointer ml-5 text-whitesecondary text-lg"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 font-helony text-whitesecondary">
                {t("legend")}
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col text-amv-sec ">
            <ul className="font-light flex flex-col items-start">
              <Link href={`/${locale}`}>
                <li
                  className="py-4 text-lg text-whitesecondary font-helony font-medium"
                  onClick={() => setNav(false)}
                >
                  {t("home")}
                </li>
              </Link>

      
                <button
                  className="py-4 text-lg text-whitesecondary font-helony font-medium"
                  onClick={handleAbout}
                >
                  <li className="text-center font-helony text-md transition-all duration-75 flex flex-row gap-3 items-center justify-center">
                    {t("about")} <IoMdArrowDropdown  className={
                    navAbout
                      ? "transition-transform rotate-180 duration-150 ease"
                      : "transition-transform rotate-0 duration-150 ease"
                  }/>
                  </li>
                </button>

                {/* Menú desplegable */}
                <ul
                  className={
                    navAbout
                      ? "block rounded-lg w-full flex-col mt-1"
                      : "hidden rounded-lg w-full flex-col mt-1"
                  }
                >
                  <Link href={`/${locale}/about`}>
                    <li
                      className="pl-6 py-4 text-lg text-graybg font-helony font-medium"
                      onClick={() => setNav(false)}
                    >
                      {t("about")}
                    </li>
                  </Link>
                  <Link href={`/${locale}/impacto-social`}>
                    <li
                      className="pl-6 py-4 text-lg text-graybg font-helony font-medium"
                      onClick={() => setNav(false)}
                    >
                      {t("social commitment")}
                    </li>
                  </Link>
                </ul>

              {/* <Link href={`/${locale}/about`}>
                <li
                  className="py-4 text-lg text-whitesecondary font-helony font-medium"
                  onClick={() => setNav(false)}
                >
                  {t("about")}
                </li>
              </Link> */}


              <button
                  className="py-4 text-lg text-whitesecondary font-helony font-medium"
                  onClick={handleCatalog}
                >
                  <li className="text-center font-helony text-md transition-all duration-75 flex flex-row gap-3 items-center justify-center">
                  {t("go catalog")} <IoMdArrowDropdown  className={
                    navCatalog
                      ? "transition-transform rotate-180 duration-150 ease"
                      : "transition-transform rotate-0 duration-150 ease"
                  }/>
                  </li>
                </button>

                {/* Menú desplegable */}
                <ul
                  className={
                    navCatalog
                      ? "block rounded-lg w-full flex-col mt-1"
                      : "hidden rounded-lg w-full flex-col mt-1"
                  }
                >
                  <Link href={`/${locale}/catalogo`}>
                    <li
                      className="pl-6 py-4 text-lg text-graybg font-helony font-medium"
                      onClick={() => setNav(false)}
                    >
                      {t("go catalog")}
                    </li>
                  </Link>
                  <Link href={`/${locale}/promos`}>
                    <li
                      className="pl-6 py-4 text-lg text-graybg font-helony font-medium"
                      onClick={() => setNav(false)}
                    >
                      {t("promos")}
                    </li>
                  </Link>
                </ul>

              {/* <Link href={`/${locale}/catalog`}>
                <li
                  className="py-4 text-lg text-whitesecondary font-helony font-medium"
                  onClick={() => setNav(false)}
                >
                  {t("go catalog")}
                </li>
              </Link> */}
              <Link href={`/${locale}/ser-distribuidor`}>
                <li
                  className="py-4 text-lg text-whitesecondary font-helony font-medium"
                  onClick={() => setNav(false)}
                >
                  {t("be distributor")}
                </li>
              </Link>
              <Link href={`/${locale}/contacto`}>
                <li
                  className="py-4 text-lg text-whitesecondary font-helony font-medium"
                  onClick={() => setNav(false)}
                >
                  {t("contact us")}
                </li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-whitesecondary font-helony">
                {t("conect")}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg border border-whitesecondary p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                  <FaFacebook className="text-whitesecondary" />
                </div>
                <div className="rounded-full shadow-lg border border-whitesecondary p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                  <FaInstagram className="text-whitesecondary" />
                </div>
                <div className="rounded-full shadow-lg border border-whitesecondary p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                  <AiOutlineMail className="text-whitesecondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
