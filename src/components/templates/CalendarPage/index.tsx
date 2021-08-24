import React from "react";
import { Calendar } from "@Module/index";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Button from "@material-ui/core/Button";
import { ContentHeader } from "@Element/index";
import Box from "@material-ui/core/Box";

const now = new Date();
const listCalendarItems = [
    {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(new Date().setDate(new Date().getDate() - 3)),
        end: new Date(new Date().setDate(new Date().getDate() - 1)),
        color: "purple",
    },
    {
        id: 1,
        title: "Long Event",
        start: new Date(2021, 7, 7),
        end: new Date(2021, 7, 10),
        color: "deepPurple",
    },

    {
        id: 2,
        title: "DTS STARTS",
        start: new Date(2016, 7, 13, 0, 0, 0),
        end: new Date(2016, 7, 20, 0, 0, 0),
        color: "indigo",
    },

    {
        id: 3,
        title: "DTS ENDS",
        start: new Date(2016, 7, 6, 0, 0, 0),
        end: new Date(2016, 7, 13, 0, 0, 0),
        color: "cyan",
    },

    {
        id: 4,
        title: "Some Event",
        start: new Date(2021, 7, 9, 0, 0, 0),
        end: new Date(2021, 7, 10, 0, 0, 0),
        color: "green",
    },
    {
        id: 5,
        title: "Conference",
        start: new Date(2021, 7, 11),
        end: new Date(2021, 7, 13),
        desc: "Big conference for important people",
        color: "deepOrange",
    },
    {
        id: 6,
        title: "Meeting",
        start: new Date(2021, 7, 12, 10, 30, 0, 0),
        end: new Date(2021, 7, 12, 12, 30, 0, 0),
        desc: "Pre-meeting meeting, to prepare for the meeting",
        color: "yellow",
    },
    {
        id: 7,
        title: "Lunch",
        start: new Date(2021, 7, 12, 12, 0, 0, 0),
        end: new Date(2021, 7, 12, 13, 0, 0, 0),
        desc: "Power lunch",
        color: "pink",
    },
    {
        id: 8,
        title: "Meeting",
        start: new Date(2021, 7, 12, 14, 0, 0, 0),
        end: new Date(2021, 7, 12, 15, 0, 0, 0),
        color: "purple",
    },
    {
        id: 9,
        title: "Happy Hour",
        start: new Date(2021, 7, 12, 17, 0, 0, 0),
        end: new Date(2021, 7, 12, 17, 30, 0, 0),
        desc: "Most important meal of the day",
        color: "deepPurple",
    },
    {
        id: 10,
        title: "Dinner",
        start: new Date(2021, 7, 12, 20, 0, 0, 0),
        end: new Date(2021, 7, 12, 21, 0, 0, 0),
        color: "blue",
    },
    {
        id: 11,
        title: "Birthday Party",
        start: new Date(2021, 7, 13, 7, 0, 0),
        end: new Date(2021, 7, 13, 10, 30, 0),
        color: "teal",
    },
    {
        id: 12,
        title: "Late Night Event",
        start: new Date(2021, 7, 17, 19, 30, 0),
        end: new Date(2021, 7, 18, 2, 0, 0),
        color: "lightGreen",
    },
    {
        id: 12.5,
        title: "Late Same Night Event",
        start: new Date(2021, 7, 17, 19, 30, 0),
        end: new Date(2021, 7, 17, 23, 30, 0),
        color: "yellow",
    },
    {
        id: 13,
        title: "Multi-day Event",
        start: new Date(2021, 7, 20, 19, 30, 0),
        end: new Date(2021, 7, 22, 2, 0, 0),
        color: "deepOrange",
    },
    {
        id: 14,
        title: "Today",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        color: "deepPurple",
    },
    {
        id: 15,
        title: "Point in Time Event",
        start: now,
        end: now,
        color: "blue",
    },
    {
        id: 16,
        title: "Video Record",
        start: new Date(2021, 7, 14, 15, 30, 0),
        end: new Date(2021, 7, 14, 19, 0, 0),
        color: "green",
    },
    {
        id: 17,
        title: "Dutch Song Producing",
        start: new Date(2021, 7, 14, 16, 30, 0),
        end: new Date(2021, 7, 14, 20, 0, 0),
        color: "cyan",
    },
    {
        id: 18,
        title: "Itaewon Halloween Meeting",
        start: new Date(2021, 7, 14, 16, 30, 0),
        end: new Date(2021, 7, 14, 17, 30, 0),
        color: "amber",
    },
    {
        id: 19,
        title: "Online Coding Test",
        start: new Date(2021, 7, 14, 17, 30, 0),
        end: new Date(2021, 7, 14, 20, 30, 0),
        color: "orange",
    },
    {
        id: 20,
        title: "An overlapped Event",
        start: new Date(2021, 7, 14, 17, 0, 0),
        end: new Date(2021, 7, 14, 18, 30, 0),
        color: "pink",
    },
    {
        id: 21,
        title: "Phone Interview",
        start: new Date(2021, 7, 14, 17, 0, 0),
        end: new Date(2021, 7, 14, 18, 30, 0),
        color: "indigo",
    },
    {
        id: 22,
        title: "Cooking Class",
        start: new Date(2021, 7, 14, 17, 30, 0),
        end: new Date(2021, 7, 14, 19, 0, 0),
        color: "lightGreen",
    },
    {
        id: 23,
        title: "Go to the gym",
        start: new Date(2021, 7, 14, 18, 30, 0),
        end: new Date(2021, 7, 14, 20, 0, 0),
        color: "yellow",
    },
];

const CalendarPage: React.FC = () => {
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );

    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Calendar" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" p={1}>
                <Calendar events={listCalendarItems} />
            </Box>
        </div>
    );
};

export { CalendarPage };
