import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { DashboardProvider } from "@Context/index";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { CalendarPage } from "../../CalendarPage/index";

jest.useFakeTimers();
// let originalFetch: any;
// let global: { fetch: {} };

// beforeEach(() => {
//     global.fetch = jest.fn(() =>
//         Promise.resolve({
//             json: () =>
//                 Promise.resolve({
//                     value: "Testing something!",
//                 }),
//         })
//     );
// });

afterEach(() => {
    // global.fetch = originalFetch;
    cleanup();
});
jest.mock("react-apexcharts", () =>
    jest.fn(() => {
        return null;
    })
);
test("<AnalyticsPage />", () => {
    render(
        <DashboardProvider>
            <CalendarPage />
        </DashboardProvider>
    );
});
