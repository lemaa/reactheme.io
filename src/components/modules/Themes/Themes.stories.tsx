import React from "react";
import { Story, Meta } from "@storybook/react";
import { Themes } from "./index";
import { IProps } from "./Themes";

export default {
    component: Themes,
    title: "Modules / Themes",
} as Meta;

const Template: Story<IProps> = args => <Themes {...args} />;

export const Default = Template.bind({});
Default.args = {};
