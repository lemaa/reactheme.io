import React from "react";
import { Tooltip, Drawer as MuiDrawer, List, ListItem, ListItemIcon, Divider, Button, Typography, Fab } from "@material-ui/core";
import { IProps } from "@Element/QuickBar/QuickBar";
import useStyles from "@Element/QuickBar/QuickBarStyle";
import { CloseOutlined } from "@material-ui/icons";
import clsx from "clsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useAppSettings } from "@Context/index";

const QuickBar: React.FunctionComponent<IProps> = ({ qbWidth, qbClassName, ListQbItems, defaultItem }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        qbWidth,
        toolbarTheme: state.theme.toolbar,
        drawerPosition: state.layout.config.navbar.position,
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

    return (
        <>
            {state.layout.config.toolbar.display && (
                <MuiDrawer
                    variant="permanent"
                    anchor={state.layout.config.toolbar.position}
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
                                                    <Tooltip classes={{ tooltip: classes.ToolTipDrawer }} title={ListItems[item][subItem].title} placement="left">
                                                        <ListItemIcon className={classes.listMenuIcon}>{ListItems[item][subItem].icon}</ListItemIcon>
                                                    </Tooltip>
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
            )}

            {!state.layout.config.toolbar.display && (
                <Fab className={classes.floatingSetting} onClick={() => handleOpenEvent(defaultItem.title, defaultItem.component)} color="primary" aria-label={defaultItem.title}>
                    {defaultItem.icon}
                </Fab>
            )}
            <div
                className={clsx(classes.quickbarDetails, {
                    [classes.quickbarDetailsOpen]: dialogOpen,
                })}
            >
                <PerfectScrollbar>
                    <div className={classes.quickbarDetailsTitle}>
                        <Button className={classes.closeButton} onClick={handleDialogClose} style={{ backgroundColor: "transparent" }}>
                            <CloseOutlined fontSize="small" style={{ color: "rgb(153 153 153)" }} />
                        </Button>
                        <Typography variant="h6" gutterBottom>
                            {dialogSettings.headerText}
                        </Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.quickbarDetailsContent}>{dialogSettings.component}</div>
                </PerfectScrollbar>
            </div>
        </>
    );
};
export { QuickBar };
