import { FC } from "react";
import Image from "next/image";
export const Header: FC = () => {
  return (
    <header
      className="text-center sm:pt-6 pt-[21px]
     pb-[22px] border-b border-white border-opacity-70 sm:border-none"
    >
      <div className="relative sm:h-12 h-[30px]">
        <Image
          src="/blott-logo.svg"
          alt="boltt-logo"
          style={{
            objectFit: "contain",
          }}
          fill
        />
      </div>
    </header>
  );
};
