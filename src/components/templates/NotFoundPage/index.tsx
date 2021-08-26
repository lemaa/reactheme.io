import React from "react";
import { Box, Button } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader } from "@Element/index";
// import Skeleton from "@material-ui/lab/Skeleton";

const NotFoundPage: React.FunctionComponent<any> = () => {
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );
    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Project" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" display="flex" flexWrap="wrap" flexGrow={1} p={1} />
            <Box component="div" display="flex" flexWrap="wrap" justifyContent="space-between" p={1} />

            <Box component="div" p={1} />
        </div>
    );
};

export { NotFoundPage };
