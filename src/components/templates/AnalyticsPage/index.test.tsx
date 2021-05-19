import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { AnalyticsPage } from "./index";

afterEach(cleanup);
jest.useFakeTimers();
jest.mock("node-fetch");
jest.mock("react-apexcharts", () =>
    jest.fn(() => {
        return null;
    })
);

test("<AnalyticsPage />", () => {
    render(<AnalyticsPage />);
});
