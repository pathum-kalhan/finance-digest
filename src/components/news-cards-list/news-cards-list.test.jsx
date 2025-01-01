import { render, screen } from "@testing-library/react";
import { NewsCardsList } from "./news-cards-list";

const news = [
    {
        datetime: 1735237244,
        headline:
            "Meta gains for a third straight year depend on things the company can and can't control",
        id: 7436980,
        image:
            "https://image.cnbcfm.com/api/v1/image/108043096-1727989603915-108043096-1727989387172-gettyimages-2173576388-20090101240925-99-518694.jpeg?v=1734538105&w=1920&h=1080",
        source: "CNBC",
        url: "https://www.cnbc.com/2024/12/26/meta-gains-for-another-year-depend-on-costs-and-ai-as-well-as-trump.html",
    },
    {
        datetime: 1735239180,
        headline:
            "‘Santa Claus rally’ begins — but will the stock market avoid a ‘Grinch pinch’?",
        id: 7436981,
        image:
            "https://static2.finnhub.io/file/publicdatany/finnhubimage/market_watch_logo.png",

        source: "MarketWatch",

        url: "https://www.marketwatch.com/story/santa-claus-rally-begins-but-will-the-stock-market-avoid-a-grinch-pinch-b00cd0bb",
    },
];

describe("NewsCardsList", () => {
    it("renders a list of news cards", () => {
        render(<NewsCardsList newsItems={news} />);
        const newsCards = screen.getAllByRole("link");
        expect(newsCards).toHaveLength(2);
    });
});
