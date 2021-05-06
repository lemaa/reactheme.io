import React from "react";
import { Divider, IconButton, Menu as MuiMenu, MenuItem as MuiMenuItem } from "@material-ui/core";
import { IProps } from "@Element/Menu/Menu";
import useStyles from "@Element/Menu/MenuStyle";
import { MenuItem } from "@CustomType/index";
import { useTranslation } from "next-i18next";
import { useAppSettings } from "@Context/index";

const Menu: React.FunctionComponent<IProps> = ({ anchorEl, menuId, isMenuOpen, onClose, name, ListMenuItems }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({ headerTheme: state.theme.header });
    const { t } = useTranslation();
    const welcomeText = `${t("welcome")}, ${name}`;
    return (
        <MuiMenu
            elevation={0}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={onClose}
            classes={{ paper: classes.menuContainer }}
        >
            <MuiMenuItem>
                <p className={classes.header}>{welcomeText}</p>
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
export { Menu };
