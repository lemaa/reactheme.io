import { IProps } from "@Element/QuickBar/QuickBar";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, IProps>(theme => ({
    toolbar: {
        color: "#fff",
        padding: "5px",
        minHeight: "56px",
        textAlign: "center",
        backgroundColor: "#050517",
        fontSize: "2rem",
        fontStyle: "italic",
        fontWeight: 500,
        ...theme.mixins.toolbar,
    },
    drawerContainer: {
        height: "100%",
    },
    drawerPaper: {
        width: props => `${props.qbWidth}px`,
        overflow: "hidden",
    },
    listSubHeader: {
        textTransform: "uppercase",
    },
    listMenuIcon: {
        color: "#050517",
        minWidth: "35px",
    },

    listMenuText: {
        fontSize: "13px",
        textTransform: "capitalize",
    },
    nested: {
        paddingLeft: theme.spacing(7),
    },
    subItem: {
        backgroundColor: "#f5f5f5",
    },
    ListItemContainer: {
        "&:hover, &:hover $listMenuIcon": {
            color: theme.palette.primary.main,
            fontWeight: "500",
            backgroundColor: "#fff",
        },
    },
    quickbarDetails: {
        position: "absolute",
        right: "59px",
        top: 0,
        background: "#fff",
        height: "100%",
        width: "400px",
        transform: "translateX(120%)",
        transition: "0.3s",
        zIndex: 9999,
    },
    quickbarDetailsOpen: {
        transform: "translateX(-1px)",
        boxShadow: "-3px 2px 5px 0 rgba(0, 0, 0, .16)",
    },
    quickbarDetailsTitle: {
        padding: "15px",
    },
    closeButton: {
        position: "absolute",
        right: 0,
    },
    quickbarDetailsContent: {
        padding: "15px",
    },
}));

export default useStyles;
