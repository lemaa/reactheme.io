import * as React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { ViewDayOutlined, ViewAgendaOutlined, ViewWeekOutlined, ViewComfyOutlined, TodayOutlined, NavigateNextOutlined, NavigateBeforeOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { ICustomTooolbarProps, navigateConstants, messages } from "@Module/CalendarToolbar/CalendarToolbarType";
import useStyles from "@Module/CalendarToolbar/CalendarToolbarStyle";

const CustomToolbar: React.FC<ICustomTooolbarProps> = ({ views, view, label, onNavigate, onView }) => {
    const classes = useStyles();

    const navigate = (action: any) => {
        onNavigate(action);
    };

    const viewItem = (viewType: any) => {
        onView(viewType);
    };

    const viewNamesGroup = (messagesType: any) => {
        const viewNames = views;
        const viewState = view;
        if (viewNames.length > 1) {
            return (
                <>
                    <IconButton className={classes.IconButton} aria-label={navigateConstants.TODAY} onClick={() => navigate(navigateConstants.TODAY)}>
                        <TodayOutlined />
                    </IconButton>
                    {viewNames.map(name => (
                        <IconButton
                            key={name}
                            className={clsx(classes.IconButton, {
                                "rbc-active": viewState === name,
                            })}
                            aria-label={messagesType[name]}
                            onClick={() => viewItem(name)}
                        >
                            {messagesType[name] === "Month" && <ViewComfyOutlined />}
                            {messagesType[name] === "Week" && <ViewWeekOutlined />}
                            {messagesType[name] === "Day" && <ViewDayOutlined />}
                            {messagesType[name] === "Agenda" && <ViewAgendaOutlined />}
                        </IconButton>
                    ))}
                </>
            );
        }
        return false;
    };
    return (
        <Grid className="rbc-toolbar" container spacing={2}>
            <Grid className={clsx(classes.viewNameToolbar, "rbc-btn-group")} item xs={12}>
                {viewNamesGroup(messages)}
            </Grid>
            <Grid className={clsx(classes.viewNavigateToolbar, "rbc-btn-group")} item xs={12}>
                <IconButton className={classes.IconButton} aria-label={navigateConstants.PREVIOUS} onClick={() => navigate(navigateConstants.PREVIOUS)}>
                    <NavigateBeforeOutlined fontSize="large" />
                </IconButton>
                <span className={clsx("rbc-toolbar-label", classes.viewNavigateToolbarLabel)}>{label}</span>
                <IconButton className={classes.IconButton} aria-label={navigateConstants.NEXT} onClick={() => navigate(navigateConstants.NEXT)}>
                    <NavigateNextOutlined fontSize="large" />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default CustomToolbar;