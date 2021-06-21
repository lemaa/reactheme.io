import React from "react";
import clsx from "clsx";
import { Badge, Collapse, Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { IProps } from "@Module/Drawer/Drawer";
import useStyles from "@Module/Drawer/DrawerStyle";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Link from "next/link";
import { useAppSettings } from "@Context/index";

const Drawer: React.FunctionComponent<IProps> = ({ prefetch, ListDrawerItems, drawerVariant, open, handleDrawerToggle, drawerClassName, headerTitle, drawerWidth }: IProps) => {
    const { state } = useAppSettings();

    const classes = useStyles({
        drawerWidth,
        navbarTheme: state.theme.navbar,
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
            anchor={state.layout.config.navbar.position}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
                paper: `${classes.drawerPaper} ${drawerClassName}`,
            }}
            ModalProps={{
                keepMounted: true,
            }}
        >
            <div className={classes.drawerContainer}>
                {headerTitle && <div className={classes.toolbar}>{headerTitle}</div>}
                <PerfectScrollbar>
                    {Object.keys(ListItems).map((groupTitle: string, index: number) => {
                        return (
                            <List
                                className={classes.root}
                                component="nav"
                                aria-labelledby={`${groupTitle}-subheader`}
                                key={index.toString()}
                                subheader={listSubheader(ListItems[groupTitle].titleGroup)}
                            >
                                {ListItems[groupTitle].items &&
                                    Object.keys(ListItems[groupTitle].items).map((item: string, subIndex: number) => {
                                        const DrawerItems = ListItems[groupTitle].items;
                                        const subDrawerItems = DrawerItems[item].subItem;

                                        if (typeof subDrawerItems === "undefined")
                                            return (
                                                <Link href={DrawerItems[item].hrefLink} key={subIndex.toString()} prefetch={prefetch}>
                                                    <ListItem className={classes.ListItemContainer} button>
                                                        <ListItemIcon className={classes.listMenuIcon}>{DrawerItems[item].icon}</ListItemIcon>
                                                        <ListItemText className={classes.listMenuText} disableTypography primary={DrawerItems[item].text} />
                                                        {DrawerItems[item].newFeatures && (
                                                            <ListItemIcon className={classes.listMenuIcon}>
                                                                <Badge badgeContent="new" color="error" />
                                                            </ListItemIcon>
                                                        )}
                                                    </ListItem>
                                                </Link>
                                            );
                                        if (typeof subDrawerItems !== "undefined" && subDrawerItems.length > 0)
                                            return (
                                                <React.Fragment key={subIndex.toString()}>
                                                    <ListItem
                                                        onClick={() => {
                                                            handleClick(DrawerItems[item].text);
                                                        }}
                                                        className={classes.ListItemContainer}
                                                        button
                                                    >
                                                        <ListItemIcon className={classes.listMenuIcon}>{DrawerItems[item].icon}</ListItemIcon>
                                                        <ListItemText className={classes.listMenuText} disableTypography primary={DrawerItems[item].text} />
                                                        {DrawerItems[item].text === selectedIndex ? (
                                                            <ExpandLessIcon className={classes.listMenuIcon} />
                                                        ) : (
                                                            <ExpandMoreIcon className={classes.listMenuIcon} />
                                                        )}
                                                    </ListItem>
                                                    <Collapse in={DrawerItems[item].text === selectedIndex} timeout="auto" unmountOnExit>
                                                        {subDrawerItems.map((subGroup: { text: string; hrefLink: string; newFeatures: boolean }, subGroupIndex: number) => {
                                                            let hrefLink: string = `${DrawerItems[item].hrefLink}${subGroup.hrefLink}`;
                                                            if (DrawerItems[item].hrefLink === "/") {
                                                                hrefLink = `${subGroup.hrefLink}`;
                                                            }
                                                            return (
                                                                <Link href={hrefLink} key={subGroupIndex.toString()} prefetch={prefetch}>
                                                                    <List component="div" className={classes.subItem} disablePadding>
                                                                        <ListItem button className={clsx(classes.nested, classes.ListItemContainer)}>
                                                                            <ListItemText className={classes.listMenuText} disableTypography primary={subGroup.text} />
                                                                            {subGroup.newFeatures && (
                                                                                <ListItemIcon className={classes.listMenuIcon}>
                                                                                    <Badge badgeContent="new" color="error" />
                                                                                </ListItemIcon>
                                                                            )}
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
