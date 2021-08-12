import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/RadarChartCard/RadarChartCard";
import useStyles from "@Element/Dashboard/RadarChartCard/RadarChartCardStyle";
import { useAppSettings } from "@Context/index";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const RadarChartCard: React.FunctionComponent<IProps> = ({ title, data }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const datas = {
        series: data.series,
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: data.categories,
            },
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
                <Chart options={datas.options} series={datas.series} type="radar" height={250} />
            </CardContent>
        </Card>
    );
};
export { RadarChartCard };
