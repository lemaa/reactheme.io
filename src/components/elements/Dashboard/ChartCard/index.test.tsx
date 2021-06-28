import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { ChartCard } from "./index";

afterEach(cleanup);
jest.useFakeTimers();
const datas = [
    {
        name: "STOCK ABC",
        data: [31, 50, 40, 28, 90, 51, 42, 96, 90],
    },
];

jest.mock("react-apexcharts", () =>
    jest.fn(() => {
        return null;
    })
);
test("<ChartCard />", () => {
    render(
        <ChartCard title="38.4k" description="Orders Received" data={datas} icon="received.svg" srcIcon="static/images/common" badgeType="success" badgeText="+ 200 new data" />
    );
});
