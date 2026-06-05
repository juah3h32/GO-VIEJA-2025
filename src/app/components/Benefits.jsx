"use client";
import React, { createContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const t = useTranslations("ser-distribuidor")
  return (
    <div className="bg-graybg text-whitesecondary p-6 py-16 flex flex-row relative justify-center items-center">
      <h3 className="text-[9vw] leading-[6vw] font-bold uppercase text-orangeprimary flex gap-0 flex-col font-morganite w-[40%]">
        {t("h3-1")}{" "}
        <span className="text-whitesecondary text-[7vw]">{t("h3-2")}</span>
      </h3>

      <span
          className="absolute transform h-[100%] rotate-[45deg] top-[-10vw] left-[6vw] border-r-[18px] xl:border-r-[26px] border-orangeprimary z-10 flex-grow ml-2"
          style={{ width: "30%" }}
        ></span>

      <Swiper spaceBetween={20} slidesPerView="auto" className="my-4 font-helony !w-[96%] clip-diagonal" loop={true} speed={1000} autoplay={{
  "delay": 0,
  "disableOnInteraction": false
}} modules={[Autoplay]}>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
          {t("benefit-1")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-2")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-3")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-4")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-5")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-1")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-2")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-3")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-4")}
        </SwiperSlide>
        <SwiperSlide className="bg-whitesecondary text-graybg !w-auto p-4 rounded-full text-center !text-[2.8vw] md:!text-[1.4vw]">
        {t("benefit-5")}
        </SwiperSlide>
        {/* Agrega más slides si es necesario */}
      </Swiper>
    </div>
  );
};

export default Benefits;
