export interface IProps {
    title: string;
    description: {
        contentTitle: string;
        contentSubTitle: string;
    };
    subtitle: string;
    cardType: "success" | "warning" | "error" | "default";
}
