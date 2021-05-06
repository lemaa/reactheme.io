import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { render } from "@Test/utils";
import { SettingCard } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<SettingCard />", () => {
    const settingItem = {
        display: true,
        position: "left",
        style: "fixed",
    };
    render(<SettingCard title="header" settingItem={settingItem} type="layout" />);
});
