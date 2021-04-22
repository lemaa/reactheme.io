export interface IProps {
    type: string;
    title: string;
    settingItem?: {
        display: boolean;
        position?: string;
        style: string;
    };
    themeList?: any;
    currentThemeValue?: string;
    handleSettingsChange?: (event: any) => void;
    handleThemeChange?: (event: any) => void;
}
