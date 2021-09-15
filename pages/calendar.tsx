import { NextPage } from "next";
import React from "react";
import { CalendarPage } from "@Template/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Default } from "@Layout/index";
import { DashboardProvider } from "@Context/index";

const Calendar: NextPage = ({ calendarData }: any) => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;
    const quickBarWidth = 60;

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    return (
        <DashboardProvider>
            <Default onClick={handleDrawerOpen} open={open} drawerwidth={drawerWidth} quickBarWidth={quickBarWidth}>
                <CalendarPage calendarData={calendarData} />
            </Default>
        </DashboardProvider>
    );
};

export const getStaticProps = async ({ locale }: any) => {
    const response = await fetch(`https://d187mzioodxioi.cloudfront.net/calendar/calendar.json`);
    const calendarData = await response.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            calendarData,
        },
    };
};

export default Calendar;
