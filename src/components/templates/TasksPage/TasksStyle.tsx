import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>(theme => ({
    sidebar: {
        left: "unset",
        height: "auto",
        top: "unset",
    },
    errorMessage: {
        fontSize: "1.5em",
        fontWeight: 600,
        color: theme.palette.text.disabled,
    },
}));

export default useStyles;
