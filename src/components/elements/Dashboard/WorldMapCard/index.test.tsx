import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
// import { WorldMapCard } from "./index";
import { SimpleCard } from "../SimpleCard/index";

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
// const WMDatas = {
//     series: [
//         {
//             data: [138, 110, 100, 69, 58, 54, 43, 30],
//         },
//     ],
//     categories: [
//         {
//             name: "India",
//             coordinates: [78.6677428, 22.3511148],
//         },

//         {
//             name: "France",
//             coordinates: [1.8883335, 46.603354],
//         },
//         {
//             name: "South Africa",
//             coordinates: [24.991639, -28.8166236],
//         },
//         {
//             name: "China",
//             coordinates: [104.999927, 35.000074],
//         },
//         {
//             name: "United States",
//             coordinates: [-100.4458825, 39.7837304],
//         },
//         {
//             name: "Japan",
//             coordinates: [139.2394179, 36.5748441],
//         },
//         {
//             name: "Tunisia",
//             coordinates: [9.400138, 33.8439408],
//         },
//         {
//             name: "United Kingdom",
//             coordinates: [-3.2765753, 54.7023545],
//         },
//     ],
// };

jest.mock("react-apexcharts", () =>
    jest.fn(() => {
        return null;
    })
);
test("<WorldMapCard />", () => {
    render(<SimpleCard title="Congrats" description="you won" cardType="success" />);
});
