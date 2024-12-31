import NewsContainer from "@/components/news-container/news-container";
import getMarketNews from "@/lib/getMarketNews";

export const revalidate = 3600;

export default async function Home() {
  const data = await getMarketNews();
  return (
    <main>
      <NewsContainer newsItems={data} />
    </main>
  );
}
