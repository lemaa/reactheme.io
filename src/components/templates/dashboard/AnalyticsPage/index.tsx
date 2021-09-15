import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader, FelicitationsCard, AreaChartCard, ChartCard, WorldMapCard, RadialBarChartCard, BarChartCard, ProgressChartCard } from "@Element/index";
import { useTranslation } from "next-i18next";
import { useDashboard } from "@Context/index";
import Skeleton from "@material-ui/lab/Skeleton";
import { useTheme } from "@material-ui/core/styles";

const AnalyticsPage: React.FunctionComponent<any> = ({ dashboardData }: any) => {
    const { t } = useTranslation();
    const { state, dispatch } = useDashboard();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );
    useEffect(() => {
        if (dashboardData) {
            dispatch({
                type: "FETCH_DATA",
                payload: dashboardData,
            });
        }
    }, [dashboardData, dispatch]);

    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Analytics" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} display="flex" flexDirection="column" width={isMobile ? "100%" : "auto"}>
                    <FelicitationsCard
                        title={t("dashboard.congrats", { username: "Amel" })}
                        description={t("dashboard.acomplished", { tasks: "57.6% more tasks" })}
                        cardType="success"
                    />
                    {state && state.stock_analytics ? (
                        <ChartCard title="38.4k" description="Orders Received" data={state.stock_analytics.series} badgeType="success" badgeText="+ 200 new data" />
                    ) : (
                        <Skeleton animation="wave" variant="rect" height={280} />
                    )}
                </Box>
                <Box p={1} flexGrow={1}>
                    {state && state.views_analytics ? (
                        <AreaChartCard title="Visitors & Page views" description="Unique visitors by month" data={state.views_analytics} />
                    ) : (
                        <Skeleton animation="wave" variant="rect" height={500} />
                    )}
                </Box>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} flexGrow={1}>
                    {state && state.website_analytics ? (
                        <BarChartCard title="Website Analytics" data={state.website_analytics} />
                    ) : (
                        <Skeleton animation="wave" variant="rect" height={520} />
                    )}
                </Box>
                <Box p={1} display="flex" flexDirection="column" justifyContent="space-between" width={isMobile ? "100%" : "auto"}>
                    {state && state.stock_analytics ? (
                        <>
                            <ChartCard
                                title="38.4k"
                                description="Orders Received"
                                data={state.stock_analytics.series}
                                chartType="line"
                                badgeType="error"
                                badgeText="- 200 new data"
                            />
                            <ChartCard
                                title="38.4k"
                                description="Orders Received"
                                data={state.stock_analytics.series}
                                chartType="bar"
                                badgeType="warning"
                                badgeText="+ 200 new data"
                            />
                        </>
                    ) : (
                        <>
                            <Skeleton animation="wave" variant="rect" width={250} height={280} />
                            <Skeleton animation="wave" variant="rect" width={250} height={280} />
                        </>
                    )}
                </Box>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} width={isMobile ? "100%" : "auto"}>
                    {state && state.support_tracker ? (
                        <RadialBarChartCard title="Support Tracker" data={state.support_tracker} />
                    ) : (
                        <Skeleton animation="wave" variant="rect" height={280} />
                    )}
                </Box>
                <Box p={1} flexGrow={1} width={isMobile ? "100%" : "auto"}>
                    {state && state.activities_tracker ? (
                        <ProgressChartCard title="Activity" data={state.activities_tracker} />
                    ) : (
                        <Skeleton animation="wave" variant="rect" height={280} />
                    )}
                </Box>
                <Box p={1} width={isMobile ? "100%" : "auto"}>
                    {state && state.support_tracker ? (
                        <RadialBarChartCard title="Support Tracker" data={state.support_tracker} />
                    ) : (
                        <Skeleton animation="wave" variant="rect" height={280} />
                    )}
                </Box>
            </Box>

            <Box component="div" p={1}>
                {state && state.worldmap_analytics ? (
                    <WorldMapCard title="Sessions by country" description="Unique visitors by month" data={state.worldmap_analytics} />
                ) : (
                    <Skeleton animation="wave" variant="rect" height={320} />
                )}
            </Box>
        </div>
    );
};

export { AnalyticsPage };
