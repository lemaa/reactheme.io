import React from "react";
import { Story, Meta } from "@storybook/react";
import { ProfilePicture } from "./index";
import { IProps } from "./ProfilePicture";

export default {
    component: ProfilePicture,
    title: "Elements / ProfilePicture",
} as Meta;

const Template: Story<IProps> = args => <ProfilePicture {...args} />;

export const Default = Template.bind({});
Default.args = { name: "Jon Doe", userRole: "Admin", srcPicture: "static/images/avatar", namePicture: "1.jpg", altPic: "profile pic", onClick: () => {} };
