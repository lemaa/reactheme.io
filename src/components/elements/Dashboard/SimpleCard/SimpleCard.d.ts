export interface IProps {
    title: string;
    description: string;
    cardType: "success" | "warning" | "error" | "chart";
    data?: any;
    icon?: string;
    srcIcon?: string;
}
