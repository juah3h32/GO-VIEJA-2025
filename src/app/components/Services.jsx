"use client";
import { React, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../app/globals.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Services = ({ locale }) => {
  const [buttonType, setButtonType] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(`/${locale}/api/location`);
        if (!response.ok) {
          throw new Error("Error al obtener la ubicación");
        }

        const data = await response.json();
        console.log("Respuesta API:", data); // Verifica la respuesta
        const latitud = parseFloat(data.loc?.split(":")[1]) || 0;
        console.log("Latitud:", latitud);

        // Aquí se actualiza el estado
        setButtonType(latitud > 22 ? "norte" : "sur");
      } catch (error) {
        console.error("Error en fetchLocation:", error);
      }
    };

    fetchLocation();
  }, [locale]); // Dependencia `locale` asegura que se ejecute al cambiar el idioma

  // Observa cambios de buttonType después de que cambie
  useEffect(() => {
    console.log("Tipo de botón actualizado:", buttonType);
  }, [buttonType]);

  const t = useTranslations("Services");

  const items = [
    {
      id: 1,
      src: "/assets/services/ARPILLAS.webp",
      titulo: t("arpillas"),
      whatsapp: "https://wa.link/8320qs",
      boton: t("contact us"),
    },
    {
      id: 2,
      src: "/assets/services/BOLSA.webp",
      titulo: t("bolsa"),
      whatsapp: "",
      boton: t("prox"),
    },
    {
      id: 3,
      src: "/assets/services/CUERDA.webp",
      titulo: t("cuerdas"),
      whatsapp: "https://wa.link/3e3spg",
      boton: t("contact us"),
    },
    {
      id: 4,
      src: "/assets/services/DESECHABLES.webp",
      titulo: t("deshechables"),
      whatsapp: "",
      boton: t("prox"),
    },
    {
      id: 5,
      src: "/assets/services/ESQUINEROS.webp",
      titulo: t("esquineros"),
      whatsapp: "https://wa.link/rbj3nw",
      boton: t("contact us"),
    },
    {
      id: 6,
      src: "/assets/services/FLEJE.webp",
      titulo: t("fleje"),
      whatsapp: "",
      boton: t("prox"),
    },
    {
      id: 7,
      src: "/assets/services/FLEXIBLES.webp",
      titulo: t("flexibles"),
      whatsapp: "https://wa.link/wjpx8h",
      boton: t("contact us"),
    },
    {
      id: 8,
      src: "/assets/services/RAFIA.webp",
      titulo: t("rafia"),
      whatsapp: "https://wa.link/8gqsyu",
      boton: t("contact us"),
    },
    {
      id: 9,
      src: "/assets/services/SACOS.webp",
      titulo: t("sacos"),
      whatsapp: "https://wa.link/s07nj6",
      boton: t("contact us"),
    },
    {
      id: 10,
      src: "/assets/services/STRETCH.webp",
      titulo: t("stretch"),
      whatsapp: "https://wa.link/rbj3nw",
      whatsapp2: "https://wa.link/jw1c1h",
      boton: t("contact us"),
      boton2: t("contact us"),
    },
    {
      id: 11,
      src: "/assets/services/flete.png",
      titulo: t("flete"),
      whatsapp: "https://wa.link/21d2az",
      boton: t("contact us"),
    },
  ];

  return (
    <div className="h-[65vh] px-4 py-6 md:p-9 bg-whitesecondary">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        style={{
          "--swiper-pagination-color": "#fb670b",
          "--swiper-pagination-bullet-inactive-color": "#262626",
          "--swiper-pagination-bullet-inactive-opacity": ".5",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        modules={[Pagination]}
        className="mySwiper h-[90%]"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="text-orangeprimary !h-[50vh] w-[100%] !bg-cover !bg-no-repeat !flex !flex-col gap-0 md:gap-5 justify-center items-center"
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <h3 className="text-[8rem] leading-[6rem] text-whitesecondary text-center p-4 mt-6 font-morganite uppercase">
              {item.titulo}
            </h3>
            {item.boton2 ? (
              /* Si tiene dos botones, elige según el tipo */
              buttonType === "norte" ? (
                <Link
                  href={item.whatsapp2}
                  className="py-2 px-4 text-sm text-graybg bg-whitesecondary mt-2 md:mt-3 rounded-2xl font-helony hover:scale-110 transition-transform duration-150"
                  target="_blank"
                >
                  {item.boton2}
                </Link>
              ) : buttonType === "sur" ? (
                <Link
                  href={item.whatsapp}
                  className="py-2 px-4 text-sm text-graybg bg-whitesecondary mt-2 md:mt-3 rounded-2xl font-helony hover:scale-110 transition-transform duration-150"
                  target="_blank"
                >
                  {item.boton}
                </Link>
              ) : null
            ) : (
              /* Si solo tiene un botón, renderiza ese */
              <Link
                href={item.whatsapp}
                className="py-2 px-4 text-sm text-graybg bg-whitesecondary mt-2 md:mt-3 rounded-2xl font-helony hover:scale-110 transition-transform duration-150"
                target="_blank"
              >
                {item.boton}
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
