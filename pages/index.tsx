import { NextPage } from "next";
import React from "react";
import { HomePage } from "@Template/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Default } from "@Layout/index";

const Home: NextPage = () => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;
    const quickBarWidth = 60;

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    return (
        <Default onClick={handleDrawerOpen} open={open} drawerwidth={drawerWidth} quickBarWidth={quickBarWidth}>
            <HomePage />
        </Default>
    );
};

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
