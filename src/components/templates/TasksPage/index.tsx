import React, { useEffect } from "react";
import { Calendar } from "@Module/index";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Button from "@material-ui/core/Button";
import { ContentHeader } from "@Element/index";
import Box from "@material-ui/core/Box";
import { useTask } from "@Context/index";

const TasksPage: React.FunctionComponent<any> = ({ tasks }: any) => {
    const { state, dispatch } = useTask();
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );
    useEffect(() => {
        if (tasks) {
            dispatch({
                type: "FETCH_DATA",
                payload: tasks,
            });
        }
    }, [tasks, dispatch]);

    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Calendar" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" p={1}>
                {state && state.calendar && <Calendar events={state.calendar} />}
            </Box>
        </div>
    );
};

export { TasksPage };
