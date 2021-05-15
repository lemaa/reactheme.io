import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/SimpleCard/SimpleCard";
import useStyles from "@Element/Dashboard/SimpleCard/SimpleCardStyle";
import { useAppSettings } from "@Context/index";
import { cdnImage } from "@Util/index";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SimpleCard: React.FunctionComponent<IProps> = ({ title, description, cardType, icon = "", srcIcon, data }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
        cardType,
    });
    let srcImgCdn: string = "";
    if (cardType === "success") {
        srcImgCdn = cdnImage("clapping.svg", "static/images/common");
    } else if (cardType === "warning") {
        srcImgCdn = cdnImage("siren.svg", "static/images/common");
    } else if (cardType === "error") {
        srcImgCdn = cdnImage("warning.svg", "static/images/common");
    } else {
        srcImgCdn = cdnImage(icon, srcIcon);
    }

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
        <Card variant="outlined" className={classes.SimpleCard}>
            <CardContent className={classes.SCContent}>
                <div className={classes.SCHeader}>
                    <div className={classes.SCIconContainer}>
                        <Avatar alt="success" src={srcImgCdn} className={classes.SCIcon} />
                    </div>
                    <Typography className={classes.SCTitle} variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.SCDescription} variant="body2" component="p">
                        {description}
                    </Typography>
                </div>
                {cardType === "chart" && (
                    <div className={classes.SCChart}>
                        <Chart options={chartOptions.options} series={chartOptions.series} type="area" />
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
export { SimpleCard };
