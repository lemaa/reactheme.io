import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>(() =>
    createStyles({
        header: {
            color: "#878793",
            margin: 0,
            fontSize: "12px",
        },
        item: {
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: "12px",
        },
        menuIcon: {
            paddingLeft: "4px",
        },
    })
);

export default useStyles;
