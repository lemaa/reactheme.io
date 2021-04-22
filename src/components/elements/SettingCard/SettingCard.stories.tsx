import React from "react";
import { Story, Meta } from "@storybook/react";
import { SettingCard } from "./index";
import { IProps } from "./SettingCard";

export default {
    component: SettingCard,
    title: "Elements / SettingCard",
} as Meta;

const Template: Story<IProps> = args => <SettingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "header",
    type: "theme",
    settingItem: {
        display: true,
        position: "left",
        style: "fixed",
    },
};
