import { FC } from "react";
import Image from "next/image";
import Blott from "./blott.svg";
export const BlottLogo: FC = () => {
  return (
    <header
      className="text-center sm:pt-6 pt-[21px]
     pb-[22px] border-b border-white border-opacity-70 sm:border-none sm:pb-0"
    >
      <div className="relative sm:h-12 h-[30px]">
        <Image
          src={Blott}
          alt="boltt-logo"
          sizes="(max-width: 640px) 33vw, 25vw"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
};
