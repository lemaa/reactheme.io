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
        AreaChartCardContentIcon: {
            padding: "10px",
        },
        AreaChartCardContentTitle: { padding: "5px" },
        AreaChartCardContentDescription: {
            padding: "5px",
            color: props => ThemesConsts[props.mainTheme].palette.text.disabled,
        },
        StatBullet: {
            marginRight: "5px",
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            background: "transparent",
        },
        StatBulletFinished: {
            border: "3px solid #7c63f9",
        },
        StatBulletPending: {
            border: "3px solid #ffa048",
        },

        StatBulletRejected: {
            border: "3px solid #ec5759",
        },
    })
);

export default useStyles;
