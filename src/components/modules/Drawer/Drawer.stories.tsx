import React from "react";
import { Story, Meta } from "@storybook/react";
import { DashboardOutlined, StoreOutlined, TodayOutlined } from "@material-ui/icons";
import { Drawer } from "./index";
import { IProps } from "./Drawer";

const ListAppBarItems = [
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

export default {
    component: Drawer,
    title: "Modules / Drawer",
} as Meta;

const Template: Story<IProps> = args => <Drawer {...args} />;

export const appBar = Template.bind({});
appBar.args = {
    open: true,
    drawerWidth: 250,
    drawerClassName: "drawer-component",
    drawerVariant: "permanent",
    handleDrawerToggle: () => {},
    ListDrawerItems: ListAppBarItems,
    headerTitle: "Jon Doe",
    prefetch: false,
};
