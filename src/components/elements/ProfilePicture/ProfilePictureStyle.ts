import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { headerTheme: string }>(() =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        ContainerText: {
            textAlign: "end",
            padding: "10px",
        },
        name: {
            fontWeight: 700,
            lineHeight: 1.5,
            textTransform: "capitalize",
            fontSize: "13px",
        },
        role: {
            color: props => ThemesConsts[props.headerTheme].palette.text.disabled,
            fontSize: "10px",
            textTransform: "capitalize",
        },
    })
);

export default useStyles;
