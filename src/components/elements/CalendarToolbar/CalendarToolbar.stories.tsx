import React from "react";
import { Story, Meta } from "@storybook/react";
import { CustomToolbar } from "./index";
import { ICustomTooolbarProps } from "./CalendarToolbar";

const views = ["month", "week", "day", "agenda"];

export default {
    component: CustomToolbar,
    title: "Elements / CustomToolbar",
    argTypes: {
        label: { defaultValue: "February 2021" },
        view: { defaultValue: "month" },
        views,
        localizer: { defaultValue: "localizer" },
        onNavigate: () => {},
        onView: () => {},
    },
} as Meta;

const Template: Story<ICustomTooolbarProps> = args => <CustomToolbar {...args} />;

export const Default = Template.bind({});
Default.args = { label: "February 2021", view: "month", views, localizer: "localizer", onNavigate: () => {}, onView: () => {} };
