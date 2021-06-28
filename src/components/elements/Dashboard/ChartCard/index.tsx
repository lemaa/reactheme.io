import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, Typography, Avatar, Box } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/ChartCard/ChartCard";
import useStyles from "@Element/Dashboard/ChartCard/ChartCardStyle";
import { useAppSettings } from "@Context/index";
import { cdnImage } from "@Util/index";
import { ThemesConsts } from "@Constant/index";
import { Badge } from "@Element/Common/index";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartCard: React.FunctionComponent<IProps> = ({ title, description, badgeText = "", badgeType = "success", icon = "", srcIcon, data, chartType = "area" }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const [srcImgCdn, setSrcImgCdn] = React.useState<"" | string>("");
    const [badgeBgColor, setBadgeBgColor] = React.useState<"" | string>("");

    useEffect(() => {
        const handleIcon = () => {
            setSrcImgCdn(cdnImage(icon, srcIcon));
        };
        const handleBadgeType = () => {
            if (badgeType === "warning") {
                setBadgeBgColor("#ffc107");
            } else if (badgeType === "error") {
                setBadgeBgColor("#e91e63");
            } else {
                setBadgeBgColor("#76e410");
            }
        };
        handleIcon();
        handleBadgeType();
    }, [srcImgCdn, badgeBgColor, icon, srcIcon, badgeType]);
    const chartOptions = {
        series: data,
        options: {
            chart: {
                height: "auto",
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
                        <Avatar alt="success" src={srcImgCdn} className={classes.SCIcon} />
                        {badgeText.length > 0 && <Badge text={badgeText} bgColor={badgeBgColor} textColor="#FFFFFF" />}
                    </Box>
                    <Typography className={classes.SCTitle} variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.SCDescription} variant="body2" component="p">
                        {description}
                    </Typography>
                </Box>
                <div className={classes.SCChart}>
                    <Chart options={chartOptions.options} series={chartOptions.series} type={chartType} />
                </div>
            </CardContent>
        </Card>
    );
};
export { ChartCard };
