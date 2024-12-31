// eslint-disable-next-line @typescript-eslint/no-require-imports
const finnhub = require("finnhub");
import { NewsItem } from "@/components/news-card/news-card.types";

const api_key = finnhub.ApiClient.instance.authentications["api_key"];

api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

type FinnhubError = {
  message: string;
  status: number;
};

export default function getMarketNews() {
  return new Promise<NewsItem[]>((resolve, reject) => {
    finnhubClient.marketNews(
      "general",
      {},
      (error: FinnhubError | null, data: NewsItem[]) => {
        if (error) {
          reject(error);
        }
        const results = data.map((item) => ({ ...item }));
        resolve(results);
      }
    );
  });
}
