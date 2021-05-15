import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { ContentHeader } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<ContentHeader />", () => {
    const handleOnFilterClickMock = jest.fn();
    const handleonrefreshClickMock = jest.fn();

    render(
        <ContentHeader
            pathName="Dashboard"
            filterButton
            refreshButton
            customButton="<button>Button</button>"
            OnFilterClick={handleOnFilterClickMock}
            onrefreshClick={handleonrefreshClickMock}
        />
    );
});
