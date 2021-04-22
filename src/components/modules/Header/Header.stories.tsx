import React from "react";
import { Story, Meta } from "@storybook/react";
import { Header } from "./index";
import { IProps } from "./Header";

export default {
    component: Header,
    title: "Modules / Header",
} as Meta;

const Template: Story<IProps> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    drawerWidth: 0,
    onClick: () => {},
    quickBarWidth: 0,
};
