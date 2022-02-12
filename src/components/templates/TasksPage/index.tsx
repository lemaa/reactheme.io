import React from "react";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Button from "@material-ui/core/Button";
import { ContentHeader } from "@Element/index";
import Box from "@material-ui/core/Box";

const TasksPage: React.FunctionComponent<any> = () => {
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );

    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Calendar" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" p={1} />
        </div>
    );
};

export { TasksPage };
