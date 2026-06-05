"use client";
import React, { useRef, createContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/pagination";
import "@/app/css/impacto.css";
import Image from "next/image";



const ImpactoSocial = () => {
  const t = useTranslations("Impacto-social");
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    {
      id: 1,
      src: "/assets/impacto/hogar.webp",
      title: t("inic-1"),
      alt: "casa hogar",
      p: t("p-1"),
    },
    {
      id: 2,
      src: "/assets/impacto/cero.webp",
      title: t("inic-2"),
      alt: "cero impacto",
      p: t("p-2"),
    },
    {
      id: 3,
      src: "/assets/impacto/composta.webp",
      title: t("inic-3"),
      alt: "compostables",
      p: t("p-3"),
    },
    {
      id: 4,
      src: "/assets/impacto/gifts.webp",
      title: t("inic-4"),
      alt: "regalos",
      p: t("p-4"),
    },
    {
      id: 5,
      src: "/assets/impacto/woman.webp",
      title: t("inic-5"),
      alt: "mujeres",
      p: t("p-5"),
    },
    {
      id: 6,
      src: "/assets/impacto/reos.webp",
      title: t("inic-6"),
      alt: "reintegración de reos",
      p: t("p-6"),
    },
    {
      id: 7,
      src: "/assets/impacto/despensas.webp",
      title: t("inic-7"),
      alt: "despensas",
      p: t("p-7"),
    },
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <div className="bg-graybg flex flex-col h-auto pt-48">
      <div className="w-[100%] py-10 flex flex-col justify-center items-center px-[10vw]">
        <h2 className="text-center font-morganite text-[20vw] leading-[18vw] md:text-[14vw] md:leading-[12vw] lg:text-[10vw] lg:leading-[8vw]">
          {t("h2-1")} <span className="text-orangeprimary">{t("h2-2")}</span>
        </h2>
        <p className="text-center text-[3.5vw] md:text-[2.2vw] lg:text-[1.2vw] font-helony font-light w-[100%] lg:w-[75%]">
          {t("span")}
        </p>
      </div>
      <div className="w-[100%] pt-10 px-0 lg:pl-16 xl:pl-16">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        
          spaceBetween={10}
          pagination={pagination}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 25,
            },
          }}
          loop={true}
          style={{
            "--swiper-pagination-color": "#fb670b",
            "--swiper-pagination-bullet-inactive-color": "#f2f1ec",
            "--swiper-pagination-bullet-inactive-opacity": ".8",
            "--swiper-pagination-bullet-border-radius": "0px",
            "--swiper-pagination-bullet-horizontal-gap": "10px",
          }}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className="mySwiper-Impacto"
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        >
          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              className={
                "text-orangeprimary !h-[100%] !w-full md:!w-full lg:!w-[80%] mb-10 sm:mb-16 lg:mb-3"
              }
            >
              <div className="flex flex-col-reverse lg:flex-row overflow-visible pt-10 md:pt-20 lg:pt-0">
                <div
                  className={`${
                    currentSlide === item.id - 1
                      ? "flex flex-col gap-2 w-full lg:w-[40%] justify-center lg:justify-end items-start py-12 px-14 sm:px-20 md:px-28 lg:px-0 transition-opacity opacity-100 duration-900"
                      : "hidden flex-col gap-2 w-full lg:w-[40%] justify-center lg:justify-end items-start py-12 px-14 sm:px-20 md:px-28 lg:px-0 transition-opacity opacity-0 duration-900"
                  }`}
                >
                  <h3 className="font-rolide text-left text-whitesecondary text-[4.8vw] leading-[4.6vw] lg:text-[1.8vw] lg:leading-[1.6vw] uppercase">
                    {item.title}
                  </h3>
                  <p className="font-helony text-left text-[3.5vw] lg:text-[1vw] text-whitesecondary w-[90%]">
                    {item.p}
                  </p>
                </div>

                <div className="relative px-0 lg:px-0 py-[8vw] lg:py-[5vw] w-[100%] lg:w-[70%]">
                  <span
                    className={`${
                      currentSlide === item.id - 1
                        ? "font-helony absolute -z-10 top-[-25%] left-[30%] lg:top-[-5%] lg:left-[-1%] text-[30vw] lg:text-[8vw] text-orangeprimary opacity-100 transition-all duration-700 translate-x-[0%] scale-100"
                        : "font-helony absolute -z-10 top-[-25%] left-[30%] lg:top-[-5%] lg:left-[-1%] text-[30vw] lg:text-[8vw] text-orangeprimary opacity-0 transition-all duration-700 translate-x-[100%] scale-50"
                    }`}
                  >
                    0{item.id}
                  </span>
                  <Image
                    src={`${item.src}`}
                    width={1024}
                    height={800}
                    alt={`${item.alt}`}
                    className={`${currentSlide === item.id - 1 ? "w-full h-full scale-100 transition-all duration-700":"w-[93%] h-full transition-all duration-700 scale-90"}`}
                    loading="eager"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImpactoSocial;
