import React from "react";
import { Story, Meta } from "@storybook/react";
import { Main } from "./index";
import { IProps } from "./MainContainer";

export default {
    component: Main,
    title: "Modules / Main",
} as Meta;

const Template: Story<IProps> = args => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <div>this is a story of the main container</div>,
};
