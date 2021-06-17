import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, { headerTheme: string }>(() => ({
    root: {
        minWidth: "30px",
    },
    Languagecontainer: {
        position: "relative",
        padding: "15px 0px",
    },
    flagPicture: {
        width: "20px",
        height: "20px",
    },
    ContainerText: {
        padding: "12px 5px!important",
        marginTop: "2px",
    },
    quickbarDetails: {
        position: "absolute",
        top: "50px",
        left: "15px",
        background: "#fff",
        height: "auto",
        width: "100px",
        transform: "translateX(120%)",
        transition: "0.3s",
        zIndex: 9999,
        display: "none",
    },
    quickbarDetailsOpen: {
        transform: "translateX(-1px)",
        boxShadow: "-3px 2px 5px 0 rgba(0, 0, 0, .16)",
        display: "block",
    },
    languageName: {
        "& span": {
            fontSize: "0.8rem",
            textTransform: "capitalize",
            color: "black",
        },
    },
    languageAbbrName: {
        fontSize: "0.8rem",
        fontWeight: "bold",
    },
}));

export { useStyles };
