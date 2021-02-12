import React from "react";
import { Story, Meta } from "@storybook/react";
import { Mail, PersonOutline, PowerSettingsNewOutlined } from "@material-ui/icons";
import { Menu } from "./index";
import { IProps } from "./Menu";

const ListMenuItems = [
    {
        onClick: () => {},
        label: "Profile current user",
        icon: <PersonOutline fontSize="small" />,
        text: "Profile",
    },
    {
        onClick: () => {},
        label: "Inbox user",
        icon: <Mail fontSize="small" />,
        text: "Inbox",
    },
    {
        onClick: () => {},
        label: "Logout user",
        icon: <PowerSettingsNewOutlined fontSize="small" />,
        text: "Logout",
    },
];
export default {
    component: Menu,
    title: "Elements / Menu",
} as Meta;

const Template: Story<IProps> = args => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = { anchorEl: null, menuId: "MenuStory", name: "Jon Doe", isMenuOpen: true, onClick: () => {}, onClose: () => {}, ListMenuItems };
