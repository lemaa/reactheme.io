import React from "react";
import Home from "@Pages/index";
import { render } from "../utils";

describe("Home", () => {
    it("should render Home", () => {
        render(<Home />);
    });
});
