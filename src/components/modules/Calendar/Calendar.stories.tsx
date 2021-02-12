import React from "react";
import { Story, Meta } from "@storybook/react";
import { Calendar } from "./index";
import { IProps } from "./Calendar";

const listCalendarItems = [
    {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(),
        end: new Date(),
        color: "purple",
    },
    {
        id: 1,
        title: "Long Event",
        start: new Date(2021, 2, 12),
        end: new Date(2021, 2, 13),
        color: "deepPurple",
    },
    {
        id: 6,
        title: "Meeting",
        start: new Date(2021, 2, 13, 10, 30, 0, 0),
        end: new Date(2021, 2, 13, 12, 30, 0, 0),
        desc: "Pre-meeting meeting, to prepare for the meeting",
        color: "yellow",
    },
];

export default {
    component: Calendar,
    title: "Modules / Calendar",
} as Meta;

const Template: Story<IProps> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = { events: listCalendarItems };
