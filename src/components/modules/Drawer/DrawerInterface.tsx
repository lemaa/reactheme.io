export  interface IProps {
    open: boolean;
    drawerWidth: number;
    drawerClassName?: string;
    drawerVariant?: "permanent" | "persistent" | "temporary";
    drawerAnchor?: "left" | "top" | "right" | "bottom";
    handleDrawerToggle: () => void;
    ListDrawerItems: Array<any>;
    headerTitle?: string;
  };
