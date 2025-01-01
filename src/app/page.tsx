import { NewsCardsList } from "@/components/news-cards-list/news-cards-list";
import getMarketNews from "@/lib/getMarketNews";

export const revalidate = 3600;

export default async function Home() {
  const data = await getMarketNews();
  return (
    <main>
      <NewsCardsList newsItems={data} />
    </main>
  );
}
