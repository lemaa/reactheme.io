import React from "react";
import { Story, Meta } from "@storybook/react";
import { ProgressChartCard } from "./index";
import { IProps } from "./ProgressChartCard";

export default {
    component: ProgressChartCard,
    title: "Elements / ProgressChartCard",
} as Meta;
const datas = {
    series: [
        {
            name: "visitors",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "pages view",
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ],
    categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
    ],
};
const Template: Story<IProps> = args => <ProgressChartCard {...args} />;

export const Default = Template.bind({});
Default.args = { title: "congra", data: { datas } };
