import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import theme from "@Style/base/theme";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string; cardType: string }>(() =>
    createStyles({
        SimpleCard: {
            height: "15em",
            marginBottom: "15px",
        },
        SCContent: {
            padding: props => (props.cardType === "chart" ? "0" : "16px"),
        },
        SCHeader: {
            display: "flex",
            flexDirection: "column",
            alignItems: props => (props.cardType === "chart" ? "right" : "center"),
            padding: props => (props.cardType === "chart" ? "10px" : "0"),
        },
        SCIcon: {
            width: props => (props.cardType === "chart" ? theme.spacing(7) : theme.spacing(10)),
            height: props => (props.cardType === "chart" ? theme.spacing(7) : theme.spacing(10)),
        },
        SCIconContainer: {
            padding: props => (props.cardType === "chart" ? theme.spacing(0) : theme.spacing(2)),
        },
        SCTitle: {
            padding: props => (props.cardType === "chart" ? theme.spacing(0) : theme.spacing(1)),
            color: props => (props.cardType === "chart" ? ThemesConsts[props.mainTheme].palette.text.primary : ThemesConsts[props.mainTheme].palette.secondary.dark),
        },
        SCDescription: {
            padding: theme.spacing(0),
            color: props => (props.cardType === "chart" ? ThemesConsts[props.mainTheme].palette.text.disabled : ThemesConsts[props.mainTheme].palette.secondary.dark),
        },
        SCChart: {
            position: "relative",
            bottom: "7em",
        },
    })
);

export default useStyles;
