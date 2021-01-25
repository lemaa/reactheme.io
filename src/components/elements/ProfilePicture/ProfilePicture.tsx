import React   from 'react';
import {  Avatar, Button, Grid, Typography } from '@material-ui/core';
import { IProps } from '@element/ProfilePicture/ProfilePictureInterface';
import  useStyles  from '@element/ProfilePicture/ProfilePictureStyle';
import { cdnImage } from "@util/Images";

const ProfilePicture: React.FunctionComponent<IProps> = (props: IProps) => { 
     const classes = useStyles(props);
     const srcPicture = cdnImage(props.namePicture, props.srcPicture)
     return (
         <Button className={classes.grow} onClick={props.onClick}>
             <Grid container spacing={3}>
                <Grid item xs={7} className={classes.ContainerText}>
                    <Typography className={classes.name}>{props.name}</Typography>
                    <Typography className={classes.role}>{props.role}</Typography>
                 </Grid>
                <Grid item xs={5}>
                    <Avatar alt={props.altPic} src={srcPicture}  />
                </Grid>
             </Grid>
         </Button>

    );
}
export default ProfilePicture;