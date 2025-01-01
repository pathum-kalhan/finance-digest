import { FC } from "react";
import Image from "next/image";
import Boltt from "./blott-logo.svg";
export const BolttLogo: FC = () => {
  return (
    <header
      className="text-center sm:pt-6 pt-[21px]
     pb-[22px] border-b border-white border-opacity-70 sm:border-none"
    >
      <div className="relative sm:h-12 h-[30px]">
        <Image
          src={Boltt}
          alt="boltt-logo"
          sizes="(max-width: 640px) 33vw, 25vw"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
};
