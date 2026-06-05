import Catalogos from "@/app/components/Catalogos";
import Navbar from "@/app/components/Navbar";
import React from "react";


export default async function page({ children, params }) {
  const { locale } = await params;
  return (
    <div>
      <Navbar color={"black"} locale={locale} />
      <Catalogos/>
    </div>
  );
}
