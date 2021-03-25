import { makeStyles, Theme } from "@material-ui/core/styles";
import { IState } from "@Layout/Default/Default";

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
}));

export default useStyles;
