import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Default } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<CustomToolbar />", () => {
    const handleClickMock = jest.fn();

    render(
        <Default open drawerwidth={240} onClick={handleClickMock} quickBarWidth={240}>
            <span>testinng children</span>
        </Default>
    );
});
