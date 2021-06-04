import React from "react";
import { Story, Meta } from "@storybook/react";
import { ContentHeader } from "./index";
import { IProps } from "./ContentHeader";

export default {
    component: ContentHeader,
    title: "Elements / ContentHeader",
} as Meta;

const Template: Story<IProps> = args => <ContentHeader {...args} />;

export const Default = Template.bind({});
Default.args = { pathName: "Dashboard", filterButton: true, refreshButton: true, customButton: "<button>Button</button>", OnFilterClick: () => {}, onrefreshClick: () => {} };
