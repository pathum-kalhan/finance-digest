import { Title } from "./title";
import { render, screen } from '@testing-library/react'
describe("Title", () => {
  it("should render", () => {
    render(<Title />);
    const titleElement = screen.getByRole("heading", { name: "News" });
    expect(titleElement).toBeInTheDocument();
  });
});
