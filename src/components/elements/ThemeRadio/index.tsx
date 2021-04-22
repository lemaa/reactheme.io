import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";
import { IProps } from "@Element/ThemeRadio/ThemeRadio";
import useStyles from "@Element/ThemeRadio/ThemeRadioStyle";

const ThemeRadio: React.FunctionComponent<IProps> = ({ PrimaryColor, SecondaryColor, value }: IProps) => {
    const classes = useStyles({
        PrimaryColor,
        SecondaryColor,
        value,
    });
    return (
        <FormControlLabel
            classes={{
                root: classes.SettingsRoot,
            }}
            value={value}
            control={<Radio color="primary" name="theme" />}
            label=""
        />
    );
};
export { ThemeRadio };
