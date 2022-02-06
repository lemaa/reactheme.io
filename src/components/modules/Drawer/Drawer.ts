export interface IProps {
    open: boolean;
    drawerWidth: number;
    drawerClassName?: string;
    drawerVariant: "permanent" | "persistent" | "temporary";
    handleDrawerToggle: () => void;
    ListDrawerItems: Array<any>;
    headerTitle?: React.ReactNode | string;
    prefetch?: any;
    theme?: "original" | "default";
}
