import { render, screen } from '@testing-library/react'
import { NewsCard } from './news-card'

const news = {
    datetime: 1735237244,
    headline: "Meta gains for a third straight year depend on things the company can and can't control",
    id: 7436980,
    image: "https://image.cnbcfm.com/api/v1/image/108043096-1727989603915-108043096-1727989387172-gettyimages-2173576388-20090101240925-99-518694.jpeg?v=1734538105&w=1920&h=1080",
    source: "CNBC",
    url: "https://www.cnbc.com/2024/12/26/meta-gains-for-another-year-depend-on-costs-and-ai-as-well-as-trump.html"
}

describe("NewsCard", () => {
    it("should render", () => {
        render(<NewsCard {...news} />);
        const newsCardElement = screen.getByRole("link");

        expect(newsCardElement).toBeInTheDocument();
        expect(newsCardElement).toHaveAttribute("href", news.url);
        expect(newsCardElement).toHaveAttribute("target", "_blank");

        const imageElement = screen.getByRole("img");
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute("alt", news.headline);

        const headlineElement = screen.getByText(news.headline);
        expect(headlineElement).toBeInTheDocument();

        const sourceElement = screen.getByText(news.source);
        expect(sourceElement).toBeInTheDocument();

        const dateElement = screen.getByText("26 December 2024");
        expect(dateElement).toBeInTheDocument();

    });
}
);