import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { ContactsPage } from "./index";

jest.useFakeTimers();

afterEach(() => {
    cleanup();
});
jest.mock("react-apexcharts", () =>
    jest.fn(() => {
        return null;
    })
);
test("<ContactsPage />", () => {
    render(<ContactsPage />);
});
