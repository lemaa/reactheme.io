import React from "react";
import { Card, CardContent, Typography, Box, CardHeader, IconButton } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/SimpleCard/SimpleCard";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "@Element/Dashboard/SimpleCard/SimpleCardStyle";
import { useAppSettings } from "@Context/index";

const SimpleCard: React.FunctionComponent<IProps> = ({ title, description, cardType, subtitle }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
        cardType,
    });

    return (
        <Card variant="outlined" className={classes.SimpleCard}>
            <CardHeader
                // eslint-disable-next-line prettier/prettier
                action={(
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    // eslint-disable-next-line prettier/prettier
                  )}
                title={title}
                className={classes.header}
            />
            <CardContent className={classes.SCContent}>
                <Box className={classes.SCHeader}>
                    <Typography className={classes.SCTitle} variant="body2" component="p">
                        {description.contentTitle}
                    </Typography>
                    <Typography className={classes.SCcontentSubTitle} variant="body2" component="p">
                        {description.contentSubTitle}
                    </Typography>
                </Box>
                <Box className={classes.SCSubContent}>
                    <Typography className={classes.SCDescription} variant="body2" component="p">
                        {subtitle}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
export { SimpleCard };
