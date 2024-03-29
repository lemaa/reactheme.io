import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { DashboardOutlined, StoreOutlined, TodayOutlined } from "@material-ui/icons";
import { render } from "@Test/utils";
import { QuickBar } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<QuickBar />", () => {
    const ListQuickBarItems = [
        {
            todolist: {
                title: "To-do list",
                icon: <DashboardOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                component: (
                    <>
                        <div>To-do list</div>
                    </>
                ),
            },
            notes: {
                title: "Notes",
                icon: <TodayOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                component: (
                    <>
                        <div>To-do list</div>
                    </>
                ),
            },
            setting: {
                title: "Setting",
                icon: <StoreOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                component: (
                    <>
                        <div>To-do list</div>
                    </>
                ),
            },
        },
    ];

    render(<QuickBar qbWidth={250} qbClassName="drawer-component" ListQbItems={ListQuickBarItems} />);
});
