import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { SimpleCard } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<SimpleCard />", () => {
    render(<SimpleCard title="Congrats" description="you won" cardType="success" />);
});
