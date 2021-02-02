import { IProps} from '@module/Calendar/CalendarType';
import {makeStyles, Theme } from '@material-ui/core/styles';
   
const useStyles = makeStyles<Theme, IProps>((theme) => ({

calendarContainer: {
    height: "90vh",
    '& .rbc-today': {
        backgroundColor: "#FFF", 
        borderBottom: `${theme.palette.primary.light} 4px solid` 
    },
    '& .rbc-show-more':{
        color: theme.palette.primary.main
    },
 
},
dialogContent: {
    height: "100vh", 
},
inputContainer: {
    padding: "5px !important", 
},
dialogTitle: {
    backgroundColor: theme.palette.primary.main, 
    color: "#FFF", 
    textAlign: "center",
    marginBottom: "25px",
},
})
);

export default useStyles;