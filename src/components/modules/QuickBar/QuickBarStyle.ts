import { makeStyles, Theme } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { qbWidth: number; toolbarTheme: string; drawerPosition: string }>(() => ({
    drawerContainer: {
        height: "100%",
        backgroundColor: props => ThemesConsts[props.toolbarTheme].palette.primary.dark,
    },
    drawerPaper: {
        width: props => `${props.qbWidth}px`,
        overflow: "hidden",
    },
    listMenuIcon: {
        color: props => ThemesConsts[props.toolbarTheme].palette.primary.contrastText,
        minWidth: "35px",
    },
    ListItemContainer: {
        "&:hover, &:hover $listMenuIcon": {
            color: props => ThemesConsts[props.toolbarTheme].palette.text.primary,
            fontWeight: "500",
            backgroundColor: props => ThemesConsts[props.toolbarTheme].palette.background.default,
        },
    },
    quickbarDetails: {
        position: "fixed",
        right: 0,
        top: 0,
        background: props => ThemesConsts[props.toolbarTheme].palette.background.paper,
        height: "100%",
        width: "400px",
        transform: "translateX(120%)",
        transition: "0.3s",
        zIndex: 1200,
    },
    quickbarDetailsOpen: {
        transform: "translateX(-1px)",
        boxShadow: "-3px 2px 5px 0 rgba(0, 0, 0, .16)",
    },
    quickbarDetailsTitle: {
        padding: "15px",
        color: props => ThemesConsts[props.toolbarTheme].palette.text.primary,
    },
    closeButton: {
        position: "absolute",
        right: 0,
        color: props => ThemesConsts[props.toolbarTheme].palette.text.primary,
    },
    quickbarDetailsContent: {
        padding: "15px",
    },
    divider: {
        backgroundColor: props => ThemesConsts[props.toolbarTheme].palette.primary.light,
    },
    ToolTipDrawer: {
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.1)",
        border: "rgba(0, 0, 0, 0.12) solid 1px",
        backgroundColor: props => ThemesConsts[props.toolbarTheme].palette.background.default,
        opacity: 1,
        fontSize: "14px",
        color: props => ThemesConsts[props.toolbarTheme].palette.text.primary,
    },
    floatingSetting: {
        position: "fixed",
        right: props => (props.drawerPosition === "left" ? "15px" : "unset"),
        left: props => (props.drawerPosition === "right" ? "15px" : "unset"),
        bottom: "85px",
        color: props => ThemesConsts[props.toolbarTheme].palette.primary.contrastText,
    },
    speedDial: {
        "& .MuiFab-label": {
            color: props => ThemesConsts[props.toolbarTheme].palette.primary.main,
        },
    },
}));

export default useStyles;
