import { NextPage } from "next";
import React from "react";
import { CalendarPage } from "@Template/index";
import { Default } from "@Layout/index";

const Calendar: NextPage = () => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;
    const quickBarWidth = 60;

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    return (
        <Default onClick={handleDrawerOpen} open={open} drawerwidth={drawerWidth} quickBarWidth={quickBarWidth}>
            <CalendarPage />
        </Default>
    );
};
export default Calendar;
