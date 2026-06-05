"use client";
import React from "react";
import { useRef, useState } from "react";
import createContext from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/app/globals.css";
import { MdFactory } from "react-icons/md";
import { useTranslations } from "next-intl";

const Datos = () => {
  const t = useTranslations("Data")
  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-4 grid-rows-5 gap-4 bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/assets/services/ARPILLAS.webp')] rounded-3xl h-auto p-12">
        <div className="col-span-2 row-span-5">
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[4vw] rounded-2xl md:rounded-none md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
              {t("data-1")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-2")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-3")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-4")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-5")}
            </span>
          </div>
        </div>
        <div className="col-span-2 row-span-5 col-start-3">
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[4vw] rounded-2xl md:rounded-none md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-6")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-7")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-8")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-9")}
            </span>
          </div>
          <div className="flex flex-row gap-1 w-full items-end mb-3">
            <div className="hidden md:flex flex-row text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 rounded-2xl md:rounded-none text-[4vw] md:text-[1.3vw] h-8 bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center md:justify-end flex-grow items-center mb-4 md:mb-1">
            {t("data-10")}
            </span>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className="flex md:hidden bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/assets/services/ARPILLAS.webp')] rounded-[7%] h-auto py-10 p-4 m-1">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          style={{
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#c3c3c3",
            "--swiper-pagination-bullet-inactive-opacity": ".5",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="w-full h-[60vw]">
          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
              {t("data-1")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-2")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-3")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-4")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-5")}
            </span>
          </div>
          
        </div>

          </SwiperSlide>

          <SwiperSlide>
          <div className="w-full">
          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-6")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              <MdFactory />
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-7")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
              
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-8")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-9")}
            </span>
          </div>

          <div className="flex flex-row gap-1 w-full items-center justify-center mb-3">
            <div className="flex flex-row justify-center items-center text-whitesecondary text-[7vw] md:text-[3.5vw] w-auto">
              <MdFactory />
            </div>
            <span className="py-1 px-1 text-[3.5vw] h-full bg-whitesecondary text-graybg font-helony w-[50%] flex justify-center flex-grow items-center">
            {t("data-10")}
            </span>
          </div>
          
        </div>
          
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Datos;
