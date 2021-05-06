import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>(() => ({
    boxContainer: {
        height: "auto",
        margin: "0 auto",
        position: "relative",
    },
    themeContainer: {
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "pointer",
    },
    themeHeader: {
        height: "30px",
    },
    themeBackground: {
        height: "100px",
        width: "100%",
        fontSize: "0.8em",
        textAlign: "justify",
        padding: "3px 0",
        writingMode: "vertical-rl",
    },
    themeButtons: {
        position: "absolute",
        display: "flex",
        bottom: "5px",
        right: "5px",
    },
    themeButton: {
        width: "20px",
        height: "15px",
        borderRadius: "4px",
        fontSize: "0.75em",
        marginLeft: "2px",
    },
    themeMain: {
        height: "80px",
        position: "relative",
        left: "5px",
        bottom: "7.6em",
        width: "90px",
    },
    themeTitle: {},
}));

export default useStyles;
