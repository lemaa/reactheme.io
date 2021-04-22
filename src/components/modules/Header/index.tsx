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
import { ProfilePicture, Menu, LanguageSwitch } from "@Element/index";
import { useTranslation } from "next-i18next";
import { useAppSettings } from "@Context/index";

const Header: React.FunctionComponent<IProps> = ({ open, onClick, title, drawerWidth, quickBarWidth }: IProps) => {
    const { state } = useAppSettings();
    const classes = useStyles({
        drawerWidth,
        quickBarWidth,
        headerTheme: state.theme.header,
    });
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { t } = useTranslation();

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
    const ListLanguageItems = [
        {
            language: t("languageName.english"),
            languageAbbr: "en",
            nameFlag: "etats-unis.svg",
        },
        {
            language: t("languageName.french"),
            languageAbbr: "fr",
            nameFlag: "france.svg",
        },
    ];

    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";
    const ListMenuItems = [
        {
            onClick: handleMenuClose,
            label: "Profile current user",
            icon: <PersonOutlineIcon fontSize="small" />,
            text: t("headerMenu.menuItems.profile"),
        },
        {
            onClick: handleMenuClose,
            label: "Inbox user",
            icon: <MailIcon fontSize="small" />,
            text: t("headerMenu.menuItems.inbox"),
        },
        {
            onClick: handleMenuClose,
            label: "Account settings user",
            icon: <SettingsOutlinedIcon fontSize="small" />,
            text: t("headerMenu.menuItems.accountSettings"),
        },
        {
            onClick: handleMenuClose,
            label: "Lock user",
            icon: <LockOutlinedIcon fontSize="small" />,
            text: t("headerMenu.menuItems.lock"),
        },
        {
            onClick: handleMenuClose,
            label: "Logout user",
            icon: <PowerSettingsNewOutlinedIcon fontSize="small" />,
            text: t("headerMenu.menuItems.logout"),
        },
    ];

    const renderMenu = <Menu name=" Amel Fz" anchorEl={anchorEl} menuId={menuId} isMenuOpen={isMenuOpen} onClose={handleMenuClose} ListMenuItems={ListMenuItems} />;

    const renderMobileMenu = (
        <Menu name=" Amel Fz" anchorEl={mobileMoreAnchorEl} menuId={mobileMenuId} isMenuOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} ListMenuItems={ListMenuItems} />
    );

    return (
        <div className={classes.grow}>
            <AppBar
                position={state.layout.config.header.style}
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open && state.layout.config.navbar.display,
                })}
            >
                <Toolbar>
                    {state.layout.config.navbar.display && (
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={onClick}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography className={classes.title} variant="h6" noWrap>
                        {title}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={`${t("headerMenu.search")}…`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <LanguageSwitch ListLanguageItems={ListLanguageItems} srcFlags="static/images/flags" />
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
                        <ProfilePicture name="Amel Fz" userRole={t("user.role.guest")} srcPicture="static/images/avatar" namePicture="1.jpg" onClick={handleProfileMenuOpen} />
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
