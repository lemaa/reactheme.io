export interface IProps {
    qbWidth: number;
    qbClassName?: string;
    ListQbItems: Array<any>;
    defaultItem: {
        title: string;
        icon: JSX.Element;
        component: JSX.Element;
    };
}
