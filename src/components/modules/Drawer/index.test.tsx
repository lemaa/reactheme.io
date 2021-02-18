import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { DashboardOutlined, StoreOutlined, TodayOutlined } from "@material-ui/icons";
import { Drawer } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Drawer />", () => {
    const handleDrawerToggleMock = jest.fn();
    const ListDrawerItems = [
        {
            applications: {
                dashboard: {
                    text: "dashboard",
                    icon: <DashboardOutlined fontSize="small" />,
                    subtext: ["Analytics", "project"],
                },
                Calendar: {
                    text: "Calendar",
                    icon: <TodayOutlined fontSize="small" />,
                },
                "E-Commerce": {
                    text: "E-Commerce",
                    icon: <StoreOutlined fontSize="small" />,
                    subtext: ["Products", "Product Detail", "New product", "Orders", "Order Detail"],
                },
            },
        },
    ];
    render(
        <Drawer
            open
            drawerWidth={250}
            drawerClassName="drawer-component"
            drawerVariant="permanent"
            drawerAnchor="left"
            handleDrawerToggle={handleDrawerToggleMock}
            ListDrawerItems={ListDrawerItems}
            headerTitle="Jon Doe"
        />
    );
});
