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
        iconSpan: {
            verticalAlign: "text-bottom",
            margin: "0 5px",
        },
        AreaChartCardContentIcon: {
            padding: "10px",
        },
        AreaChartCardContentTitle: { padding: "5px" },
        AreaChartCardContentDescription: {
            padding: "5px",
            color: props => ThemesConsts[props.mainTheme].palette.text.disabled,
        },
    })
);

export default useStyles;
