import React from "react";
import { Story, Meta } from "@storybook/react";
import { DashboardOutlined, StoreOutlined, TodayOutlined } from "@material-ui/icons";
import { QuickBar } from "./index";
import { IProps } from "./QuickBar";

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
    component: QuickBar,
    title: "Elements / QuickBar",
} as Meta;

const Template: Story<IProps> = args => <QuickBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    qbWidth: 60,
    qbClassName: "drawer-component",
    qbAnchor: "right",
    ListQbItems: ListQuickBarItems,
};