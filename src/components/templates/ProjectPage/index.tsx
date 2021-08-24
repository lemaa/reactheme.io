import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader, SimpleCard, EnhancedTable, DonutChartCard, RadarChartCard } from "@Element/index";
import { useTranslation } from "next-i18next";
// import { useDashboard } from "@Context/index";
// import Skeleton from "@material-ui/lab/Skeleton";

const ProjectPage: React.FunctionComponent<any> = () => {
    const { t } = useTranslation();
    // const { state, dispatch } = useDashboard();
    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );

    const data = {
        budget_details: [
            {
                Budget_Type: "Design",
                Total_Budget: "$14,880.00",
                Spent: 94.08,
                Remaining: "%5.92",
            },
            {
                Budget_Type: "Coding",
                Total_Budget: "$21,080.00",
                Spent: 81.78,
                Remaining: "%18.22",
            },
            {
                Budget_Type: "Marketing",
                Total_Budget: "$34,720.00",
                Spent: 10.13,
                Remaining: "%89.87",
            },
            {
                Budget_Type: "Testing",
                Total_Budget: "$14,880.00",
                Spent: 0.0,
                Remaining: "%100.00",
            },
            {
                Budget_Type: "others",
                Total_Budget: "$14,880.00",
                Spent: 0.0,
                Remaining: "%100.00",
            },
        ],
        project_status: [{ completed: 65, "in progress": 24, behind: 9 }],
        budget_distribution: [{ wireframe: 12, design: 14, coding: 29, marketing: 45, extra: 5 }],
        task_distribution: [
            {
                series: [
                    {
                        name: "Series 1",
                        data: [80, 50, 30, 40, 100, 20],
                    },
                    {
                        name: "Series 2",
                        data: [20, 30, 40, 80, 20, 80],
                    },
                    {
                        name: "Series 3",
                        data: [44, 76, 78, 13, 43, 10],
                    },
                ],
                categories: ["January", "February", "March", "April", "May", "June"],
            },
        ],
    };
    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Project" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" display="flex" flexWrap="wrap" flexGrow={1} p={1}>
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={6}>
                        <SimpleCard
                            title={t("dashboard.project.total")}
                            description={{ contentTitle: "30", contentSubTitle: "Due tasks" }}
                            subtitle="Completed: 10"
                            cardType="default"
                        />
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <SimpleCard title={t("dashboard.project.overdue")} description={{ contentTitle: "40", contentSubTitle: "Tasks" }} subtitle="Overdue: 9" cardType="error" />
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <SimpleCard title={t("dashboard.project.issues")} description={{ contentTitle: "20", contentSubTitle: "Open" }} subtitle="Closed: 0" cardType="warning" />
                    </Grid>
                    <Grid item sm={3} xs={6}>
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
                <Box p={1}>
                    <DonutChartCard title="Project status" donutType="donut" data={data.project_status[0]} />
                </Box>
                <Box p={1}>
                    <RadarChartCard title="Task distribuation" data={data.task_distribution[0]} />
                </Box>
                <Box p={1}>
                    <DonutChartCard title="Budget distribuation" donutType="pie" data={data.budget_distribution[0]} />
                </Box>
            </Box>

            <Box component="div" p={1}>
                <EnhancedTable data={data.budget_details} tableTitle="Budget details" checkboxRows={false} />
            </Box>
        </div>
    );
};

export { ProjectPage };
