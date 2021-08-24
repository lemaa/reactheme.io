export interface IProps {
    title: string;
    description: string;
    data: any;
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
