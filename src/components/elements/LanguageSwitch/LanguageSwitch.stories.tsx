import React from "react";
import { Story, Meta } from "@storybook/react";
import { LanguageSwitch } from "./index";
import { IProps } from "./LanguageSwitch";

const ListLanguageItems = [
    {
        language: "english",
        languageAbbr: "en",
        nameFlag: "etats-unis.svg",
    },
    {
        language: "french",
        languageAbbr: "fr",
        nameFlag: "france.svg",
    },
];

export default {
    component: LanguageSwitch,
    title: "Elements / LanguageSwitch",
    argTypes: {
        srcFlags: { defaultValue: "static/images/flags" },
        ListLanguageItems,
    },
} as Meta;

const Template: Story<IProps> = args => <LanguageSwitch {...args} />;

export const Default = Template.bind({});
Default.args = { ListLanguageItems, srcFlags: "static/images/flags" };
