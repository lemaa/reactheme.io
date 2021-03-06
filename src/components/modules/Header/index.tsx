import React from "react";
import clsx from "clsx";
import { AppBar, Badge, IconButton, InputBase, Toolbar, Typography } from "@material-ui/core";
import {
    PowerSettingsNewOutlined as PowerSettingsNewOutlinedIcon,
    LockOutlined as LockOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    MailOutlineOutlined as MailIcon,
    PersonOutline as PersonOutlineIcon,
    NotificationsNoneOutlined as NotificationsIcon,
    Menu as MenuIcon,
    More as MoreIcon,
    Search as SearchIcon,
} from "@material-ui/icons";
import { IProps } from "@Module/Header/Header";
import useStyles from "@Module/Header/HeaderStyle";
import { ProfilePicture, Menu } from "@Element/index";

const Header: React.FunctionComponent<IProps> = ({ open, onClick, title, color, drawerWidth }: IProps) => {
    const classes = useStyles({
        open,
        onClick,
        title,
        color,
        drawerWidth,
    });
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";
    const ListMenuItems = [
        {
            onClick: handleMenuClose,
            label: "Profile current user",
            icon: <PersonOutlineIcon fontSize="small" />,
            text: "Profile",
        },
        {
            onClick: handleMenuClose,
            label: "Inbox user",
            icon: <MailIcon fontSize="small" />,
            text: "Inbox",
        },
        {
            onClick: handleMenuClose,
            label: "Account settings user",
            icon: <SettingsOutlinedIcon fontSize="small" />,
            text: "Account settings",
        },
        {
            onClick: handleMenuClose,
            label: "Lock user",
            icon: <LockOutlinedIcon fontSize="small" />,
            text: "Lock",
        },
        {
            onClick: handleMenuClose,
            label: "Logout user",
            icon: <PowerSettingsNewOutlinedIcon fontSize="small" />,
            text: "Logout",
        },
    ];

    const renderMenu = <Menu name=" Amel Fz" anchorEl={anchorEl} menuId={menuId} isMenuOpen={isMenuOpen} onClose={handleMenuClose} ListMenuItems={ListMenuItems} />;

    const renderMobileMenu = (
        <Menu name=" Amel Fz" anchorEl={mobileMoreAnchorEl} menuId={mobileMenuId} isMenuOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} ListMenuItems={ListMenuItems} />
    );

    return (
        <div className={classes.grow}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={onClick}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {title}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={5} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <ProfilePicture name="Amel Fz" userRole="guest" srcPicture="static/images/avatar" namePicture="1.jpg" onClick={handleProfileMenuOpen} />
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};
export { Header };
