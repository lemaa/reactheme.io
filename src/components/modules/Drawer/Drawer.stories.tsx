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
    drawerAnchor: "left",
    handleDrawerToggle: () => {},
    ListDrawerItems: ListAppBarItems,
    headerTitle: "Jon Doe",
    subheaderenabled: true,
    prefetch: false,
};

export const QuickBar = Template.bind({});
QuickBar.args = {
    open: true,
    drawerWidth: 60,
    drawerClassName: "drawer-component",
    drawerVariant: "permanent",
    drawerAnchor: "right",
    handleDrawerToggle: () => {},
    ListDrawerItems: ListQuickBarItems,
    subheaderenabled: false,
    prefetch: false,
};
