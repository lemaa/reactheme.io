import React from "react";
import { Story, Meta } from "@storybook/react";
import { Badge } from "./index";
import { IProps } from "./Badge";

export default {
    component: Badge,
    title: "Elements / Badge",
    argTypes: {
        text: { defaultValue: "story of badge" },
        bgColor: { defaultValue: "#cccccc" },
        textColor: { defaultValue: "#ffffff" },
    },
} as Meta;

const Template: Story<IProps> = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = { textColor: "#ffffff", bgColor: "#cccccc", text: "story of badge" };
