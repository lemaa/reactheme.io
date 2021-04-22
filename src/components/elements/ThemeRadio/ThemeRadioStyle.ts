import { IProps } from "@Element/ThemeRadio/ThemeRadio";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme, IProps>(() => ({
    SettingsRoot: {
        width: "18%",
        "& .MuiRadio-root": {
            display: "none",
            margin: "0px",
        },
        "& .MuiRadio-root+ .MuiFormControlLabel-label": {
            display: "inline-block",
            width: "50px",
            height: "25px",
            float: "left",
            margin: "0px 20px 20px 0px",
        },
        "& .MuiRadio-root+ .MuiFormControlLabel-label:before": {
            content: "''",
            display: "block",
            position: "relative",
            boxSizing: "border-box",
            left: "32px",
            marginLeft: "-20px",
            borderRadius: "15px",
            width: "16px",
            height: "50%",
            opacity: "0",
            transition: "0.3s",
        },
        "& .MuiRadio-root + .MuiFormControlLabel-label:before": {
            top: "-20%",
            borderTop: "16px solid #ffffff",
        },
        "& .Mui-checked + .MuiFormControlLabel-label::before": {
            top: "20%",
            opacity: 1,
            transition: "0.3s",
        },
        "& .MuiFormControlLabel-label": {
            backgroundColor: props => `${props.PrimaryColor}`,
            background: props => `linear-gradient(90deg, ${props.PrimaryColor} 0%, ${props.PrimaryColor} 49.9%, ${props.SecondaryColor} 50.1%, ${props.SecondaryColor} 100%)`,
        },
    },
}));

export default useStyles;
