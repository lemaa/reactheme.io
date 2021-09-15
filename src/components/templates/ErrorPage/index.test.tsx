import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { ErrorPage } from "./index";

jest.useFakeTimers();

afterEach(() => {
    cleanup();
});
jest.mock("react-apexcharts", () =>
    jest.fn(() => {
        return null;
    })
);
test("<ErrorPage />", () => {
    render(<ErrorPage code="344" message="TEST ERROR" />);
});
