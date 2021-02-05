import React from "react";
import { storiesOf } from "@storybook/react";
import { Mail, PersonOutline, SettingsOutlined, LockOutlined, PowerSettingsNewOutlined } from "@material-ui/icons";
import Menu from "./Menu";

let anchorEl: HTMLElement | null = null;

const handleMenuClose = () => {
    anchorEl = null;
};
const ListMenuItems = [
    {
        onClick: handleMenuClose,
        label: "Profile current user",
        icon: <PersonOutline fontSize="small" />,
        text: "Profile",
    },
    {
        onClick: handleMenuClose,
        label: "Inbox user",
        icon: <Mail fontSize="small" />,
        text: "Inbox",
    },
    {
        onClick: handleMenuClose,
        label: "Account settings user",
        icon: <SettingsOutlined fontSize="small" />,
        text: "Account settings",
    },
    {
        onClick: handleMenuClose,
        label: "Lock user",
        icon: <LockOutlined fontSize="small" />,
        text: "Lock",
    },
    {
        onClick: handleMenuClose,
        label: "Logout user",
        icon: <PowerSettingsNewOutlined fontSize="small" />,
        text: "Logout",
    },
];

storiesOf("Menu", module).add("with text", () => {
    return <Menu name=" Amel Fz" anchorEl={anchorEl} menuId="primary-search-account-menu" isMenuOpen onClose={handleMenuClose} ListMenuItems={ListMenuItems} />;
});
