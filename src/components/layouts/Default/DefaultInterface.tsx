export type IProps = {
    children: React.ReactNode;
    onClick: () => void;
    open: boolean;
    drawerwidth: number;
};

export type IState = {
    drawerwidth: number;
};
