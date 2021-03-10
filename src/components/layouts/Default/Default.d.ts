export type IProps = {
    children: React.ReactNode;
    onClick: () => void;
    open: boolean;
    drawerwidth: number;
    quickBarWidth: number;
};

export type IState = {
    drawerwidth: number;
    quickBarWidth: number;
};
