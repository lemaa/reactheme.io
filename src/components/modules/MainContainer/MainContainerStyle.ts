import { IState } from "@Module/MainContainer/MainContainer";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, IState>(theme => ({
    content: {
        [theme.breakpoints.up("sm")]: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: props => `${props.quickBarWidth}px`,
        },
    },
    contentShift: {
        [theme.breakpoints.up("sm")]: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: props => `${props.drawerWidth}px`,
            marginRight: props => `${props.quickBarWidth}px`,
        },
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
}));

export default useStyles;
