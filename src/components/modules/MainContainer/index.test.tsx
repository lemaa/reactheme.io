import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Main } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Main />", () => {
    render(
        <Main>
            <div>this is a story of the main container</div>
        </Main>
    );
});
