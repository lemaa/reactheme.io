import { makeStyles, Theme } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { drawerWidth: number; navbarTheme: string }>(theme => ({
    toolbar: {
        color: props => ThemesConsts[props.navbarTheme].palette.primary.contrastText,
        padding: "5px",
        minHeight: "56px",
        textAlign: "center",
        backgroundColor: props => ThemesConsts[props.navbarTheme].palette.primary.main,
        fontSize: "2rem",
        fontStyle: "italic",
        fontWeight: 500,
        ...theme.mixins.toolbar,
    },
    drawerContainer: {
        height: "85%",
    },
    drawerPaper: {
        width: props => `${props.drawerWidth}px`,
        border: "none",
        overflow: "hidden",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)",
        backgroundColor: props => ThemesConsts[props.navbarTheme].palette.primary.main,
    },
    listSubHeader: {
        textTransform: "uppercase",
        color: props => ThemesConsts[props.navbarTheme].palette.text.disabled,
    },
    listMenuIcon: {
        color: props => ThemesConsts[props.navbarTheme].palette.primary.contrastText,
        minWidth: "35px",
    },

    listMenuText: {
        fontSize: "13px",
        textTransform: "capitalize",
        color: props => ThemesConsts[props.navbarTheme].palette.primary.contrastText,
    },
    nested: {
        paddingLeft: theme.spacing(7),
    },
    subItem: {
        backgroundColor: props => ThemesConsts[props.navbarTheme].palette.primary.dark,
    },
    ListItemContainer: {
        "&:hover, &:hover $listMenuIcon, &:hover $listMenuText": {
            color: props => ThemesConsts[props.navbarTheme].palette.primary.contrastText,
            fontWeight: "500",
            backgroundColor: props => ThemesConsts[props.navbarTheme].palette.primary.dark,
        },
    },
}));

export default useStyles;
