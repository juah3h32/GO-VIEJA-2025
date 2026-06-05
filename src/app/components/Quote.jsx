import React from "react";
import {useTranslations} from 'next-intl';

const Quote = () => {
  const t = useTranslations("Quote")
  return (
    <div className="h-[50vh] flex flex-col bg-graybg justify-center items-center gap-0">
      <h3 className="font-morganite text-[16vw] lg:text-[12vw] text-whitesecondary relative">
        {t("Quote-1")} <span className="font-morganiteitalic text-orangeprimary relative top-[28%] left-[-8%]">{t("Quote-2")}</span>
      </h3>
    </div>
  );
};

export default Quote;
