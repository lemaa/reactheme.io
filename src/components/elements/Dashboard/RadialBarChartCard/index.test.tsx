import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { RadialBarChartCard } from "./index";

afterEach(cleanup);
jest.useFakeTimers();
const datas = {
    series: [
        {
            name: "visitors",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "pages view",
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ],
    categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
    ],
};

jest.mock("react-apexcharts", () =>
    jest.fn(() => {
        return null;
    })
);
test("<RadialBarChartCard />", () => {
    render(<RadialBarChartCard title="Visitors & Page views" data={datas} />);
});
