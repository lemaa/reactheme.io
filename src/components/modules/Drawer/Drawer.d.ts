export interface IProps {
    open: boolean;
    drawerWidth: number;
    drawerClassName?: string;
    drawerVariant: "permanent" | "persistent" | "temporary";
    handleDrawerToggle: () => void;
    ListDrawerItems: Array<any>;
    headerTitle?: string;
    prefetch?: any;
}
