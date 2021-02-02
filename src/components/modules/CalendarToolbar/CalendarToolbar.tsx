import * as React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import {ViewDayOutlined, ViewAgendaOutlined, ViewWeekOutlined, ViewComfyOutlined , TodayOutlined, NavigateNextOutlined, NavigateBeforeOutlined} from '@material-ui/icons';
import {ICustomTooolbarProps , navigateConstants, messages} from '@module/CalendarToolbar/CalendarToolbarType';
import  useStyles  from '@module/CalendarToolbar/CalendarToolbarStyle';
import {IconButton } from '@material-ui/core';

const CustomToolbar: React.FC<ICustomTooolbarProps> = (props) => {

    const classes = useStyles();

    function navigate(action: any) {
        props.onNavigate(action);
    }

    function viewItem(view: any) {
        props.onView(view);
    }

    function viewNamesGroup(messages: Object ) {
         const viewNames = props.views;
        const view = props.view;
         if (viewNames.length > 1) {
              return(
                <>
                <IconButton className={classes.IconButton} aria-label={navigateConstants.TODAY} onClick={navigate.bind(null, navigateConstants.TODAY)}>
                    <TodayOutlined />
                </IconButton>
                {viewNames.map((name) => (
                    <IconButton 
                        key={name}
                        className={clsx(classes.IconButton, { 'rbc-active': view === name })}
                        aria-label={messages[name]}  
                        onClick={viewItem.bind(null, name)}>
                            {messages[name] === "Month" && <ViewComfyOutlined/>}
                            {messages[name] === "Week" && <ViewWeekOutlined/>}
                            {messages[name] === "Day" && <ViewDayOutlined/>}
                            {messages[name] === "Agenda" && <ViewAgendaOutlined/>}
                                
                    </IconButton>
 
                ))}

                </> 
            )
        }
  
    }
     return (
        <Grid className="rbc-toolbar" container spacing={2} >
            <Grid className={clsx( classes.viewNameToolbar, 'rbc-btn-group' )}    item xs={12} >{viewNamesGroup(messages)}</Grid>
            <Grid className={clsx( classes.viewNavigateToolbar, 'rbc-btn-group' )} item xs={12} >
                <IconButton className={classes.IconButton} aria-label={navigateConstants.PREVIOUS} onClick={navigate.bind(null, navigateConstants.PREVIOUS)} >
                    <NavigateBeforeOutlined fontSize="large" />
                </IconButton>
                <span className={clsx("rbc-toolbar-label", classes.viewNavigateToolbarLabel)}>{props.label}</span>
                <IconButton className={classes.IconButton} aria-label={navigateConstants.NEXT} onClick={navigate.bind(null, navigateConstants.NEXT)} >
                    <NavigateNextOutlined fontSize="large" />
                </IconButton>

            </Grid>
         </Grid>
 
    );
};

export default CustomToolbar;