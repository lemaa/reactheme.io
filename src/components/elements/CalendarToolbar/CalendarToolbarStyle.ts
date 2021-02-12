import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>(theme => ({
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
        color: `${theme.palette.primary.main} !important`,
        "&:hover": {
            backgroundColor: `${theme.palette.primary.light} !important`,
        },
        "&.rbc-active": {
            backgroundColor: `${theme.palette.primary.light} !important`,
            boxShadow: "none !important",
        },
    },
    viewNavigateToolbarLabel: {
        fontSize: "25px",
        fontWeight: 700,
        padding: "5px",
        textTransform: "uppercase",
        color: theme.palette.primary.main,
    },
}));

export { useStyles };
