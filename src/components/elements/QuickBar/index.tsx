import React from "react";
import { Tooltip, Drawer as MuiDrawer, List, ListItem, ListItemIcon, withStyles, Divider, Button, Typography } from "@material-ui/core";
import { IProps } from "@Element/QuickBar/QuickBar";
import useStyles from "@Element/QuickBar/QuickBarStyle";
import { CloseOutlined } from "@material-ui/icons";
import clsx from "clsx";

const QuickBar: React.FunctionComponent<IProps> = ({ qbWidth, qbClassName, qbAnchor, ListQbItems }: IProps) => {
    const classes = useStyles({
        qbWidth,
        qbClassName,
        qbAnchor,
        ListQbItems,
    });
    const ListItems = ListQbItems[0];
    const [dialogOpen, setDialogOpen] = React.useState<false | boolean>(false);
    const [dialogSettings, setDialogSettings] = React.useState({
        headerText: "",
        component: <></>,
    });

    const handleDialogClose = () => {
        setDialogSettings({ headerText: "", component: <></> });
        setDialogOpen(false);
    };

    const handleOpenEvent = (title: string, component: JSX.Element) => {
        setDialogOpen(true);
        setDialogSettings({ headerText: title, component });
    };
    const CustomToolTip = withStyles(() => ({
        tooltip: {
            boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.1)",
            border: "rgba(0, 0, 0, 0.12) solid 1px",
            backgroundColor: "#eeeff7",
            opacity: 1,
            fontSize: "14px",
            color: "#555b62",
        },
    }))(Tooltip);
    return (
        <>
            <MuiDrawer
                variant="permanent"
                anchor={qbAnchor}
                open
                classes={{
                    paper: `${classes.drawerPaper} ${qbClassName}`,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div className={classes.drawerContainer}>
                    {Object.keys(ListItems).map((item: string, index: number) => {
                        return (
                            <List className={classes.root} component="nav" key={index.toString()}>
                                {Object.keys(ListItems[item]).map((subItem: string, subIndex: number) => {
                                    if (ListItems[item][subItem].title !== undefined) {
                                        return (
                                            <ListItem
                                                className={classes.ListItemContainer}
                                                key={subIndex.toString()}
                                                onClick={() => handleOpenEvent(ListItems[item][subItem].title, ListItems[item][subItem].component)}
                                                button
                                            >
                                                <CustomToolTip className={classes.ToolTipDrawer} title={ListItems[item][subItem].title} placement="left">
                                                    <ListItemIcon className={classes.listMenuIcon}>{ListItems[item][subItem].icon}</ListItemIcon>
                                                </CustomToolTip>
                                            </ListItem>
                                        );
                                    }
                                    return false;
                                })}
                            </List>
                        );
                    })}
                </div>
            </MuiDrawer>
            <div
                className={clsx(classes.quickbarDetails, {
                    [classes.quickbarDetailsOpen]: dialogOpen,
                })}
            >
                <div className={classes.quickbarDetailsTitle}>
                    <Button className={classes.closeButton} onClick={handleDialogClose}>
                        <CloseOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />
                    </Button>
                    <Typography variant="h5" gutterBottom>
                        {dialogSettings.headerText}
                    </Typography>
                </div>
                <Divider />
                <div className={classes.quickbarDetailsContent}>{dialogSettings.component}</div>
            </div>
        </>
    );
};
export { QuickBar };
