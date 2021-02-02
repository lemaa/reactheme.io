import { NextPage } from 'next';
import React from 'react';
import Main from '@module/MainContainer/MainContainer';
import CalendarPage from '@template/CalendarPage'; 

const Calendar: NextPage = (props) =>{
 
 return (
     <Main >
        <CalendarPage/>
    </Main>
     )
};
 
export default Calendar;