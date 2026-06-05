import React from "react";
import { useTranslations } from "next-intl";

const AvisoPrivacidad = () => {
    const t = useTranslations("AvisoPriv")
  return (
    <div className="flex flex-col bg-graybg justify-center items-center p-8 pt-[22vh] md:pt-[23vh] md:p-24">
      <h1 className="text-[15vw] md:text-[10vw] font-morganite text-whitesecondary uppercase">
      {t("h1-1")} <span className="text-orangeprimary">{t("h1-2")}</span>
      </h1>
      <p className="md:text-[1.5vw] text-whitesecondary font-helony text-[3vw]">
      {t("p1")}
        <br></br>
        <br></br>
        {t("p2")}
        <br></br>
        <br></br>
        <span className="text-orangeprimary">
        {t("sectionI.title")}</span> 
        <br /><br />
        {t("sectionI.content")}
        <br /><br />
        <span className="text-orangeprimary">
        {t("sectionII.title")}</span> 
        <br /><br />
        {t("sectionII.content")}
        <br /><br />
        <span className="text-orangeprimary">{t("sectionIII.title")}</span> 
        <br /><br />
        {t("sectionII.content")}
        <br /><br />
        <span className="text-orangeprimary">{t("sectionIV.title")}</span>
        <br /><br />
        {t("sectionIV.content")}
        <br /><br />
        <span className="text-orangeprimary">{t("sectionV.title")}</span>
        <br /><br />
        {t("sectionV.content")}
        <br /><br />
        <span className="text-orangeprimary">{t("sectionVI.title")}</span>
        <br /><br /> 
        {t("sectionVI.content")}
        <br /><br />
        <span className="text-orangeprimary">{t("sectionVII.title")}</span>
        <br /><br />
        {t("sectionVII.content")}
        <br /><br />
        <span className="text-orangeprimary">{t("sectionVIII.title")}</span>
        <br /><br />
        {t("sectionVIII.content")}
        <br /><br />
        <span className="text-orangeprimary">{t("sectionIX.title")}</span>
        <br /><br />
        {t("sectionIX.content")}
        <br /><br />
        {t("sectionIX.content-2")}
      </p>
    </div>
  );
};

export default AvisoPrivacidad;
