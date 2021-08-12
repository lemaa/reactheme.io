import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@material-ui/core";
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
    const datas = {
        series: data.series,
        options: {
            chart: {
                height: 250,
                offsetY: -50,
            },
            colors: [
                ThemesConsts[state.theme.main].palette.secondary.dark,
                ThemesConsts[state.theme.main].palette.primary.dark,
                ThemesConsts[state.theme.main].palette.primary.main,
            ],
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: "16px",
                            color: undefined,
                            offsetY: -10,
                        },
                        value: {
                            offsetY: 10,
                            fontSize: "22px",
                            color: undefined,
                            formatter(val: number) {
                                return `${val}%`;
                            },
                        },
                    },
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
            },
            stroke: {
                dashArray: 4,
            },
            labels: ["Completed Tasks"],
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
                <Chart options={datas.options} series={datas.series} type="radialBar" height={250} />
                <Grid container spacing={3}>
                    <Grid className={classes.WMCMap} item md={4} xs={12}>
                        <Typography className={classes.WMCTitle} component="div" align="center">
                            New Tickets
                        </Typography>
                        <Typography className={classes.WMCDescription} variant="body2" component="p" align="center">
                            29
                        </Typography>
                    </Grid>
                    <Grid className={classes.WMCMap} item md={4} xs={12}>
                        <Typography className={classes.WMCTitle} component="div" align="center">
                            Open Tickets
                        </Typography>
                        <Typography className={classes.WMCDescription} variant="body2" component="p" align="center">
                            63
                        </Typography>
                    </Grid>
                    <Grid className={classes.WMCMap} item md={4} xs={12}>
                        <Typography className={classes.WMCTitle} component="div" align="center">
                            Response Time
                        </Typography>
                        <Typography className={classes.WMCDescription} variant="body2" component="p" align="center">
                            1d
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
export { RadialBarChartCard };
