import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { FelicitationsCard } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<FelicitationsCard />", () => {
    render(<FelicitationsCard title="Congrats" description="you won" cardType="success" />);
});
