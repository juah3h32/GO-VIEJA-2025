import React from "react";
import Formulario from "./Formulario";
import { AiOutlinePhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FiAtSign } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";


const Contact = ({locale}) => {
  const t = useTranslations("ser-distribuidor")
  return (
      <div className="flex flex-col text-center w-full p-20 px-[10vw] md:px-[20vw] pt-[20vh]">
        <h2 className="font-morganite text-orangeprimary text-[20vw] leading-[16vw] md:text-[12vw] md:leading-[10vw]">
          {t("h2-1")} <br /> <span className="text-graybg">{t("h2-2")}</span>
        </h2>
        <div>
          <div className="rounded-xl bg-graybg p-4 md:p-8">
            <span className="font-helony text-[6vw] md:text-[2vw]">{t("form-title")}</span>
            <h3 className="uppercase text-whitesecondary font-morganite text-[11vw] md:text-[6vw]">
            {t("form-subtitle")}
            </h3>
            <Formulario locale={locale}/>
          </div>
        </div>
      </div>
  );
};

export default Contact;
