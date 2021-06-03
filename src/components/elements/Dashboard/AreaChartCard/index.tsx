import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/AreaChartCard/AreaChartCard";
import useStyles from "@Element/Dashboard/AreaChartCard/AreaChartCardStyle";
import { useAppSettings } from "@Context/index";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ThemesConsts } from "@Constant/index";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChartCard: React.FunctionComponent<IProps> = ({ title, description, data }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const datas = {
        series: data.series,
        options: {
            chart: {
                height: 350,
            },
            colors: [
                ThemesConsts[state.theme.main].palette.secondary.dark,
                ThemesConsts[state.theme.main].palette.primary.main,
                ThemesConsts[state.theme.main].palette.primary.main,
            ],
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                type: "datetime" as const,
                categories: data.categories,
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
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
                subheader={description}
            />
            <CardContent className={classes.AreaChartCardContent}>
                <Chart options={datas.options} series={datas.series} type="area" width="100%" height={350} />
            </CardContent>
        </Card>
    );
};
export { AreaChartCard };
