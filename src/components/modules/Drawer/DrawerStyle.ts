import { IProps } from "@Module/Drawer/Drawer";
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
        height: "85%",
    },
    drawerPaper: {
        width: props => `${props.drawerWidth}px`,
        border: "none",
        overflow: "hidden",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, .16), 0 2px 10px 0 rgba(0, 0, 0, .12)",
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
}));

export default useStyles;
