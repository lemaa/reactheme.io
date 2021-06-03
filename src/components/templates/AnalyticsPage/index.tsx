import React from "react";
import { Box, Button } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader, SimpleCard, AreaChartCard, WorldMapCard, DonutChartCard, BarChartCard, ProgressChartCard } from "@Element/index";
import { useTranslation } from "next-i18next";
import { MonetizationOnOutlined, DoneOutlined, BarChartOutlined, ShowChartOutlined } from "@material-ui/icons";

const AnalyticsPage: React.FC = () => {
    const { t } = useTranslation();

    const customHeaderButton = (
        <Button color="primary">
            <FullscreenIcon />
        </Button>
    );
    const datas = {
        series: [
            {
                name: "visitors",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: "pages view",
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
        ],
    };
    const datas1 = [
        {
            name: "STOCK ABC",
            data: [31, 50, 40, 28, 90, 51, 42, 96, 90],
        },
    ];
    const WMDatas = {
        series: [
            {
                data: [138, 110, 100, 69, 58, 54, 43, 30],
            },
        ],
        categories: [
            {
                name: "India",
                coordinates: [78.6677428, 22.3511148],
            },

            {
                name: "France",
                coordinates: [1.8883335, 46.603354],
            },
            {
                name: "South Africa",
                coordinates: [24.991639, -28.8166236],
            },
            {
                name: "China",
                coordinates: [104.999927, 35.000074],
            },
            {
                name: "United States",
                coordinates: [-100.4458825, 39.7837304],
            },
            {
                name: "Japan",
                coordinates: [139.2394179, 36.5748441],
            },
            {
                name: "Tunisia",
                coordinates: [9.400138, 33.8439408],
            },
            {
                name: "United Kingdom",
                coordinates: [-3.2765753, 54.7023545],
            },
        ],
    };
    const donutDatas = {
        series: [83],
    };
    const barDatas = {
        series: [
            {
                name: "Net Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: "Revenue",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
        ],
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    };
    const progressDatas = {
        series: [
            {
                name: "Total Sales",
                data: [70],
                icon: <BarChartOutlined />,
            },
            {
                name: "Income Amount",
                data: [85],
                icon: <MonetizationOnOutlined />,
            },
            {
                name: "Total Budget",
                data: [49],
                icon: <ShowChartOutlined />,
            },
            {
                name: "Completed Tasks",
                data: [20],
                icon: <DoneOutlined />,
            },
        ],
    };
    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Analytics" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} display="flex" flexDirection="column">
                    <SimpleCard title={t("dashboard.congrats", { username: "Amel" })} description={t("dashboard.acomplished", { tasks: "57.6% more tasks" })} cardType="success" />
                    <SimpleCard title="38.4k" description="Orders Received" cardType="chart" data={datas1} icon="received.svg" srcIcon="static/images/common" />
                </Box>
                <Box p={1} flexGrow={1}>
                    <AreaChartCard title="Visitors & Page views" description="Unique visitors by month" data={datas} />
                </Box>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} flexGrow={1}>
                    <BarChartCard title="Website Analytics" data={barDatas} />
                </Box>
                <Box p={1} display="flex" flexDirection="column">
                    <SimpleCard title="38.4k" description="Orders Received" cardType="chart" data={datas1} icon="received.svg" srcIcon="static/images/common" chartType="line" />
                    <SimpleCard title="38.4k" description="Orders Received" cardType="chart" data={datas1} icon="received.svg" srcIcon="static/images/common" chartType="bar" />
                </Box>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} width="49%">
                    <DonutChartCard title="Support Tracker" data={donutDatas} />
                </Box>
                <Box p={1} width="49%">
                    <ProgressChartCard title="Activity" data={progressDatas} />
                </Box>
            </Box>

            <Box component="div" p={1}>
                <WorldMapCard title="Sessions by country" description="Unique visitors by month" data={WMDatas} />
            </Box>
        </div>
    );
};

export { AnalyticsPage };
