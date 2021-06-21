import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader, SimpleCard, AreaChartCard, WorldMapCard, DonutChartCard, BarChartCard, ProgressChartCard } from "@Element/index";
import { useTranslation } from "next-i18next";
import { useDashboard } from "@Context/index";
import Skeleton from "@material-ui/lab/Skeleton";

const AnalyticsPage: React.FunctionComponent<any> = ({ dashboardData }: any) => {
    const { t } = useTranslation();
    const { state, dispatch } = useDashboard();
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
                <Box p={1} display="flex" flexDirection="column">
                    <SimpleCard title={t("dashboard.congrats", { username: "Amel" })} description={t("dashboard.acomplished", { tasks: "57.6% more tasks" })} cardType="success" />
                    {state && state.stock_analytics ? (
                        <SimpleCard
                            title="38.4k"
                            description="Orders Received"
                            cardType="chart"
                            data={state.stock_analytics.series}
                            icon="received.svg"
                            srcIcon="static/images/common"
                            badgeType="success"
                            badgeText="+ 200 new data"
                        />
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
                <Box p={1} display="flex" flexDirection="column">
                    {state && state.stock_analytics ? (
                        <>
                            <SimpleCard
                                title="38.4k"
                                description="Orders Received"
                                cardType="chart"
                                data={state.stock_analytics.series}
                                icon="received.svg"
                                srcIcon="static/images/common"
                                chartType="line"
                                badgeType="error"
                                badgeText="- 200 new data"
                            />
                            <SimpleCard
                                title="38.4k"
                                description="Orders Received"
                                cardType="chart"
                                data={state.stock_analytics.series}
                                icon="received.svg"
                                srcIcon="static/images/common"
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
                <Box p={1}>
                    {state && state.support_tracker ? (
                        <DonutChartCard title="Support Tracker" data={state.support_tracker} />
                    ) : (
                        <Skeleton animation="wave" variant="rect" height={280} />
                    )}
                </Box>
                <Box p={1} flexGrow={1}>
                    {state && state.activities_tracker ? (
                        <ProgressChartCard title="Activity" data={state.activities_tracker} />
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
