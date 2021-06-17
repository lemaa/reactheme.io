import React from "react";
import { Box, IconButton } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import FilterListIcon from "@material-ui/icons/FilterList";
import { IProps } from "@Element/Common/ContentHeader/ContentHeader";
import useStyles from "@Element/Common/ContentHeader/ContentHeaderStyle";
import { useAppSettings } from "@Context/index";

const ContentHeader: React.FunctionComponent<IProps> = ({ pathName, filterButton, refreshButton, customButton, OnFilterClick, onrefreshClick }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    return (
        <Box display="flex" justifyContent="space-between" p={1}>
            <Box component="h3" justifyContent="flex-start" className={classes.ContainerPathName}>
                {pathName}
            </Box>
            <Box justifyContent="flex-end">
                {customButton}
                {filterButton && (
                    <IconButton aria-label="filter" onClick={OnFilterClick} color="primary">
                        <FilterListIcon />
                    </IconButton>
                )}
                {refreshButton && (
                    <IconButton aria-label="refresh" onClick={onrefreshClick} color="primary">
                        <RefreshIcon />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
};
export { ContentHeader };
