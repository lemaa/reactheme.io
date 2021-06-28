import React, { useEffect } from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@material-ui/core";
import { IProps } from "@Element/Dashboard/FelicitationsCard/FelicitationsCard";
import useStyles from "@Element/Dashboard/FelicitationsCard/FelicitationsCardStyle";
import { useAppSettings } from "@Context/index";
import { cdnImage } from "@Util/index";

const FelicitationsCard: React.FunctionComponent<IProps> = ({ title, description, cardType }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        mainTheme: state.theme.main,
    });
    const [srcImgCdn, setSrcImgCdn] = React.useState<"" | string>("");

    useEffect(() => {
        const handleIcon = () => {
            if (cardType === "success") {
                setSrcImgCdn(cdnImage("clapping.svg", "static/images/common"));
            } else if (cardType === "warning") {
                setSrcImgCdn(cdnImage("siren.svg", "static/images/common"));
            } else if (cardType === "error") {
                setSrcImgCdn(cdnImage("warning.svg", "static/images/common"));
            }
        };

        handleIcon();
    }, [cardType]);

    return (
        <Card variant="outlined" className={classes.FelicitationsCard}>
            <CardContent className={classes.SCContent}>
                <Box className={classes.SCHeader}>
                    <Box className={classes.SCIconContainer} display="flex" justifyContent="space-between" alignItems="center">
                        <Avatar alt="success" src={srcImgCdn} className={classes.SCIcon} />
                    </Box>
                    <Typography className={classes.SCTitle} variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.SCDescription} variant="body2" component="p">
                        {description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};
export { FelicitationsCard };
