import React from 'react'
import Image from 'next/image'
import { AiOutlineGlobal } from "react-icons/ai";

const IconCard = ({Icon, title, subtitle }) => {
  return (
          <div className="flex flex-row gap-2 md:gap-0 md:w-[47%]">
            <Icon className="text-orangeprimary text-[16vw] w-[30%] md:w-[20%] md:text-[5vw]"/>
            <div className="flex flex-col w-[70%]">
              <h4 className="text-graybg font-moisette-regular text-[4vw] leading-[4vw] md:text-[1.4vw] md:leading-[1.4vw]">{title}</h4>
              <p className="text-graybg font-SFPro text-[3vw] leading-[3vw] md:text-[1vw] md:leading-[1vw] w-[70%] pt-2">{subtitle}</p>
            </div>
          </div>
  )
}

export default IconCard