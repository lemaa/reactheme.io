import React from "react";
import { IProps } from "@Module/Settings/Settings";
import useStyles from "@Module/Settings/SettingsStyle";
import { useTranslation } from "next-i18next";
import { ThemesConsts } from "@Constant/index";
import { SettingCard } from "@Element/index";
import { useAppSettings } from "@Context/index";

const Settings: React.FunctionComponent<IProps> = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { state, dispatch } = useAppSettings();
    const SettingConfigConsts = state.layout;
    const SettingThemeConsts = state.theme;
    const handleSettingsChange = (event: any, title: string, type: string) => {
        if (type === "layout") {
            if (event.target.name === "display") {
                const itemToUpdate = event.target.name;
                SettingConfigConsts.config[title][itemToUpdate] = event.target.checked;
                dispatch({ type: "edit", layout: state.layout });
            } else {
                const itemToUpdate = event.target.name;
                SettingConfigConsts.config[title][itemToUpdate] = event.target.value;
                dispatch({ type: "edit", layout: state.layout });
            }
        } else if (type === "theme") {
            SettingThemeConsts[title] = event.target.value;
            dispatch({ type: "edit", theme: state.theme });
        }
    };

    return (
        <div className={classes.grow}>
            <div className={classes.layoutContainer}>
                <h4 className={classes.settingTitle}>{t("setting.layoutTitle")}</h4>
                <div className={classes.settingContent}>
                    {Object.keys(SettingConfigConsts.config).map((title: string, index: number) => {
                        return (
                            <SettingCard
                                type="layout"
                                title={title}
                                settingItem={SettingConfigConsts.config[title]}
                                key={index.toString()}
                                handleSettingsChange={event => handleSettingsChange(event, title, "layout")}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={classes.themeContainer}>
                <h4 className={classes.settingTitle}>{t("setting.themeTitle")}</h4>
                <div className={classes.settingContent}>
                    {Object.keys(SettingThemeConsts).map((title: string, index: number) => {
                        return (
                            <SettingCard
                                type="theme"
                                title={title}
                                themeList={ThemesConsts}
                                currentThemeValue={SettingThemeConsts[title]}
                                key={index.toString()}
                                handleThemeChange={event => handleSettingsChange(event, title, "theme")}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export { Settings };
