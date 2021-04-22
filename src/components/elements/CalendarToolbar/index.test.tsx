import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { CustomToolbar } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<CustomToolbar />", () => {
    const handleNavigateMock = jest.fn();
    const handleViewMock = jest.fn();
    const views = ["month", "week", "day", "agenda"];
    render(<CustomToolbar label="February 2021" view="month" localizer="localizer" views={views} onNavigate={handleNavigateMock} onView={handleViewMock} />);
});
