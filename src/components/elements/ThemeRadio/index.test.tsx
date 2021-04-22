import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { ThemeRadio } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<ThemeRadio />", () => {
    render(<ThemeRadio PrimaryColor="#ffebee" SecondaryColor="#bbdefb" value="default" />);
});
