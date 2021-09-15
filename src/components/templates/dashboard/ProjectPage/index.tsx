import React, { useEffect } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader, SimpleCard, EnhancedTable, DonutChartCard, RadarChartCard } from "@Element/index";
import { useTranslation } from "next-i18next";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDashboard } from "@Context/index";
// import Skeleton from "@material-ui/lab/Skeleton";

const ProjectPage: React.FunctionComponent<any> = ({ dashboardData }: any) => {
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
            <ContentHeader pathName="Project" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" display="flex" flexWrap="wrap" flexGrow={1} p={1}>
                <Grid container spacing={2}>
                    <Grid item md={3} sm={6} xs={12}>
                        <SimpleCard
                            title={t("dashboard.project.total")}
                            description={{ contentTitle: "30", contentSubTitle: "Due tasks" }}
                            subtitle="Completed: 10"
                            cardType="default"
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <SimpleCard title={t("dashboard.project.overdue")} description={{ contentTitle: "40", contentSubTitle: "Tasks" }} subtitle="Overdue: 9" cardType="error" />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <SimpleCard title={t("dashboard.project.issues")} description={{ contentTitle: "20", contentSubTitle: "Open" }} subtitle="Closed: 0" cardType="warning" />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <SimpleCard
                            title={t("dashboard.project.features")}
                            description={{ contentTitle: "11", contentSubTitle: "Proposals" }}
                            subtitle="Implemented: 8"
                            cardType="success"
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" justifyContent="space-between" p={1}>
                <Box p={1} width={isMobile ? "100%" : "auto"}>
                    {state && state.project_status && <DonutChartCard title="Project status" donutType="donut" data={state.project_status[0]} />}
                </Box>
                <Box p={1} width={isMobile ? "100%" : "auto"}>
                    {state && state.task_distribution && <RadarChartCard title="Task distribuation" data={state.task_distribution[0]} />}
                </Box>
                <Box p={1} width={isMobile ? "100%" : "auto"}>
                    {state && state.budget_distribution && <DonutChartCard title="Budget distribuation" donutType="pie" data={state.budget_distribution[0]} />}
                </Box>
            </Box>

            <Box component="div" p={1}>
                {state && state.budget_details && <EnhancedTable data={state.budget_details} tableTitle="Budget details" checkboxRows={false} />}
            </Box>
        </div>
    );
};

export { ProjectPage };
