import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import theme from "@Style/base/theme";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string }>(() =>
    createStyles({
        AreaChartCard: {
            color: props => ThemesConsts[props.mainTheme].palette.text.primary,
            boxShadow: "-8px 12px 18px 0 rgb(25 42 70 / 13%)",
        },
        AreaChartCardContent: {},
        AreaChartCardIcon: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        AreaChartCardContentIcon: {
            padding: "10px",
        },
        AreaChartCardContentTitle: { padding: "5px" },
        AreaChartCardContentDescription: {
            padding: "5px",
            color: props => ThemesConsts[props.mainTheme].palette.text.disabled,
        },
        WMCBarDescription: {
            paddingTop: "0 !important",
            textAlign: "center",
            fontWeight: "bold",
        },
        WMCTitle: {
            color: props => ThemesConsts[props.mainTheme].palette.text.disabled,
            fontSize: "1rem",
        },
        WMCDescription: {
            color: props => ThemesConsts[props.mainTheme].palette.text.disabled,
            marginLeft: "5px",
            fontSize: "0.9rem",
        },
    })
);

export default useStyles;
