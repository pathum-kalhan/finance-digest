import { FC } from "react";
import { NewsCard } from "../news-card/news-card";
import { NewsItem } from "../news-card/news-card.types";

type NewsCardsListProps = {
  newsItems: NewsItem[];
};

export const NewsCardsList: FC<NewsCardsListProps> = (props) => {
  const { newsItems } = props;

  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 sm:gap-y-8 sm:gap-x-6
      sm:mx-12 sm:mb-12"
    >
      {newsItems.map((newsItem) => (
        <NewsCard key={newsItem.id} {...newsItem} />
      ))}
    </section>
  );
};
