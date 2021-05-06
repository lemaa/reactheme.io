import React from "react";
import { Story, Meta } from "@storybook/react";
import { Footer } from "./index";
import { IProps } from "./Footer";

export default {
    component: Footer,
    title: "Modules / Footer",
} as Meta;

const Template: Story<IProps> = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: true,
    drawerWidth: 0,
    quickBarWidth: 0,
    children: <span>Footer Testing</span>,
};
