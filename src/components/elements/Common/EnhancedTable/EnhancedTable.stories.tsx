import React from "react";
import { Story, Meta } from "@storybook/react";
import { EnhancedTable } from "./index";
import { IProps } from "./EnhancedTable";

export default {
    component: EnhancedTable,
    title: "Elements / EnhancedTable",
    argTypes: {
        data: { defaultValue: [{ id: "1", text: "zzed" }] },
        tableTitle: { defaultValue: "#title" },
        checkboxRows: { defaultValue: true },
    },
} as Meta;

const Template: Story<IProps> = args => <EnhancedTable {...args} />;
export const Default = Template.bind({});
Default.args = { data: [{}], tableTitle: "title", checkboxRows: true };
