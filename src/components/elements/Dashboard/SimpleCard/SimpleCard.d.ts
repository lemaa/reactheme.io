export interface IProps {
    title: string;
    description: string;
    cardType: "success" | "warning" | "error" | "chart";
    data?: any;
    icon?: string;
    srcIcon?: string;
    badgeText?: string;
    badgeType?: "success" | "warning" | "error";
    chartType?:
        | "area"
        | "line"
        | "bar"
        | "histogram"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "treemap"
        | "boxPlot"
        | "candlestick"
        | "radar"
        | "polarArea"
        | "rangeBar"
        | undefined;
}
