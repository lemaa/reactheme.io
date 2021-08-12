import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { EnhancedTable } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<EnhancedTable />", () => {
    render(<EnhancedTable data={[{ id: "1", text: "zzed" }]} tableTitle="dedede" checkboxRows />);
});
