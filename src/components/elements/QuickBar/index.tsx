import React from "react";
import { Tooltip, Drawer as MuiDrawer, List, ListItem, ListItemIcon, Divider, Button, Typography } from "@material-ui/core";
import { IProps } from "@Element/QuickBar/QuickBar";
import useStyles from "@Element/QuickBar/QuickBarStyle";
import { CloseOutlined } from "@material-ui/icons";
import clsx from "clsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useAppSettings } from "@Context/index";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";

const QuickBar: React.FunctionComponent<IProps> = ({ qbWidth, qbClassName, ListQbItems }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        qbWidth,
        toolbarTheme: state.theme.toolbar,
        drawerPosition: state.layout.config.navbar.position,
    });
    const [dialogOpen, setDialogOpen] = React.useState<false | boolean>(false);
    const [speedDialOpen, setSpeedDialOpen] = React.useState<false | boolean>(false);
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

    const handleSpeedDialOpen = () => {
        setSpeedDialOpen(true);
    };

    const handleSpeedDialClose = () => {
        setSpeedDialOpen(false);
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
                        <List className={classes.root} component="nav">
                            {Object.keys(ListQbItems[0]).map((item: string, index: number) => {
                                if (ListQbItems[0][item].title !== undefined) {
                                    return (
                                        <ListItem
                                            className={classes.ListItemContainer}
                                            key={index.toString()}
                                            onClick={() => handleOpenEvent(ListQbItems[0][item].title, ListQbItems[0][item].component)}
                                            button
                                        >
                                            <Tooltip classes={{ tooltip: classes.ToolTipDrawer }} title={ListQbItems[0][item].title} placement="left">
                                                <ListItemIcon className={classes.listMenuIcon}>{ListQbItems[0][item].icon}</ListItemIcon>
                                            </Tooltip>
                                        </ListItem>
                                    );
                                }
                                return false;
                            })}
                        </List>
                    </div>
                </MuiDrawer>
            )}

            {!state.layout.config.toolbar.display && (
                <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    className={classes.floatingSetting}
                    icon={<SpeedDialIcon openIcon={<CloseOutlined />} />}
                    onClose={handleSpeedDialClose}
                    onOpen={handleSpeedDialOpen}
                    open={speedDialOpen}
                >
                    {Object.keys(ListQbItems[0]).map((item: string, index: number) => {
                        if (ListQbItems[0][item].title !== undefined) {
                            return (
                                <SpeedDialAction
                                    key={index.toString()}
                                    icon={ListQbItems[0][item].icon}
                                    tooltipTitle={ListQbItems[0][item].title}
                                    onClick={() => handleOpenEvent(ListQbItems[0][item].title, ListQbItems[0][item].component)}
                                />
                            );
                        }
                        return false;
                    })}
                </SpeedDial>
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
