import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/DonutChartCard/DonutChartCard";
import useStyles from "@Element/Dashboard/DonutChartCard/DonutChartCardStyle";
import { useAppSettings } from "@Context/index";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
type Aaaa = "bottom" | "left" | "right" | "top" | undefined;
const DonutChartCard: React.FunctionComponent<IProps> = ({ title, data, donutType }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const items = Object.keys(data).map(key => data[key]);
    const labels = Object.keys(data);
    const ddd: Aaaa = "bottom";
    const datas = {
        series: items,
        options: {
            labels,
            legend: {
                position: ddd,
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    };

    return (
        <Card variant="outlined" className={classes.AreaChartCard}>
            <CardHeader
                // eslint-disable-next-line prettier/prettier
                action={(
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    // eslint-disable-next-line prettier/prettier
                  )}
                title={title}
            />
            <CardContent className={classes.AreaChartCardContent}>
                <Chart options={datas.options} series={datas.series} type={donutType} height={250} />
            </CardContent>
        </Card>
    );
};
export { DonutChartCard };
