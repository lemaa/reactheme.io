import React from "react";
import { Divider, IconButton, Menu as MuiMenu, MenuItem as MuiMenuItem } from "@material-ui/core";
import { IProps } from "@Element/Menu/MenuType";
import useStyles from "@Element/Menu/MenuStyle";
import { MenuItem } from "@CustomType/MenuItem";

const Menu: React.FunctionComponent<IProps> = ({ anchorEl, menuId, isMenuOpen, onClose, name, ListMenuItems }: IProps) => {
    const classes = useStyles();

    return (
        <MuiMenu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={onClose}
        >
            <MuiMenuItem>
                <p className={classes.header}>
                    Welcome,
                    {name}
                </p>
            </MuiMenuItem>
            <Divider />
            {ListMenuItems.map((_item: MenuItem, index: number) => {
                return (
                    <MuiMenuItem onClick={_item.onClick} key={index.toString()} className={classes.item}>
                        <IconButton aria-label={_item.label} color="inherit" edge="start" className={classes.menuIcon}>
                            {_item.icon}
                        </IconButton>
                        <p>{_item.text}</p>
                    </MuiMenuItem>
                );
            })}
        </MuiMenu>
    );
};
export default Menu;
