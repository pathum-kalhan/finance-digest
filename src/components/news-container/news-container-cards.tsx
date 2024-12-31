import { FC } from "react";
import { NewsCard } from "../news-card/news-card";

import { NewsListProps } from "./news-container.types";

export const NewsContainerCards: FC<NewsListProps> = (props) => {
  const { newsItems } = props;
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-8 sm:gap-x-6
     sm:mx-12
      "
    >
      {newsItems.map((newsItem) => (
        <NewsCard key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
};
