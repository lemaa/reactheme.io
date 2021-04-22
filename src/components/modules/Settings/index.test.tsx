import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Settings } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Settings />", () => {
    render(<Settings />);
});
