import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import theme from "@Style/base/theme";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string }>(() =>
    createStyles({
        FelicitationsCard: {
            marginBottom: "15px",
            height: "14em",
        },
        SCContent: {
            padding: theme.spacing(1),
        },
        SCHeader: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0",
        },
        SCIcon: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        SCIconContainer: {
            padding: theme.spacing(1),
        },
        SCTitle: {
            padding: theme.spacing(1),
            color: props => ThemesConsts[props.mainTheme].palette.secondary.dark,
        },
        SCDescription: {
            padding: theme.spacing(0),
            color: props => ThemesConsts[props.mainTheme].palette.secondary.dark,
        },
        SCChart: {
            position: "relative",
            bottom: "5em",
        },
        badge: {
            background: "#76e410",
            color: "white",
            padding: "2px 15px",
            borderRadius: "5px",
            fontWeight: "bold",
        },
    })
);

export default useStyles;
