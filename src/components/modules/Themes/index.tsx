import React from "react";
import { IProps } from "@Module/Themes/Themes";
import useStyles from "@Module/Themes/ThemesStyle";
import { useTranslation } from "next-i18next";
import { ThemesConsts } from "@Constant/index";
import { useAppSettings } from "@Context/index";
import { Box, Paper } from "@material-ui/core";

const Themes: React.FunctionComponent<IProps> = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { state, dispatch } = useAppSettings();
    const SettingThemeConsts = state.theme;
    const handleThemeChange = (title: string) => {
        Object.keys(SettingThemeConsts).forEach(key => {
            SettingThemeConsts[key] = title;
        });
        dispatch({ type: "edit", theme: SettingThemeConsts });
    };

    return (
        <div className={classes.grow}>
            <div className={classes.themeContainer}>
                <h5 className={classes.settingDescription}>
                    * Selected color scheme will be applied to all theme layout elements (navbar, toolbar, etc.). You can also select a different color scheme for each layout
                    element at theme settings.
                </h5>
                <Box className={classes.themeContent} display="flex" flexWrap="wrap" justifyContent="center">
                    {Object.keys(ThemesConsts).map((title: string, index: number) => {
                        const headerBgColor = ThemesConsts[title].palette.primary.main;
                        const headerTextColor = ThemesConsts[title].palette.primary.contrastText;
                        const primaryButtonBgColor = ThemesConsts[title].palette.primary.main;
                        const primaryButtonTextColor = ThemesConsts[title].palette.primary.contrastText;
                        const secondaryButtonBgColor = ThemesConsts[title].palette.secondary.main;
                        const secondaryButtonTextColor = ThemesConsts[title].palette.secondary.contrastText;
                        const mainBgColor = ThemesConsts[title].palette.background.default;
                        const mainTextColor = ThemesConsts[title].palette.text.primary;
                        const whiteColor = ThemesConsts[title].palette.common.white;
                        const paperBgColor = ThemesConsts[title].palette.background.paper;
                        const paperTextColor = ThemesConsts[title].palette.text.primary;

                        return (
                            <Box className={classes.boxContainer} key={index.toString()} flexGrow={1} width="45%" textAlign="center">
                                <Box className={classes.themeContainer} width={130} height={130} bgcolor={whiteColor} boxShadow={2} onClick={() => handleThemeChange(title)}>
                                    <div className={classes.themeHeader} style={{ color: headerTextColor, backgroundColor: headerBgColor }}>
                                        {t("setting.header")}
                                    </div>
                                    <div className={classes.themeButtons}>
                                        <div className={classes.themeButton} style={{ color: primaryButtonTextColor, backgroundColor: primaryButtonBgColor }}>
                                            P
                                        </div>
                                        <div className={classes.themeButton} style={{ color: secondaryButtonTextColor, backgroundColor: secondaryButtonBgColor }}>
                                            S
                                        </div>
                                    </div>

                                    <div className={classes.themeBackground} style={{ color: mainTextColor, backgroundColor: mainBgColor }}>
                                        {t("setting.background")}
                                    </div>
                                    <Paper className={classes.themeMain} elevation={1} style={{ color: paperTextColor, backgroundColor: paperBgColor }}>
                                        {t("setting.paper")}
                                    </Paper>
                                </Box>
                                <h4 className={classes.themeTitle}>{title}</h4>
                            </Box>
                        );
                    })}
                </Box>
            </div>
        </div>
    );
};
export { Themes };
