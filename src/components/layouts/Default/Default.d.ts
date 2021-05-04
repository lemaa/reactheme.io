export type IProps = {
    children: React.ReactNode;
    onClick: () => void;
    open: boolean;
    drawerwidth: number;
    quickBarWidth: number;
};

export type IState = {
    drawerWidth: number;
    quickBarWidth: number;
    quickBarPosition: string;
    mainTheme: string;
    drawerPosition: string;
};
