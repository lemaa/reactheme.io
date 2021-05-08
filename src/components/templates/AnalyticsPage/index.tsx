import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";

const AnalyticsPage: React.FC = () => (
    <div>
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
    </div>
);

export { AnalyticsPage };
