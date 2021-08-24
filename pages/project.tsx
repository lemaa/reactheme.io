import { NextPage } from "next";
import React from "react";
import { ProjectPage } from "@Template/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Default } from "@Layout/index";
import { DashboardProvider } from "@Context/index";

const Project: NextPage = ({ dashboardData }: any) => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;
    const quickBarWidth = 60;
    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    return (
        <DashboardProvider>
            <Default onClick={handleDrawerOpen} open={open} drawerwidth={drawerWidth} quickBarWidth={quickBarWidth}>
                <ProjectPage dashboardData={dashboardData} />
            </Default>
        </DashboardProvider>
    );
};

export const getStaticProps = async ({ locale }: any) => {
    const response = await fetch(`https://d187mzioodxioi.cloudfront.net/worldMap/project.json`);
    const dashboardData = await response.json();

    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            dashboardData,
        },
    };
};

export default Project;
