import React from "react";
import Home from "@Pages/index";
import { render, screen } from "../utils";

describe("Home", () => {
    it("should render the heading", () => {
        render(<Home />);

        const heading = screen.getByText(/Testing Next.js With Jest and React Testing Library/i);

        expect(heading).toBeInTheDocument();
    });
});
