import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import theme from "@Style/base/theme";
import { ThemesConsts } from "@Constant/index";

const useStyles = makeStyles<Theme, { mainTheme: string; cardType: string }>(() =>
    createStyles({
        SimpleCard: {
            marginBottom: "15px",
        },
        header: {
            paddingBottom: "5px",
        },
        SCContent: {
            paddingTop: "5px",
        },
        SCHeader: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0",
            color: props => {
                if (props.cardType === "success") {
                    return theme.palette.success.light;
                }
                if (props.cardType === "error") {
                    return theme.palette.error.light;
                }
                if (props.cardType === "warning") {
                    return theme.palette.warning.light;
                }

                return ThemesConsts[props.mainTheme].palette.secondary.dark;
            },
        },
        SCTitle: {
            padding: theme.spacing(1),
            fontSize: "2.2rem",
            fontWeight: 500,
        },
        SCSubContent: {
            paddingTop: "10px",
        },
        SCcontentSubTitle: {
            fontSize: "1.5rem",
            marginTop: "-20px",
        },
    })
);

export default useStyles;
