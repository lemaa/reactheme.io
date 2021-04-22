import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Header } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Header />", () => {
    const handleClickMock = jest.fn();
    render(<Header open drawerWidth={250} onClick={handleClickMock} quickBarWidth={250} />);
});
