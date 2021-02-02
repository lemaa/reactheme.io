import React   from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Default from '@layout/Default/Default';
import { IProps, IState} from '@module/MainContainer/MainContainerType';
import  useStyles  from '@module/MainContainer/MainContainerStyle';

const Main: React.FunctionComponent<IProps> = (props: IProps) => { 
     const [open, setOpen] = React.useState(true);
     const drawerWidth = 240;
 
    const handleDrawerOpen = () => {
      setOpen(!open);
    }
    let drawerstate : IState;
    drawerstate ={
        drawerWidth: drawerWidth
    }
    const classes = useStyles(drawerstate);
 
     return (
        <Default onClick={handleDrawerOpen} open = {open} drawerwidth={drawerWidth}>
            <main className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                <div className={classes.drawerHeader} />      
                <div className={classes.container}>
                     {props.children}
                </div>
            </main>
      </Default>
    );
}
export default Main;
