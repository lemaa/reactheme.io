import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/ChartCard/ChartCard";
import useStyles from "@Element/Dashboard/ChartCard/ChartCardStyle";
import { useAppSettings } from "@Context/index";
import { ThemesConsts } from "@Constant/index";
import { Badge } from "@Element/Common/index";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartCard: React.FunctionComponent<IProps> = ({ title, description, badgeText = "", badgeType = "success", data, chartType = "area" }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const [badgeBgColor, setBadgeBgColor] = React.useState<string>("");

    useEffect(() => {
        const handleBadgeType = () => {
            if (badgeType === "warning") {
                setBadgeBgColor("#ffc107");
            } else if (badgeType === "error") {
                setBadgeBgColor("#e91e63");
            } else {
                setBadgeBgColor("#76e410");
            }
        };
        handleBadgeType();
    }, [badgeBgColor, badgeType]);
    const chartOptions = {
        series: data,
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: [
                ThemesConsts[state.theme.main].palette.secondary.dark,
                ThemesConsts[state.theme.main].palette.primary.dark,
                ThemesConsts[state.theme.main].palette.primary.main,
            ],
            grid: {
                show: false,
            },
            xaxis: {
                labels: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
        },
    };
    return (
        <Card variant="outlined" className={classes.ChartCard}>
            <CardContent className={classes.SCContent}>
                <Box className={classes.SCHeader}>
                    <Box className={classes.SCIconContainer} display="flex" justifyContent="space-between" alignItems="center">
                        <div>
                            <Typography className={classes.SCTitle} variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography className={classes.SCDescription} variant="body2" component="p">
                                {description}
                            </Typography>
                        </div>
                        {badgeText.length > 0 && <Badge text={badgeText} bgColor={badgeBgColor} textColor="#FFFFFF" />}
                    </Box>
                </Box>
                <div className={classes.SCChart}>
                    <Chart options={chartOptions.options} series={chartOptions.series} type={chartType} height={120} />
                </div>
            </CardContent>
        </Card>
    );
};
export { ChartCard };
