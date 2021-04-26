export interface IProps {
    qbWidth: number;
    qbClassName?: string;
    qbAnchor?: "left" | "right";
    ListQbItems: Array<any>;
    defaultItem: {
        title: string;
        icon: JSX.Element;
        component: JSX.Element;
    };
}
