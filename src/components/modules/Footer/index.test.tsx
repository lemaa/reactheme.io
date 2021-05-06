import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { Footer } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Footer />", () => {
    render(
        <Footer open drawerWidth={250} quickBarWidth={250}>
            <span>Footer Testing</span>
        </Footer>
    );
});
