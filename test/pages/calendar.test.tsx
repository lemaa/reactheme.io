import React from "react";
import Calendar from "@Pages/calendar";
import { render } from "../utils";

describe("Home", () => {
    it("should render Calendar", () => {
        render(<Calendar />);
    });
});
