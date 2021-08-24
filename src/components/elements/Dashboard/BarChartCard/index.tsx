import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/BarChartCard/BarChartCard";
import useStyles from "@Element/Dashboard/BarChartCard/BarChartCardStyle";
import { useAppSettings } from "@Context/index";
import { MoreVert } from "@material-ui/icons";
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
                action={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    // eslint-disable-next-line prettier/prettier
                }
                title={title}
            />
            <CardContent className={classes.AreaChartCardContent}>
                <Grid container spacing={3}>
                    {data.description &&
                        data.description.map((item: any) => (
                            <Grid key={item.title} classes={{ root: classes.WMCBarDescription }} item sm={4} xs={4}>
                                <Typography className={classes.WMCTitle} component="div" align="center">
                                    {item.description}
                                </Typography>
                                <Typography className={classes.WMCDescription} component="div" align="center">
                                    {`${item.title} `}
                                </Typography>
                            </Grid>
                        ))}
                </Grid>
                <Chart options={datas.options} series={datas.series} type="bar" height={250} />
            </CardContent>
        </Card>
    );
};
export { BarChartCard };
