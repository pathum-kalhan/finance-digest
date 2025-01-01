import React, { FC } from "react";
import { NewsItem } from "./news-card.types";
import Image from "next/image";
import Link from "next/link";

export const NewsCard: FC<NewsItem> = (newsItem) => {
  const { image, source, datetime, headline, url } = newsItem;
  return (
    <Link href={url} target="_blank">
      <div className="sm:block flex p-4">
        <div className="relative h-[100px] w-[100px] sm:h-[179px] sm:w-auto">
          <Image
            src={image}
            alt={headline}
            fill
            className="object-fill"
            sizes="(max-width: 640px) 33vw, 25vw"
            quality={100}
          />
        </div>
        <div className="flex-1 ml-4 sm:ml-0">
          <div className="font-normal text-xs uppercase text-white text-opacity-70 flex justify-between mb-2 sm:my-2">
            <p>{source}</p>
            <p>{datetime}</p>
          </div>
          <div>
            <p className="font-medium text-xl">{headline}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
