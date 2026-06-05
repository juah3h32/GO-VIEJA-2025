import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Map = () => {
  const t = useTranslations("Map")
  return (
    <div className="py-24 px-14 md:p-14 flex flex-col gap-7 md:flex-row justify-center items-center h-auto md:h-[100vh]">
      <div className="mt-[10vh] md:mt-[0vh] w-[100%] md:w-[49%] relative">
        <Image
          src="/assets/maps/mexico_map.png"
          width={"840"}
          height={"220"}
          alt="mexico-map"
        ></Image>
        <span className="absolute px-4 py-2 bg-graybg text-whitesecondary rounded-3xl w-[100%] md:w-[50%] font-helony leading-5">{t("span-1")}</span>
      </div>
      <div className="mt-[20vh] md:mt-[0vh] w-[100%] md:w-[49%] relative">
        <Image
          src="/assets/maps/latinamerica_map.png"
          width={"540"}
          height={"220"}
          alt="latinamerica-map"
        ></Image>
        <span className="absolute px-4 py-2 bg-graybg text-whitesecondary rounded-3xl w-[100%] md:w-[50%] font-helony leading-5 top-[100%] md:top-[50%] left-[0%] md:left-[50%]">{t("span-2")}</span>
      </div>
    </div>
  );
};

export default Map;
