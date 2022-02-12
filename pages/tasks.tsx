import { NextPage } from "next";
import React from "react";
import { TasksPage } from "@Template/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Default } from "@Layout/index";
import { TaskProvider } from "@Context/index";

const Tasks: NextPage = ({ tasks }: any) => {
    const [open, setOpen] = React.useState(true);
    const drawerWidth = 240;
    const quickBarWidth = 60;

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    return (
        <TaskProvider>
            <Default onClick={handleDrawerOpen} open={open} drawerwidth={drawerWidth} quickBarWidth={quickBarWidth}>
                <TasksPage tasks={tasks} />
            </Default>
        </TaskProvider>
    );
};

export const getStaticProps = async ({ locale }: any) => {
    const response = await fetch(`https://d187mzioodxioi.cloudfront.net/tasks/tasks.json`);
    const tasks = await response.json();
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            tasks,
        },
    };
};

export default Tasks;
