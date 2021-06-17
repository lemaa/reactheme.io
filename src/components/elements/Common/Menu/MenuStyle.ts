import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { headerTheme: string }>(() =>
    createStyles({
        menuContainer: {
            backgroundColor: props => ThemesConsts[props.headerTheme].palette.background.paper,
            border: props => `1px solid ${ThemesConsts[props.headerTheme].palette.text.disabled}`,
        },
        header: {
            color: props => ThemesConsts[props.headerTheme].palette.text.disabled,
            margin: 0,
            fontSize: "12px",
        },
        item: {
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: "12px",
            color: props => ThemesConsts[props.headerTheme].palette.text.primary,
        },
        menuIcon: {
            paddingLeft: "4px",
        },
    })
);

export default useStyles;
