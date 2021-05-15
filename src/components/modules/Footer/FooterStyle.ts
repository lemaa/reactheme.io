import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { drawerWidth: number; position: string; quickBarWidth: number; drawerPosition: string; quickBarPosition: string; footerTheme: string }>(
    (theme: Theme) =>
        createStyles({
            appBar: {
                width: "100%",
                position: props => (props.position === "fixed" ? "fixed" : "static"),
                minHeight: "60px",
                top: "auto",
                bottom: 0,
                color: props => ThemesConsts[props.footerTheme].palette.text.primary,
                backgroundColor: props => ThemesConsts[props.footerTheme].palette.background.paper,
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
        })
);

export default useStyles;
