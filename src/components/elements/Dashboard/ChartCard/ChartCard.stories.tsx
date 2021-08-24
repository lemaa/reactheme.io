import React from "react";
import { Story, Meta } from "@storybook/react";
import { ChartCard } from "./index";
import { IProps } from "./ChartCard";

const datas = [
    {
        name: "STOCK ABC",
        data: [31, 50, 40, 28, 90, 51, 42, 96, 90],
    },
];
export default {
    component: ChartCard,
    title: "Elements / ChartCard",
} as Meta;

const Template: Story<IProps> = args => <ChartCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "38.4k",
    description: "Orders Received",
    badgeType: "success",
    data: { datas },
    badgeText: "+ 200 new data",
};
