import { NextPage } from "next";
import React from "react";
import { Main } from "@Module/index";
import { CalendarPage } from "@Template/index";

const Calendar: NextPage = () => {
    return (
        <Main>
            <CalendarPage />
        </Main>
    );
};

export default Calendar;
