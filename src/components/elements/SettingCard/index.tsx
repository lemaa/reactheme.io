import React from "react";
import { Card, Typography, CardContent, Switch, FormGroup, FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, Grid, Divider } from "@material-ui/core";
import { IProps } from "@Element/SettingCard/SettingCard";
import useStyles from "@Element/SettingCard/SettingCardStyle";
import { useTranslation } from "next-i18next";
import { ThemeRadio } from "@Element/index";
import { useAppSettings } from "@Context/index";

const SettingCard: React.FunctionComponent<IProps> = ({ type, title, settingItem, currentThemeValue, themeList, handleSettingsChange, handleThemeChange }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        toolbarTheme: state.theme.toolbar,
    });

    const { t } = useTranslation();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.CardSettingTitle} variant="h6" component="h6">
                    {t(`setting.${title}`)}
                </Typography>
                {type === "layout" && (
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={5}>
                            <FormControl component="fieldset">
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Switch checked={settingItem ? settingItem.display : false} onChange={handleSettingsChange} name="display" color="primary" />}
                                        label={t("setting.display")}
                                        labelPlacement="top"
                                        classes={{
                                            label: classes.SettingsLabel,
                                            labelPlacementTop: classes.labelPlacementTop,
                                        }}
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        {settingItem && settingItem.position !== undefined && (
                            <Grid item xs={6}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" className={classes.SettingsLabel}>
                                        {t("setting.position")}
                                    </FormLabel>
                                    <RadioGroup
                                        row
                                        aria-label="position"
                                        name="position"
                                        defaultValue={settingItem.position}
                                        value={settingItem.position}
                                        onChange={handleSettingsChange}
                                    >
                                        <FormControlLabel
                                            classes={{ label: classes.SettingsLabel }}
                                            value="left"
                                            control={<Radio color="primary" name="position" />}
                                            label={t("setting.left")}
                                        />
                                        <FormControlLabel
                                            classes={{ label: classes.SettingsLabel }}
                                            value="right"
                                            control={<Radio color="primary" name="position" />}
                                            label={t("setting.right")}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        )}
                        {settingItem && title !== "navbar" && settingItem.style !== undefined && (
                            <Grid item xs={6}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" className={classes.SettingsLabel}>
                                        {t("setting.style")}
                                    </FormLabel>
                                    <RadioGroup row aria-label="style" name="style" defaultValue={settingItem.style} value={settingItem.style} onChange={handleSettingsChange}>
                                        <FormControlLabel
                                            classes={{ label: classes.SettingsLabel }}
                                            value="static"
                                            control={<Radio color="primary" name="style" />}
                                            label={t("setting.static")}
                                        />
                                        <FormControlLabel
                                            classes={{ label: classes.SettingsLabel }}
                                            value="fixed"
                                            control={<Radio color="primary" name="style" />}
                                            label={t("setting.fixed")}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        )}
                    </Grid>
                )}
                {type === "theme" && (
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl} fullWidth>
                                <RadioGroup
                                    row
                                    aria-label="theme"
                                    name="theme"
                                    defaultValue={currentThemeValue}
                                    value={currentThemeValue}
                                    onChange={handleThemeChange}
                                    style={{ padding: "0 10px" }}
                                >
                                    {Object.keys(themeList).map((item: string, index: number) => {
                                        const PrimaryColor = themeList[item].palette.primary.main;
                                        const SecondaryColor = themeList[item].palette.secondary.main;
                                        return <ThemeRadio key={index.toString()} value={item} PrimaryColor={PrimaryColor} SecondaryColor={SecondaryColor} />;
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                )}
            </CardContent>
        </Card>
    );
};
export { SettingCard };
