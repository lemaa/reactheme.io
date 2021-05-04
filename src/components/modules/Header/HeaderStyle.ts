import { fade, makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { drawerWidth: number; quickBarWidth: number; drawerPosition: string; quickBarPosition: string; headerTheme: string }>((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: props => ThemesConsts[props.headerTheme].palette.primary.dark,
            [theme.breakpoints.up("sm")]: {
                width: props => `calc(100% - ${props.quickBarWidth}px)`,
                marginRight: props => (props.quickBarPosition === "right" ? `${props.quickBarWidth}px` : "0px"),
                marginLeft: props => (props.quickBarPosition === "left" ? `${props.quickBarWidth}px` : "0px"),
                transition: theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            },
        },
        appBarShift: {
            [theme.breakpoints.up("sm")]: {
                width: props => `calc(100% - ${props.drawerWidth + props.quickBarWidth}px)`,
                transition: theme.transitions.create(["margin", "width"], {
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
        },

        grow: {
            flexGrow: 1,
        },

        menuButton: {
            marginRight: theme.spacing(2),
        },

        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        search: {
            position: "relative",
            borderRadius: "25px",
            backgroundColor: fade(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                width: "auto",
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch",
            },
        },
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex",
            },
        },
        LanguageButton: {
            display: "flex",
            color: "#ffffff",
            width: "3.4rem",
            padding: "5px",
        },
        languageFlag: {
            width: "20px",
            margin: "0 5px",
        },
        languageName: {
            margin: "0 5px",
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                display: "none",
            },
        },
    })
);

export default useStyles;
