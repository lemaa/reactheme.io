import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { CustomToolbar } from "./index";

afterEach(cleanup);

describe("<CustomToolbar />", () => {
    it("should render with all propreties", async () => {
        const handleNavigateMock = jest.fn();
        const handleViewMock = jest.fn();
        const views = ["month", "week", "day", "agenda"];
        const wrapper = render(<CustomToolbar label="February 2021" view="month" localizer="localizer" views={views} onNavigate={handleNavigateMock} onView={handleViewMock} />);

        expect(wrapper.getByText("February 2021")).toBeInTheDocument();
        expect(wrapper.getByTestId("navigation-next-button")).toBeInTheDocument();
    });
});
