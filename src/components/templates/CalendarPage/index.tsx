import React, { useEffect } from "react";
import { Calendar } from "@Module/index";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Button from "@material-ui/core/Button";
import { ContentHeader } from "@Element/index";
import Box from "@material-ui/core/Box";
import { useDashboard } from "@Context/index";

const CalendarPage: React.FC = ({ calendarData }: any) => {
    const { state, dispatch } = useDashboard();
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );
    useEffect(() => {
        if (calendarData) {
            dispatch({
                type: "FETCH_DATA",
                payload: calendarData,
            });
        }
    }, [calendarData, dispatch]);
    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Calendar" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" p={1}>
                {state && state.calendar && <Calendar events={state.calendar} />}
            </Box>
        </div>
    );
};

export { CalendarPage };
