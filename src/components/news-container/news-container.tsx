import React from "react";

import { NewsContainerCards } from "./news-container-cards";

import { NewsListProps } from "./news-container.types";

export default function NewsContainer(props: NewsListProps) {
  const { newsItems } = props;
  return (
    <section>
      <NewsContainerCards newsItems={newsItems} />
    </section>
  );
}
