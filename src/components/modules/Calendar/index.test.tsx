import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Calendar } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Calendar />", () => {
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
    render(<Calendar events={listCalendarItems} />);
});
