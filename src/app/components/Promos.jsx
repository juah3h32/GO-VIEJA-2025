"use client";
import React, { useRef, useState } from "react";
import createContext from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/globals.css";
import { useTranslations } from "next-intl";
import Image from "next/image";



const Promos = () => {

  const t = useTranslations("Promos")

  const promos = [
    {
      id: 1,
      src: "/assets/promos/stretch.webp",
      titulo: "Stretch Film",
      descripcion: t("desc-1"),
      condiciones: t("cond-1"),
    },
    {
      id: 2,
      src: "/assets/promos/cuerda.webp",
      titulo: "Cuerda",
      descripcion: t("desc-2"),
      condiciones: t("cond-2"),
    },
    {
      id: 3,
      src: "/assets/promos/stretch.webp",
      titulo: "Stretch Film",
      descripcion: t("desc-1"),
      condiciones: t("cond-1"),
    },
    {
      id: 4,
      src: "/assets/promos/cuerda.webp",
      titulo: "Cuerda",
      descripcion: t("desc-2"),
      condiciones: t("cond-2"),
    },
  ];

  return (
    <div className="h-auto bg-graybg flex flex-col justify-center items-center relative w-full pt-[20vh] md:pb-[16vw] md:pt-[20vh]">
      <div className="flex flex-col items-center relative">
        <h3 className="font-morganite text-[12vw] text-orangeprimary z-10 ml-[-10vw] pb-[8vw]">
          {t("h1-1")}
        </h3>
        <span className="text-graybg font-morganite text-[26vw] text-stroke-1 md:text-stroke-3 stroke-[2px] z-[0] absolute top-0 left-0 translate-x-[18.9vw] translate-y-[-10vw]">
          GO
        </span>
      </div>

      {/* SWIPER */}

      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".arrow-right-promos",
            prevEl: ".arrow-left-promos",
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          style={{
            "--swiper-pagination-color": "#fb670b",
            "--swiper-pagination-bullet-inactive-color": "#262626",
            "--swiper-pagination-bullet-inactive-opacity": ".5",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Navigation]}
          className="mySwiper h-auto !w-[70%] !pb-[15vh] md:pb-[0vw]"
        >
          {promos.map((item) => (
            <SwiperSlide
              key={item.id}
              className={
                "text-orangeprimary h-[750px] bg-whitesecondary !flex rounded-3xl !flex-col justify-center items-center"
              }
            >
              <div
                className="h-[60%] w-full flex justify-center items-center rounded-t-3xl z-10"
              >
                <Image
                src={item.src}
                alt={item.titulo}
                width={700}
                height={200}
              />
              </div>

              

              <div className="w-full h-[40%] bg-orangeprimary rounded-b-3xl text-whitesecondary font-helony">
                <h2 className="font-morganite text-[18vw] lg:text-[8vw] uppercase">
                  {item.titulo}
                </h2>
                <p className="text-[4vw] lg:text-[1.2vw]">{item.descripcion}</p>
                <span className="text-[2vw] lg:text-[1vw] mt-auto text-graybg">
                  {item.condiciones}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="absolute arrow-right-promos translate-x-[88vw] translate-y-[-60vw] md:translate-x-[85vw] md:translate-y-[-47vw] lg:translate-x-[87vw] lg:translate-y-[-40vw] xl:translate-x-[88vw] xl:translate-y-[-19vw] z-[100]">
          <MdKeyboardArrowRight className="text-[10vw] lg:text-[6vw] text-orangeprimary" />
        </button>

        <button className="absolute arrow-left-promos translate-x-[3vw] translate-y-[-60vw] md:translate-x-[4vw] md:translate-y-[-47vw] lg:translate-x-[5vw] lg:translate-y-[-40vw] xl:translate-x-[5vw] xl:translate-y-[-19vw] z-[100]">
          <MdKeyboardArrowLeft className="text-[10vw] lg:text-[6vw] text-orangeprimary" />
        </button>
      </div>
    </div>
  );
};

export default Promos;
