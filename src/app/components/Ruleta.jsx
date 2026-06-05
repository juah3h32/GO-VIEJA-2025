"use client";
import React, { useRef, useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import createContext from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/globals.css";
import { useTranslations } from "next-intl";

export default function Ruleta() {
  const [rotation, setRotation] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  // const rotate = (direction) => {
  //   setRotation(
  //     (prevRotation) => prevRotation + (direction === "left" ? -90 : 90)
  //   );
  // };

  const rotate = (direction) => {
    setRotation(
      (prevRotation) => prevRotation + (direction === "left" ? -90 : 90)
    );
    // Actualizar el índice de la sección activa
    setActiveSection(
      (prevSection) =>
        (prevSection + (direction === "left" ? -1 : 1) + info.length) %
        info.length
    );
  };

  const t = useTranslations("About-page");

  //Info es de Ruleta Responsive

  const info = [
    {
      id: 1,
      src: "/assets/ruleta/24hrs_complete.png",
      text: t("ruleta-1"),
      size: "15vw",
      leading: "13vw",
    },
    {
      id: 2,
      src: "/assets/ruleta/25milton_complete.png",
      text: t("ruleta-2"),
      size: "15vw",
      leading: "10vw",
    },
    {
      id: 3,
      src: "/assets/ruleta/65years_complete.png",
      text: t("ruleta-3"),
      size: "19vw",
      leading: "12vw",
    },
    {
      id: 4,
      src: "/assets/ruleta/workers_complete.png",
      text: t("ruleta-4"),
      size: "19vw",
      leading: "12vw",
    },
  ];

  return (
    <div>
      <div className="hidden lg:flex relative circulo items-center justify-center md:h-[60vh] lg:h-[70vh] xl:h-[100vh] mt-[-10vw]">
        {/* Contenedor de la ruleta */}
        <div
          className="group relative w-[60vw] h-[60vw] rounded-full overflow-hidden transition-transform duration-700"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Sector 1 */}

          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className={`w-full h-full bg-bottom bg-contain bg-no-repeat rotate-90 translate-x-[35vw] transition-opacity duration-700 ${
                activeSection === 3
                  ? "bg-[url('/assets/ruleta/24hrs_complete.png')]"
                  : "bg-graybg"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-morganite text-[8vw] translate-y-[18vw] text-center leading-[6vw]">
                  {t("ruleta-big-1")} <br></br> 
                  <span className={`${
                    activeSection === 3 ? "text-graybg" : "text-orangeprimary"
                  }`}>{t("ruleta-big-1-2")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Sector 2 */}
          <div
            className="absolute top-0 left-0 w-full h-full clip-slice"
            style={{ transform: "rotate(90deg)" }}
          >
            <div
              className={`w-full h-full bg-center bg-contain bg-no-repeat rotate-90 translate-x-[15vw] ${
                activeSection === 2
                  ? "bg-[url('/assets/ruleta/25milton_complete.png')]"
                  : "bg-graybg"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center origin-center">
                <span className="text-white font-morganite text-[8vw] translate-y-[-2vw] leading-[5vw] text-center">
                  {t("ruleta-big-2")} <br></br>{" "}
                  <span className={`${
                    activeSection === 2 ? "text-graybg" : "text-orangeprimary"
                  }`}>
                    {t("ruleta-big-2-2")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Sector 3 */}
          <div
            className="absolute top-0 left-0 w-full h-full clip-slice"
            style={{ transform: "rotate(180deg)" }}
          >
            <div
              className={`w-full h-full bg-center bg-contain bg-no-repeat rotate-90 translate-x-[15vw] ${
                activeSection === 1
                  ? "bg-[url('/assets/ruleta/65years_complete.png')]"
                  : "bg-graybg"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-morganite text-[8vw] leading-[6vw] text-center translate-y-[-5vw]">
                  {t("ruleta-big-3")} <br></br>
                  <span className={`${
                    activeSection === 1 ? "text-graybg" : "text-orangeprimary"
                  }`}>
                    {t("ruleta-big-3-2")}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Sector 4 */}
          <div
            className="absolute top-0 left-0 w-full h-full clip-slice"
            style={{ transform: "rotate(270deg)" }}
          >
            <div
              className={
                activeSection === 0
                  ? "w-full h-full bg-center bg-contain bg-no-repeat bg-[url('/assets/ruleta/workers_complete.png')] rotate-90 translate-x-[15vw]"
                  : "w-full h-full bg-graybg bg-bottom bg-contain bg-no-repeat rotate-90 translate-x-[15vw]"
              }
            >
              <div className="absolute inset-0 flex flex-row items-center justify-center">
                <span className="text-white font-morganite text-[8vw] leading-[6vw] text-center translate-y-[-5vw]">
                  3000<br></br>
                  <span className={`${
                    activeSection === 0 ? "text-graybg" : "text-orangeprimary"
                  }`}>
                    {t("ruleta-big-4")}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de flechas para girar */}
        <button
          onClick={() => rotate("left")}
          className="absolute transform translate-x-[-15vw] translate-y-[-14vw] text-[4vw] text-orangeprimary z-10"
        >
          <IoIosArrowDropleftCircle className="text-white bg-orangeprimary rounded-full" />
        </button>
        <button
          onClick={() => rotate("right")}
          className="absolute text-[4vw] translate-x-[13vw] translate-y-[-14vw] text-orangeprimary z-10"
        >
          <IoIosArrowDroprightCircle className="text-white bg-orangeprimary rounded-full" />
        </button>
      </div>
      {/* Ruleta responsive */}
      <div className="flex lg:hidden justify-center items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={120}
          navigation={true}
          style={{
            "--swiper-pagination-color": "#fb670b",
            "--swiper-pagination-bullet-inactive-color": "#262626",
            "--swiper-pagination-bullet-inactive-opacity": ".5",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-navigation-size": "5vw",
            "--swiper-navigation-color": "#FFFFFF",
          }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper !h-[80vw] !w-[80vw]"
        >
          {info.map((info) => (
            <SwiperSlide
              key={info.id}
              className={
                "text-orangeprimary h-full w-full !bg-cover !bg-no-repeat bg-top !flex !flex-col rounded-full gap-0 md:gap-5 justify-start items-center px-10 py-10 sm:p-16"
              }
              style={{ backgroundImage: `url(${info.src})` }}
            >
              <h3
                className="sm:text-[14vw] sm:leading-[10vw] text-whitesecondary text-center p-4 mt-6 font-morganite w-[100%] sm:w-[70%]"
                style={{
                  fontSize: `${info.size}`,
                  lineHeight: `${info.leading}`,
                }}
              >
                {info.text}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
