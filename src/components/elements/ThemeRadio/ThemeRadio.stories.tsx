import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeRadio } from "./index";
import { IProps } from "./ThemeRadio";

export default {
    component: ThemeRadio,
    title: "Elements / ThemeRadio",
} as Meta;

const Template: Story<IProps> = args => <ThemeRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: "default",
    PrimaryColor: "#ffebee",
    SecondaryColor: "#bbdefb",
};
