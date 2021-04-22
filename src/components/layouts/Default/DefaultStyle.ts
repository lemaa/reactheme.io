import { makeStyles, Theme } from "@material-ui/core/styles";
import { IState } from "@Layout/Default/Default";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, IState>(theme => ({
    drawer: {
        flexShrink: 0,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        flex: "1 0 auto",
        margin: theme.spacing(1),
    },
    quickbar: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "& nav div": {
            paddingTop: "15px",
            paddingBottom: "15px",
        },
    },
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
        backgroundColor: props => ThemesConsts[props.mainTheme].palette.background.default,
    },
    contentShift: {
        [theme.breakpoints.up("sm")]: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: props => `${props.drawerwidth}px`,
            marginRight: props => `${props.quickBarWidth}px`,
        },
        backgroundColor: props => ThemesConsts[props.mainTheme].palette.background.default,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
}));

export default useStyles;
