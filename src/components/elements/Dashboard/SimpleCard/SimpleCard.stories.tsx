import React from "react";
import { Story, Meta } from "@storybook/react";
import { SimpleCard } from "./index";
import { IProps } from "./SimpleCard";

export default {
    component: SimpleCard,
    title: "Elements / SimpleCard",
} as Meta;

const Template: Story<IProps> = args => <SimpleCard {...args} />;

export const Default = Template.bind({});
Default.args = { title: "congra", description: "you won", cardType: "success" };
