import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { HomePage } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<CustomToolbar />", () => {
    render(<HomePage />);
});
