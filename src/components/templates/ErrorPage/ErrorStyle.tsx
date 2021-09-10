import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>(theme => ({
    mainContainer: {
        width: "100%",
        minHeight: "50vh",
        maxWidth: "51.2rem",
        textAlign: "center",
    },
    errorCode: {
        fontSize: "5em",
    },
    errorMessage: {
        fontSize: "1.5em",
        fontWeight: 600,
        color: theme.palette.text.disabled,
    },
    homeButton: {},
}));

export default useStyles;
