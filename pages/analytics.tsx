import { NextPage } from "next";
import React from "react";
import { AnalyticsPage } from "@Template/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Default } from "@Layout/index";

const Analytics: NextPage = () => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;
    const quickBarWidth = 60;

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    return (
        <Default onClick={handleDrawerOpen} open={open} drawerwidth={drawerWidth} quickBarWidth={quickBarWidth}>
            <AnalyticsPage />
        </Default>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Analytics;