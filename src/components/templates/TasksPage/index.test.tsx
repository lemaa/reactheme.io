import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { TasksPage } from "./index";

jest.useFakeTimers();

afterEach(() => {
    cleanup();
});
test("<TasksPage />", () => {
    render(<TasksPage />);
});
