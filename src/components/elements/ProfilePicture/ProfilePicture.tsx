import React   from 'react';
import { AppBar, Avatar, Badge, Button, Grid, IconButton, InputBase, Menu, MenuItem, Paper, Toolbar, Typography } from '@material-ui/core';
import { IProps } from '@element/ProfilePicture/ProfilePictureInterface';
import  useStyles  from '@element/ProfilePicture/ProfilePictureStyle';
 
const ProfilePicture: React.FunctionComponent<IProps> = (props: IProps) => { 
     const classes = useStyles(props);
   
     return (
         <Button className={classes.grow} onClick={props.onClick}>
             <Grid container spacing={3}>
                <Grid item xs={7} className={classes.ContainerText}>
                    <Typography className={classes.name}>{props.name}</Typography>
                    <Typography className={classes.role}>{props.role}</Typography>
                 </Grid>
                <Grid item xs={5}>
                    <Avatar alt={props.altPic} src={props.srcPicture}  />
                </Grid>
             </Grid>
         </Button>

    );
}
export default ProfilePicture;