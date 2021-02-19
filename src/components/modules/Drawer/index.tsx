/* eslint-disable no-console */
import React from "react";
import clsx from "clsx";
import { Collapse, Divider, Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { IProps } from "@Module/Drawer/Drawer";
import useStyles from "@Module/Drawer/DrawerStyle";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Link from "next/link";

const Drawer: React.FunctionComponent<IProps> = ({ ListDrawerItems, drawerVariant, drawerAnchor, open, handleDrawerToggle, drawerClassName, headerTitle, drawerWidth }: IProps) => {
    const classes = useStyles({
        ListDrawerItems,
        drawerVariant,
        drawerAnchor,
        open,
        handleDrawerToggle,
        drawerClassName,
        headerTitle,
        drawerWidth,
    });
    const ListItems = ListDrawerItems[0];
    const [selectedIndex, setSelectedIndex] = React.useState("");

    const handleClick = (index: React.SetStateAction<string>) => {
        if (selectedIndex === index) {
            setSelectedIndex("");
        } else {
            setSelectedIndex(index);
        }
    };

    const listSubheader = (item: any) => {
        return (
            <ListSubheader className={classes.listSubHeader} component="div" disableSticky id={`${item}-subheader`}>
                {item}
            </ListSubheader>
        );
    };
    return (
        <MuiDrawer
            variant={drawerVariant}
            anchor={drawerAnchor}
            open={open}
            onClose={handleDrawerToggle}
            className={drawerClassName}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <div className={classes.drawerContainer}>
                <PerfectScrollbar>
                    <div className={classes.toolbar}>{headerTitle}</div>
                    <Divider />
                    {Object.keys(ListItems).map((item: string, index: number) => {
                        return (
                            <List className={classes.root} component="nav" aria-labelledby={`${item}-subheader`} key={index.toString()} subheader={listSubheader(item)}>
                                {Object.keys(ListItems[item]).map((subItem: string, subIndex: number) => {
                                    const subDrawerItems = ListItems[item][subItem].subtext;
                                    if (typeof subDrawerItems === "undefined")
                                        return (
                                            <Link href={ListItems[item][subItem].hrefLink} key={subIndex.toString()}>
                                                <ListItem className={classes.ListItemContainer} button>
                                                    <ListItemIcon className={classes.listMenuIcon}>{ListItems[item][subItem].icon}</ListItemIcon>
                                                    <ListItemText className={classes.listMenuText} disableTypography primary={ListItems[item][subItem].text} />
                                                </ListItem>
                                            </Link>
                                        );
                                    if (typeof subDrawerItems !== "undefined" && subDrawerItems.length > 0)
                                        return (
                                            <React.Fragment key={subIndex.toString()}>
                                                <ListItem
                                                    onClick={() => {
                                                        handleClick(ListItems[item][subItem].text);
                                                    }}
                                                    className={classes.ListItemContainer}
                                                    button
                                                >
                                                    <ListItemIcon className={classes.listMenuIcon}>{ListItems[item][subItem].icon}</ListItemIcon>
                                                    <ListItemText className={classes.listMenuText} disableTypography primary={ListItems[item][subItem].text} />
                                                    {ListItems[item][subItem].text === selectedIndex ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                </ListItem>
                                                <Collapse in={ListItems[item][subItem].text === selectedIndex} timeout="auto" unmountOnExit>
                                                    {subDrawerItems.map((subsubItem: string, subsubIndex: number) => {
                                                        let subsubItemText: string = subsubItem;
                                                        if (subsubItem.split(" ").length > 1) {
                                                            subsubItemText = subsubItem.replaceAll(" ", "-");
                                                        }
                                                        const hrefLink: string = `${ListItems[item][subItem].text.toLowerCase()}/${subsubItemText.toLowerCase()}`;
                                                        return (
                                                            <Link href={hrefLink} key={subsubIndex.toString()}>
                                                                <List component="div" className={classes.subItem} disablePadding>
                                                                    <ListItem button className={clsx(classes.nested, classes.ListItemContainer)}>
                                                                        <ListItemText className={classes.listMenuText} disableTypography primary={subsubItem} />
                                                                    </ListItem>
                                                                </List>
                                                            </Link>
                                                        );
                                                    })}
                                                </Collapse>
                                            </React.Fragment>
                                        );
                                    return false;
                                })}
                            </List>
                        );
                    })}
                </PerfectScrollbar>
            </div>
        </MuiDrawer>
    );
};
export { Drawer };
