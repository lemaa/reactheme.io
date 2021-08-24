import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import theme from "@Style/base/theme";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string }>(() =>
    createStyles({
        ChartCard: {
            marginBottom: "15px",
            height: "13em",
        },
        SCContent: {
            padding: "0",
        },
        SCHeader: {
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            padding: "10px",
        },
        SCIconContainer: {
            padding: theme.spacing(0),
        },
        SCTitle: {
            padding: theme.spacing(0),
            color: props => ThemesConsts[props.mainTheme].palette.text.primary,
        },
        SCDescription: {
            padding: theme.spacing(0),
            color: props => ThemesConsts[props.mainTheme].palette.text.disabled,
        },
        SCChart: {
            position: "relative",
            bottom: "0",
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
