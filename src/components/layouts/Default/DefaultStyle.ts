import { makeStyles, Theme } from "@material-ui/core/styles";
import { IState } from "@Layout/Default/Default";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, IState>(theme => ({
    drawer: {
        flexShrink: 0,
        marginLeft: props => (props.quickBarPosition === "left" ? `${props.quickBarWidth}px` : "0px"),
        marginRight: props => (props.quickBarPosition === "right" ? `${props.quickBarWidth}px` : "0px"),
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
            marginRight: props => (props.quickBarPosition === "right" ? `${props.quickBarWidth}px` : "0px"),
            marginLeft: props => (props.quickBarPosition === "left" ? `${props.quickBarWidth}px` : "0px"),
        },
        backgroundColor: props => ThemesConsts[props.mainTheme].palette.background.default,
    },
    contentShift: {
        [theme.breakpoints.up("sm")]: {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: props => {
                if (props.drawerPosition === "left" && props.quickBarPosition === "left") {
                    return `${props.quickBarWidth + props.drawerWidth}px`;
                }
                if (props.drawerPosition === "left" && props.quickBarPosition !== "left") {
                    return `${props.drawerWidth}px`;
                }
                if (props.drawerPosition !== "left" && props.quickBarPosition === "left") {
                    return `${props.quickBarWidth}px`;
                }
                return "0px";
            },
            marginRight: props => {
                if (props.drawerPosition === "right" && props.quickBarPosition === "right") {
                    return `${props.quickBarWidth + props.drawerWidth}px`;
                }
                if (props.drawerPosition === "right" && props.quickBarPosition !== "right") {
                    return `${props.drawerWidth}px`;
                }
                if (props.drawerPosition !== "right" && props.quickBarPosition === "right") {
                    return `${props.quickBarWidth}px`;
                }
                return "0px";
            },
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
