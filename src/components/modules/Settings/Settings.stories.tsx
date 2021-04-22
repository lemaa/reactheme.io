import React from "react";
import { Story, Meta } from "@storybook/react";
import { Settings } from "./index";
import { IProps } from "./Settings";

export default {
    component: Settings,
    title: "Modules / Settings",
} as Meta;

const Template: Story<IProps> = args => <Settings {...args} />;

export const Default = Template.bind({});
Default.args = {};
