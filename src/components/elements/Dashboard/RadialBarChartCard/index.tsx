import React from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { Box, Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/RadialBarChartCard/RadialBarChartCard";
import useStyles from "@Element/Dashboard/RadialBarChartCard/RadialBarChartCardStyle";
import { useAppSettings } from "@Context/index";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ThemesConsts } from "@Constant/index";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialBarChartCard: React.FunctionComponent<IProps> = ({ title, data }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const lineCap: "butt" | "round" | "square" | undefined = "round";
    const datas = {
        series: Object.values(data.series[0]),
        options: {
            chart: {
                height: 200,
            },
            colors: [
                ThemesConsts[state.theme.main].palette.secondary.dark,
                ThemesConsts[state.theme.main].palette.primary.dark,
                ThemesConsts[state.theme.main].palette.primary.main,
            ],
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: "22px",
                        },
                        value: {
                            fontSize: "16px",
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter(w: any) {
                                return w.config.series.reduce((a: any, b: any) => a + b);
                            },
                        },
                    },
                },
            },
            stroke: {
                lineCap,
            },
            labels: Object.keys(data.series[0]),
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
                <Chart options={datas.options} series={datas.series} type="radialBar" />
                <Box component="div" display="flex" flexDirection="column" justifyContent="flex-end">
                    {Object.keys(data.series[0]).map((label: string, index: number) => {
                        return (
                            <Box key={index.toString()} component="div" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                <Box component="span" display="flex" alignItems="center">
                                    <div
                                        className={clsx(classes.StatBullet, {
                                            [classes.StatBulletFinished]: label === "finished",
                                            [classes.StatBulletPending]: label === "pending",
                                            [classes.StatBulletRejected]: label === "rejected",
                                        })}
                                    />
                                    {label}
                                </Box>
                                <span>{data.series[0][label]}</span>
                            </Box>
                        );
                    })}
                </Box>
            </CardContent>
        </Card>
    );
};
export { RadialBarChartCard };
