import React from "react";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader, SimpleCard, AreaChartCard } from "@Element/index";
import { useTranslation } from "next-i18next";

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
            data: [31, 50, 40, 28, 100, 51, 42, 109, 100],
        },
    ];
    return (
        <div style={{ width: "100%" }}>
            <ContentHeader pathName="Analytics" filterButton refreshButton customButton={customHeaderButton} />
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} display="flex" flexDirection="column">
                    <SimpleCard title={t("dashboard.congrats", { username: "Amel" })} description={t("dashboard.acomplished", { tasks: "57.6% more tasks" })} cardType="success" />
                    <SimpleCard title="38.4k" description="Orders Received" cardType="chart" data={datas1} icon="satisfied.svg" srcIcon="static/images/common" />
                </Box>
                <Box p={1} flexGrow={1}>
                    <AreaChartCard title="Visitors & Page views" description="Unique visitors by month" data={datas} />
                </Box>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} flexGrow={1}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                ezdezedzedzed zedzedz
                            </Typography>
                            <Typography color="textSecondary">adjective</Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box p={1} flexGrow={1}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                ezdezedzedzed zedzedz
                            </Typography>
                            <Typography color="textSecondary">adjective</Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} flexGrow={1}>
                    <Card variant="outlined" style={{ height: "100%" }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                ezdezedzedzed zedzedz
                            </Typography>
                            <Typography color="textSecondary">adjective</Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box p={1}>
                    <Box p={1} display="flex" flexWrap="wrap">
                        <Box p={1}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        ezdezedzedzed zedzedz
                                    </Typography>
                                    <Typography color="textSecondary">adjective</Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                        <Box p={1}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        ezdezedzedzed zedzedz
                                    </Typography>
                                    <Typography color="textSecondary">adjective</Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Box>
                    <Box p={1} display="flex" flexWrap="wrap">
                        <Box p={1}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        ezdezedzedzed zedzedz
                                    </Typography>
                                    <Typography color="textSecondary">adjective</Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                        <Box p={1} display="flex" flexDirection="column" flexWrap="wrap">
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        ezdezedzedzed zedzedz
                                    </Typography>
                                    <Typography color="textSecondary">adjective</Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        ezdezedzedzed zedzedz
                                    </Typography>
                                    <Typography color="textSecondary">adjective</Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
                <Box p={1} flexGrow={1}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                ezdezedzedzed zedzedz
                            </Typography>
                            <Typography color="textSecondary">adjective</Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box p={1} flexGrow={1}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                ezdezedzedzed zedzedz
                            </Typography>
                            <Typography color="textSecondary">adjective</Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
            <Box component="div" p={1}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            ezdezedzedzed zedzedz
                        </Typography>
                        <Typography color="textSecondary">adjective</Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
};

export { AnalyticsPage };
