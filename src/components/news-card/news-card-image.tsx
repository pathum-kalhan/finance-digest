import Image from "next/image";
import { FC } from "react";

type NewsCardImageProps = {
  image: string;
  alt: string;
};

export const NewsCardImage: FC<NewsCardImageProps> = (props) => {
  const { image, alt } = props;
  /* Here used objectFit="cover" over objectFit="contain" by choice.
   Can change this to contain by design decision by filling empty space with blur effect
   */
  return (
    <div style={{ height: "179px", position: "relative" }}>
      <Image
        src={image}
        alt={alt}
        style={{ objectFit: "cover" }}
        layout="fill"
      />
    </div>
  );
};
