import React from "react";
import { Story, Meta } from "@storybook/react";
import { AreaChartCard } from "./index";
import { IProps } from "./AreaChartCard";

export default {
    component: AreaChartCard,
    title: "Elements / AreaChartCard",
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
const Template: Story<IProps> = args => <AreaChartCard {...args} />;

export const Default = Template.bind({});
Default.args = { title: "congra", description: "you won", data: { datas } };
