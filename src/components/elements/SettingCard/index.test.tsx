import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SettingCard } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<SettingCard />", () => {
    const settingItem = {
        display: true,
        position: "left",
        style: "fixed",
    };
    render(<SettingCard title="header" settingItem={settingItem} type="laout" />);
});
