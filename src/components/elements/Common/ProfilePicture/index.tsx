import React from "react";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import { IProps } from "@Element/Common/ProfilePicture/ProfilePicture";
import useStyles from "@Element/Common/ProfilePicture/ProfilePictureStyle";
import { cdnImage } from "@Util/index";
import { useAppSettings } from "@Context/index";

const ProfilePicture: React.FunctionComponent<IProps> = ({ namePicture, srcPicture, name, userRole, altPic, onClick }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        headerTheme: state.theme.header,
    });
    const srcPictureCdn = cdnImage(namePicture, srcPicture);
    return (
        <Button className={classes.grow} onClick={onClick}>
            <Grid container spacing={3}>
                <Grid item xs={7} className={classes.ContainerText}>
                    <Typography className={classes.name}>{name}</Typography>
                    <Typography className={classes.role}>{userRole}</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Avatar alt={altPic} src={srcPictureCdn} />
                </Grid>
            </Grid>
        </Button>
    );
};
export { ProfilePicture };
