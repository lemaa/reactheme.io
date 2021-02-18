import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ProfilePicture } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<CustomToolbar />", () => {
    const handleClickMock = jest.fn();

    render(<ProfilePicture name="Jon doe" userRole="tester" srcPicture="static/images/avatar" namePicture="1.jpg" altPic="profile pic" onClick={handleClickMock} />);
});
