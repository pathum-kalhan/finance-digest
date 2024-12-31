import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import formatUnixTimestamp from "@/lib/formatDate";
import { NewsItem } from "./news-card.types";
import { NewsCardDetails } from "./news-card-details";
import { NewsCardImage } from "./news-card-image";

export const NewsCard: FC<NewsItem> = (newsItem) => {
  const { image, source, datetime, headline, url } = newsItem;
  return (
    <Link href={url} target="_blank" className="cursor-pointer">
      <div className="hidden sm:block p-4">
        <NewsCardImage image={image} alt={headline} />
        <NewsCardDetails
          source={source}
          datetime={formatUnixTimestamp(datetime)}
          headline={headline}
        />
      </div>
      <div className="sm:hidden flex items-start p-4">
        <div className="w-[100px]">
          <Image
            src={image}
            alt={headline}
            width={200}
            height={200}
            style={{ height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="flex-1 ml-4">
          <div className="font-normal text-xs uppercase text-white text-opacity-70 flex justify-between mb-2">
            <p>{source}</p>
            <p>{datetime}</p>
          </div>
          <p className="font-medium text-xl">{headline}</p>
        </div>
      </div>
    </Link>
  );
};
