import React from "react";
import { Story, Meta } from "@storybook/react";
import { FelicitationsCard } from "./index";
import { IProps } from "./FelicitationsCard";

export default {
    component: FelicitationsCard,
    title: "Elements / FelicitationsCard",
} as Meta;

const Template: Story<IProps> = args => <FelicitationsCard {...args} />;

export const Default = Template.bind({});
Default.args = { title: "congra", description: "you won", cardType: "success" };
