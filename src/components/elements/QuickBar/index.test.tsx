import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { DashboardOutlined, StoreOutlined, TodayOutlined } from "@material-ui/icons";
import { QuickBar } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<QuickBar />", () => {
    const ListQuickBarItems = [
        {
            quickbar: {
                todolist: {
                    title: "To-do list",
                    icon: <DashboardOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                },
                notes: {
                    title: "Notes",
                    icon: <TodayOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                },
                setting: {
                    title: "Setting",
                    icon: <StoreOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                },
            },
        },
    ];
    render(<QuickBar qbWidth={250} qbClassName="drawer-component" qbAnchor="left" ListQbItems={ListQuickBarItems} />);
});
