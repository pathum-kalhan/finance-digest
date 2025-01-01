import { render, screen } from '@testing-library/react'
import { BlottLogo } from './blott-logo'

describe("BlottLogo", () => {
    it("should render", () => {
        render(<BlottLogo />);
        const logoElement = screen.getByRole("img", { alt: "Blott Logo" });
        expect(logoElement).toBeInTheDocument();
    });
});
