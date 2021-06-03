import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/BarChartCard/BarChartCard";
import useStyles from "@Element/Dashboard/BarChartCard/BarChartCardStyle";
import { useAppSettings } from "@Context/index";
import { MoreVert, PersonOutline, TrendingUpOutlined, AirplayOutlined } from "@material-ui/icons";
import { ThemesConsts } from "@Constant/index";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChartCard: React.FunctionComponent<IProps> = ({ title, data }: IProps) => {
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
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            xaxis: {
                categories: data.categories,
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter(val: number) {
                        return `$ ${val} thousands`;
                    },
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
                        <MoreVert />
                    </IconButton>
                    // eslint-disable-next-line prettier/prettier
                  )}
                title={title}
            />
            <CardContent className={classes.AreaChartCardContent}>
                <Grid container spacing={3}>
                    <Grid className={classes.WMCMap} item md={4} xs={12}>
                        <Typography className={classes.WMCTitle} component="div" align="center">
                            <PersonOutline classes={{ root: classes.iconSpan }} />
                            Users
                        </Typography>
                        <Typography className={classes.WMCDescription} variant="body2" component="p" align="center">
                            61K
                        </Typography>
                    </Grid>
                    <Grid className={classes.WMCMap} item md={4} xs={12}>
                        <Typography className={classes.WMCTitle} component="div" align="center">
                            <AirplayOutlined classes={{ root: classes.iconSpan }} />
                            Sessions
                        </Typography>
                        <Typography className={classes.WMCDescription} variant="body2" component="p" align="center">
                            92K
                        </Typography>
                    </Grid>
                    <Grid className={classes.WMCMap} item md={4} xs={12}>
                        <Typography className={classes.WMCTitle} component="div" align="center">
                            <TrendingUpOutlined classes={{ root: classes.iconSpan }} />
                            Bounce Rate
                        </Typography>
                        <Typography className={classes.WMCDescription} variant="body2" component="p" align="center">
                            72.6%
                        </Typography>
                    </Grid>
                </Grid>
                <Chart options={datas.options} series={datas.series} type="bar" height={350} />
            </CardContent>
        </Card>
    );
};
export { BarChartCard };
