import * as React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { ViewDayOutlined, ViewAgendaOutlined, ViewWeekOutlined, ViewComfyOutlined, TodayOutlined, NavigateNextOutlined, NavigateBeforeOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { CalendarConsts } from "@Constant/index";
import { ICustomTooolbarProps } from "@Element/CalendarToolbar/CalendarToolbar";
import { useStyles } from "@Element/CalendarToolbar/CalendarToolbarStyle";
import { useAppSettings } from "@Context/index";

const CustomToolbar: React.FC<ICustomTooolbarProps> = ({ views, view, label, onNavigate, onView }) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
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
                    <IconButton className={classes.IconButton} aria-label={CalendarConsts.navigateConstants.TODAY} onClick={() => navigate(CalendarConsts.navigateConstants.TODAY)}>
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
                {viewNamesGroup(CalendarConsts.messages)}
            </Grid>
            <Grid className={clsx(classes.viewNavigateToolbar, "rbc-btn-group")} item xs={12}>
                <IconButton
                    data-testid="navigation-prev-button"
                    className={classes.IconButton}
                    aria-label={CalendarConsts.navigateConstants.PREVIOUS}
                    onClick={() => navigate(CalendarConsts.navigateConstants.PREVIOUS)}
                >
                    <NavigateBeforeOutlined fontSize="large" />
                </IconButton>
                <span className={clsx("rbc-toolbar-label", classes.viewNavigateToolbarLabel)}>{label}</span>
                <IconButton
                    data-testid="navigation-next-button"
                    className={classes.IconButton}
                    aria-label={CalendarConsts.navigateConstants.NEXT}
                    onClick={() => navigate(CalendarConsts.navigateConstants.NEXT)}
                >
                    <NavigateNextOutlined fontSize="large" />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export { CustomToolbar };
