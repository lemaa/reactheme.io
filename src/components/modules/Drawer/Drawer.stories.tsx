import React from "react";
import { Story, Meta } from "@storybook/react";
import { DashboardOutlined, StoreOutlined, TodayOutlined } from "@material-ui/icons";
import { Drawer } from "./index";
import { IProps } from "./Drawer";

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

export default {
    component: Drawer,
    title: "Modules / Drawer",
} as Meta;

const Template: Story<IProps> = args => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    drawerWidth: 250,
    drawerClassName: "drawer-component",
    drawerVariant: "permanent",
    drawerAnchor: "left",
    handleDrawerToggle: () => {},
    ListDrawerItems,
    headerTitle: "Jon Doe",
};
