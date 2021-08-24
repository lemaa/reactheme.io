import { makeStyles, Theme } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string }>(() => ({
    viewNameToolbar: {
        textAlign: "right",
        padding: "0px !important",
    },
    viewNavigateToolbar: {
        margin: "5px",
        display: "flex",
    },

    IconButton: {
        border: "none !important",
        color: props => `${ThemesConsts[props.mainTheme].palette.primary.main} !important`,
        "&:hover": {
            borderBottom: props => `2px solid ${ThemesConsts[props.mainTheme].palette.primary.main}!important`,
            background: "transparent !important",
        },
        "&.rbc-active": {
            borderBottom: props => `2px solid ${ThemesConsts[props.mainTheme].palette.primary.main}!important`,
            boxShadow: "none !important",
            background: "transparent !important",
        },
    },
    viewNavigateToolbarLabel: {
        fontSize: "25px",
        fontWeight: 700,
        padding: "5px",
        textTransform: "uppercase",
        color: props => ThemesConsts[props.mainTheme].palette.primary.main,
    },
}));

export { useStyles };
