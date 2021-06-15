import React from "react";
import dynamic from "next/dynamic";
import { Box, Card, CardContent, CardHeader, IconButton, LinearProgress, Typography } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/ProgressChartCard/ProgressChartCard";
import useStyles from "@Element/Dashboard/ProgressChartCard/ProgressChartCardStyle";
import { useAppSettings } from "@Context/index";
import { MoreVert } from "@material-ui/icons";

const ProgressChartCard: React.FunctionComponent<IProps> = ({ title, data }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const progressType = (value: number) => {
        if (value <= 25) {
            return classes.error;
        }
        if (value > 25 && value < 50) {
            return classes.warning;
        }
        if (value >= 50 && value <= 75) {
            return classes.primary;
        }
        return classes.success;
    };
    const getAvataricon = (icon: string) => {
        switch (icon) {
            case "BarChartOutlined": {
                const IconComponent = dynamic(() => import("@material-ui/icons/BarChartOutlined"), { ssr: true });
                return <IconComponent />;
            }
            case "MonetizationOnOutlined": {
                const IconComponent = dynamic(() => import("@material-ui/icons/MonetizationOnOutlined"), { ssr: true });
                return <IconComponent />;
            }
            case "ShowChartOutlined": {
                const IconComponent = dynamic(() => import("@material-ui/icons/ShowChartOutlined"), { ssr: true });
                return <IconComponent />;
            }
            default: {
                const IconComponent = dynamic(() => import("@material-ui/icons/DoneOutlined"), { ssr: true });
                return <IconComponent />;
            }
        }
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
                {data.series.map((item: any) => (
                    <Box key={item.name} display="flex" className={`${classes.boxContainer} ${progressType(item.data[0])}`}>
                        <Box>
                            <span className={classes.icon}>{getAvataricon(item.icon)}</span>
                        </Box>
                        <Box flexGrow={1}>
                            <Typography variant="body2" className={classes.dataContainer}>
                                <span className={classes.name}>{item.name}</span>
                                <span className={classes.value}>{item.data[0]}</span>
                            </Typography>
                            <LinearProgress variant="determinate" value={item.data[0]} className={classes.progress} />
                        </Box>
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
};
export { ProgressChartCard };
