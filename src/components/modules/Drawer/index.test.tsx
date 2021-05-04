import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { cleanup } from "@testing-library/react";
import { DashboardOutlined, StoreOutlined, TodayOutlined } from "@material-ui/icons";
import { render } from "@Test/utils";
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
                    hrefLink: "/",
                },
                Calendar: {
                    text: "Calendar",
                    icon: <TodayOutlined fontSize="small" />,
                    hrefLink: "/calendar",
                },
                "E-Commerce": {
                    text: "E-Commerce",
                    icon: <StoreOutlined fontSize="small" />,
                    subtext: ["Products", "Product Detail", "New product", "Orders", "Order Detail"],
                    hrefLink: "/e-commerce",
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
            handleDrawerToggle={handleDrawerToggleMock}
            ListDrawerItems={ListDrawerItems}
            headerTitle="Jon Doe"
        />
    );
});
