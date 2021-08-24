import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string }>(() =>
    createStyles({
        WorldMapCard: {
            color: props => ThemesConsts[props.mainTheme].palette.text.primary,
            boxShadow: "-8px 12px 18px 0 rgb(25 42 70 / 13%)",
        },
        WMCContent: {},
        WMCTitle: { padding: "5px" },
        WMCDescription: {
            padding: "5px",
            color: props => ThemesConsts[props.mainTheme].palette.text.disabled,
        },
        WMCCountries: {},
        WMCMap: {},
    })
);

export default useStyles;
