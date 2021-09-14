import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { DashboardProvider } from "@Context/index";
import { render } from "@Test/utils";
import { CalendarPage } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<CustomToolbar />", () => {
    render(
        <DashboardProvider>
            <CalendarPage />
        </DashboardProvider>
    );
});
