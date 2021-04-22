import { IProps } from "@Element/SettingCard/SettingCard";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, IProps>(() => ({
    root: {
        margin: "15px 0",
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
