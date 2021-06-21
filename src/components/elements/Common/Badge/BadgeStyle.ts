import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, { bgColor: string; textColor: string }>(() => ({
    badge: {
        background: props => props.bgColor,
        color: props => props.textColor,
        padding: "2px 15px",
        borderRadius: "5px",
        fontWeight: "bold",
    },
}));

export { useStyles };
