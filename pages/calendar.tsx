import { NextPage } from "next";
import React from "react";
import Main from "@Module/MainContainer/MainContainer";
import CalendarPage from "@Template/CalendarPage";

const Calendar: NextPage = () => {
    return (
        <Main>
            <CalendarPage />
        </Main>
    );
};

export default Calendar;
