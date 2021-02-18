import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Mail, PersonOutline, PowerSettingsNewOutlined } from "@material-ui/icons";
import { Menu } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<CustomToolbar />", () => {
    const handleClickMock = jest.fn();
    const handleCloseMock = jest.fn();
    const outerNode = document.createElement("div");
    outerNode.setAttribute("id", "menu-node");
    document.body.appendChild(outerNode);
    const el: HTMLElement | null = document.getElementById("menu-node");
    const ListMenuItems = [
        {
            onClick: jest.fn(),
            label: "Profile current user",
            icon: <PersonOutline fontSize="small" />,
            text: "Profile",
        },
        {
            onClick: jest.fn(),
            label: "Inbox user",
            icon: <Mail fontSize="small" />,
            text: "Inbox",
        },
        {
            onClick: jest.fn(),
            label: "Logout user",
            icon: <PowerSettingsNewOutlined fontSize="small" />,
            text: "Logout",
        },
    ];
    render(<Menu anchorEl={el} menuId="MenuTest" name="Jon Doe" isMenuOpen ListMenuItems={ListMenuItems} onClick={handleClickMock} onClose={handleCloseMock} />);
});
