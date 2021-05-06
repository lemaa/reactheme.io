import { makeStyles, Theme } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { toolbarTheme: string }>(() => ({
    root: {
        margin: "15px 0",
        border: props => `1px solid ${ThemesConsts[props.toolbarTheme].palette.primary.light}`,
    },
    CardSettingTitle: {
        fontSize: "14px",
        marginBottom: "15px",
    },
    SettingsLabel: {
        color: "rgba(0, 0, 0, 0.54)",
        padding: 0,
        fontSize: "0.8rem",
        fontWeight: 400,
    },
    labelPlacementTop: {
        margin: "unset",
        alignItems: "start",
    },
}));

export default useStyles;
