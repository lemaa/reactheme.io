import React from "react";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { ContentHeader, SimpleCard } from "@Element/index";
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
            <Box component="div" display="flex" flexWrap="wrap" p={1}>
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

export { ProjectPage };
