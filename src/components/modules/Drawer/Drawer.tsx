import React   from 'react';
import clsx from 'clsx';
import { Collapse, Divider, Drawer as MuiDrawer,  List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { ExpandLess as ExpandLessIcon , ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { IProps } from '@module/Drawer/DrawerType';
import  useStyles  from '@module/Drawer/DrawerStyle';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Drawer: React.FunctionComponent<IProps> = (props: IProps) => { 
     const classes = useStyles(props);
     const ListItems = props.ListDrawerItems[0];
     const [selectedIndex, setSelectedIndex] = React.useState("");

     const handleClick = (index: React.SetStateAction<string>) => {
       if (selectedIndex === index) {
         setSelectedIndex("");
       } else {
         setSelectedIndex(index);
       }
     }

    return (
        <MuiDrawer
            variant={props.drawerVariant}
            anchor={props.drawerAnchor}
            open={props.open}
            onClose={props.handleDrawerToggle}
            className={props.drawerClassName}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true, 
            }}
            >
                <div className={classes.drawerContainer}>
                    <PerfectScrollbar>
                        <div className={classes.toolbar} >{props.headerTitle}</div>
                        <Divider />
                        {Object.keys(ListItems).map((_item, index) => {
                            return (
                                <List
                                    className={classes.root}
                                    component="nav"
                                    aria-labelledby={`${_item}-subheader`}
                                    key={index}
                                    subheader={
                                        <ListSubheader className={classes.listSubHeader} component="div"  disableSticky={true}  id={`${_item}-subheader`}>
                                            {_item}
                                        </ListSubheader>}
                                    >
                                    {Object.keys(ListItems[_item]).map((_subItem, subIndex) => {
                                        const subDrawerItems = ListItems[_item][_subItem].subtext;
                                        if(typeof subDrawerItems == 'undefined')
                                            return (
                                                <ListItem key={subIndex} className={classes.ListItemContainer} button >
                                                    <ListItemIcon className={classes.listMenuIcon}>
                                                        {ListItems[_item][_subItem].icon}
                                                    </ListItemIcon>
                                                    <ListItemText className={classes.listMenuText} disableTypography={true} primary={ListItems[_item][_subItem].text} />
                                                </ListItem>); 
                                        if(typeof subDrawerItems !== 'undefined' && subDrawerItems.length > 0)
                                            return(
                                                <React.Fragment key={subIndex}>
                                                    <ListItem   onClick={() => { handleClick(ListItems[_item][_subItem].text) }} className={classes.ListItemContainer} button>
                                                        <ListItemIcon className={classes.listMenuIcon}>
                                                            {ListItems[_item][_subItem].icon}
                                                        </ListItemIcon>
                                                        <ListItemText className={classes.listMenuText} disableTypography={true} primary={ListItems[_item][_subItem].text} />
                                                            {ListItems[_item][_subItem].text === selectedIndex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                    </ListItem>
                                                    <Collapse in={ListItems[_item][_subItem].text === selectedIndex} timeout="auto"  unmountOnExit>
                                                        {subDrawerItems.map((_subsubItem, subsubIndex) => {
                                                            return (
                                                                <List component="div"  key={subsubIndex} className={classes.subItem} disablePadding>
                                                                    <ListItem button  className={ clsx(classes.nested, classes.ListItemContainer)}>
                                                                        <ListItemText className={classes.listMenuText} disableTypography={true} primary={_subsubItem} />
                                                                    </ListItem>
                                                                </List>
                                                            );
                                          
                                                        })} 
                                                    </Collapse>
                                                </React.Fragment>
                                            );
                                    })}    
                                </List>
                            );
                        })}
                    </PerfectScrollbar>
                </div>
        </MuiDrawer>
    );
}
export default Drawer;
 