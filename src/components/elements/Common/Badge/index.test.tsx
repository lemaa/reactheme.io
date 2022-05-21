import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { Badge } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Badge />", () => {
    const wrapper = render(<Badge text="testing badge" bgColor="#cccccc" textColor="#ffffff" />);
    const expectedBgColor = { "background-color": "rgb(204, 204, 204)" };

    expect(wrapper.getByText("testing badge")).toBeInTheDocument();
    expect(wrapper.baseElement.querySelector("span")).toHaveStyle(expectedBgColor);
});
