import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import theme from "@Style/base/theme";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string }>(() =>
    createStyles({
        AreaChartCard: {
            color: props => ThemesConsts[props.mainTheme].palette.text.primary,
        },
        AreaChartCardContent: {},
        AreaChartCardIcon: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        boxContainer: {
            marginBottom: "1.68rem",
        },
        success: {
            "& $icon": {
                backgroundColor: "rgba(57, 218, 138, .2)",
                color: "#39DA8A",
            },
            "& $progress": {
                "& .MuiLinearProgress-barColorPrimary": {
                    backgroundColor: "#39DA8A",
                },
            },
        },
        error: {
            "& $icon": {
                backgroundColor: "rgba(255, 91, 92, .2)",
                color: "#FF5B5C",
            },
            "& $progress": {
                "& .MuiLinearProgress-barColorPrimary": {
                    backgroundColor: "#FF5B5C",
                },
            },
        },
        warning: {
            "& $icon": {
                backgroundColor: "rgba(253, 172, 65, .2)",
                color: "#FDAC41",
            },
            "& $progress": {
                "& .MuiLinearProgress-barColorPrimary": {
                    backgroundColor: "#FDAC41",
                },
            },
        },
        icon: {
            display: "flex",
            whiteSpace: "nowrap",
            borderRadius: "50%",
            textAlign: "center",
            margin: "5px",
            fontSize: "1.3em",
            padding: "10px",
            backgroundColor: props => ThemesConsts[props.mainTheme].palette.primary.light,
            color: props => ThemesConsts[props.mainTheme].palette.primary.main,
        },
        dataContainer: {
            marginBottom: "0.6rem",
        },
        name: {},
        value: {
            float: "right",
        },
        progress: {
            "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: props => ThemesConsts[props.mainTheme].palette.primary.main,
            },
        },
    })
);

export default useStyles;
