import 'date-fns';
import React   from 'react';
import moment from 'moment';
import { IProps} from '@module/Calendar/CalendarType';
import  useStyles  from '@module/Calendar/CalendarStyle';
import { Calendar as BigCalendar, Views, momentLocalizer } from 'react-big-calendar';
 import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { CalendarItem } from '@customType/CalendarItem';
import { Button, Dialog,  DialogContent,  DialogTitle, FormControlLabel, Grid, Switch, TextField } from '@material-ui/core';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import CustomToolbar from '@module/CalendarToolbar/CalendarToolbar';

const DragAndDropCalendar = withDragAndDrop(BigCalendar);
const localizer = momentLocalizer(moment);

const Calendar: React.FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(props);


    const [calendarEvents, setCalendarEvents] = React.useState<null | Array<CalendarItem>>(props.events);
    const [selectedEvent, setSelectedEvent] = React.useState<null | CalendarItem>(null);
    const [viewState, setViewState] = React.useState<"" | string>("");
    const [dialogSettings, setDialogSettings] = React.useState({
        headerText: "",
        buttonText: "",
        action: ""
    });
    const [dialogOpen, setDialogOpen] = React.useState<false | boolean>(false);

    const [title, setTitle] = React.useState<"" | string>("");
    const [description, setDescription] = React.useState<"" | string>("");
    const [isAllDay, setIsAllDay] = React.useState({
      isAllDay: false
    });
    const [selectedDateStart, setSelectedDateStart] = React.useState<Date | null>(
      new Date()
    );
    const [selectedDateEnd, setSelectedDateEnd] = React.useState<Date | null>(
      new Date()
    );
    const handleNewEvent = (event: CalendarItem) => {
        setDialogOpen(true);
        setDialogSettings({headerText: "ADD AN EVENT", buttonText: "ADD EVENT", action: "add"});
        setSelectedDateStart(event.start);
        setSelectedDateEnd(event.end);
    }

    const handleSelectedEvent = (event: CalendarItem) => {
        setDialogOpen(true);
        setDialogSettings({headerText: "EDIT AN EVENT", buttonText: "EDIT EVENT", action: "edit"});
        setSelectedDateStart(event.start);
        setSelectedDateEnd(event.end);
        setTitle(event.title);
        setDescription(event.desc);
        setIsAllDay({isAllDay: event.allDay ? true: false});
        setSelectedEvent(event);
    } 

    const onEventDrop = ({event, start, end, isAllDay: droppedOnAllDaySlot }) => {
 
        let allDay = event.allDay;
       
        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
          } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
          }
      
        const nextEvents = calendarEvents.map(existingEvent => {
            return existingEvent.id == event.id
              ? { ...existingEvent, start, end }
              : existingEvent
          })
          setCalendarEvents(nextEvents);
    }
    
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
      };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
      };

    const handleIsAllDay = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsAllDay({ ...isAllDay, [event.target.name]: event.target.checked });
    };

    const handleDateStartChange = (date: Date | null) => {
        setSelectedDateStart(date);
    };
    const handleDateEndChange = (date: Date | null) => {
        setSelectedDateEnd(date);
    };
    
    const handleDialogClose = () => {
 
        setDialogSettings({headerText:"", buttonText:"", action:""});
        setDescription("");
        setTitle("");
        setIsAllDay({isAllDay: false});
        setSelectedDateStart(new Date());
        setSelectedDateEnd(new Date());
        setDialogOpen(false);
      };

    const handleEvent = () => {

        if( dialogSettings.action ==="add")  {
            const id = Math.floor(Math.random() * 100);
            const newEvent={
                id: id,
                title: title,
                start: selectedDateStart,
                end: selectedDateEnd,
                isAllDay: isAllDay.isAllDay,
            }
            setCalendarEvents(events => [...events, newEvent]);
        
        }
        else if(dialogSettings.action ==="edit"){
                    
            const nextEvents = calendarEvents.map(existingEvent => {
                return existingEvent.id == selectedEvent.id
                  ? { ...existingEvent, desc: description, title: title, start: selectedDateStart, end: selectedDateEnd }
                  : existingEvent
              })
            setCalendarEvents(nextEvents);
            setSelectedEvent(null);
        }
        handleDialogClose();
      };
    const handleSetViewState = (view) =>{
         setViewState(view);
    };
    const eventStyleColor = (event: CalendarItem, start: Date, end: Date, isSelected: boolean ) => {
         let backgroundColor = event.color;
        let style = {
            backgroundColor: backgroundColor,
         };
         if (viewState !== "agenda"){
            return {
                style: style
            };
         }

    };
      return (
          <>
            <DragAndDropCalendar
                selectable
                resizable
                localizer={localizer}
                events={calendarEvents}
                popup={true}
                defaultDate={new Date()}
                defaultView={Views.MONTH}
                className={classes.calendarContainer}
                onSelectEvent={handleSelectedEvent}
                onSelectSlot={handleNewEvent}
                onEventDrop={onEventDrop}
                eventPropGetter={eventStyleColor}
                components={{ toolbar: CustomToolbar }} 
                onView={handleSetViewState}
             />
            <Dialog
                maxWidth="xs"
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title" className={classes.dialogTitle}>{dialogSettings.headerText}</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <form className={classes.form} noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12} className={classes.inputContainer}>
                            <TextField required  id="outlined-title" label="Title" variant="outlined" fullWidth={true} value={title} onChange={handleTitleChange}/>
                        </Grid>
                        <Grid item xs={12} className={classes.inputContainer}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isAllDay.isAllDay}
                                        onChange={handleIsAllDay}
                                        name="isAllDay"
                                        color="primary"
                                        />
                                    }
                                label="All Day"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.inputContainer}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDateTimePicker
                                    margin="normal"
                                    id="date-picker-start"
                                    label="Date picker start"
                                    value={selectedDateStart}
                                    onChange={handleDateStartChange}
                                    fullWidth={true}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date start',
                                    }}
                                />
                                <KeyboardDateTimePicker
                                    margin="normal"
                                    id="date-picker-end"
                                    label="Date picker end"
                                    value={selectedDateEnd}
                                    onChange={handleDateEndChange}
                                    fullWidth={true}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12} className={classes.inputContainer}>
                            <TextField id="outlined-description" label="description" variant="outlined" fullWidth={true} multiline={true} rows={3} value={description} onChange={handleDescriptionChange}/>
                        </Grid>
                        <Grid item xs={12} className={classes.inputContainer}>
                            <Button variant="contained" color="primary" onClick={handleEvent}> {dialogSettings.buttonText}</Button>
                        </Grid>
                    </Grid>
                    </form>
                </DialogContent>
            </Dialog>
        </>
      )
 
}
export default Calendar;
 