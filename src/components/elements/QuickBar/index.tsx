import React from "react";
import { Tooltip, Drawer as MuiDrawer, List, ListItem, ListItemIcon, withStyles } from "@material-ui/core";
import { IProps } from "@Element/QuickBar/QuickBar";
import useStyles from "@Element/QuickBar/QuickBarStyle";

const QuickBar: React.FunctionComponent<IProps> = ({ qbWidth, qbClassName, qbAnchor, ListQbItems }: IProps) => {
    const classes = useStyles({
        qbWidth,
        qbClassName,
        qbAnchor,
        ListQbItems,
    });
    const ListItems = ListQbItems[0];

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
                                if (ListItems[item][subItem].title !== undefined)
                                    return (
                                        <ListItem className={classes.ListItemContainer} key={subIndex.toString()} button>
                                            <CustomToolTip className={classes.ToolTipDrawer} title={ListItems[item][subItem].title} placement="left">
                                                <ListItemIcon className={classes.listMenuIcon}>{ListItems[item][subItem].icon}</ListItemIcon>
                                            </CustomToolTip>
                                        </ListItem>
                                    );
                                return false;
                            })}
                        </List>
                    );
                })}
            </div>
        </MuiDrawer>
    );
};
export { QuickBar };
