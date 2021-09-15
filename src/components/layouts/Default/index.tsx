import React from "react";
import { Header, Drawer, Settings, Themes, Footer, QuickBar } from "@Module/index";
import { Box, Hidden } from "@material-ui/core";
import useStyles from "@Layout/Default/DefaultStyle";
import { IProps, IState } from "@Layout/Default/Default";
import { useAppSettings } from "@Context/index";
import {
    DashboardOutlined as DashboardOutlinedIcon,
    TodayOutlined as TodayOutlinedIcon,
    ListAltOutlined as ListAltOutlinedIcon,
    FileCopyOutlined as FileCopyOutlinedIcon,
    RecentActorsOutlined as RecentActorsOutlinedIcon,
    NoteOutlined as NoteOutlinedIcon,
    LockOutlined as LockOutlinedIcon,
    AlarmOutlined as AlarmOutlinedIcon,
    ErrorOutlineOutlined as ErrorOutlineOutlinedIcon,
    InsertDriveFileOutlined as InsertDriveFileOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    MonetizationOnOutlined as MonetizationOnOutlinedIcon,
    AccountCircleOutlined as AccountCircleOutlinedIcon,
    LiveHelpOutlined as LiveHelpOutlinedIcon,
    CropOriginalOutlined as CropOriginalOutlinedIcon,
    TextFieldsOutlined as TextFieldsOutlinedIcon,
    LockOpenOutlined as LockOpenOutlinedIcon,
    PersonAddOutlined as PersonAddOutlinedIcon,
    StoreOutlined as StoreOutlinedIcon,
    ListOutlined as ListOutlinedIcon,
    CreateOutlined as CreateOutlinedIcon,
    ColorLensOutlined as ColorLensOutlinedIcon,
} from "@material-ui/icons";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

const Default: React.FC<IProps> = ({ children, onClick, open, drawerwidth, quickBarWidth }) => {
    const { state } = useAppSettings();
    const mainTheme = state.theme.main;
    const drawerstate: IState = {
        drawerWidth: drawerwidth,
        quickBarWidth: state.layout.config.toolbar.display ? quickBarWidth : 0,
        quickBarPosition: state.layout.config.toolbar.position,
        drawerPosition: state.layout.config.navbar.position,
        mainTheme,
    };
    const classes = useStyles(drawerstate);
    const { t } = useTranslation();
    const ListDrawerItems = [
        {
            applications: {
                titleGroup: t("drawer.groupTitle.applications"),
                items: {
                    dashboard: {
                        text: t("drawer.itemNames.dashboard"),
                        icon: <DashboardOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: t("drawer.subItemNames.analytics"),
                                hrefLink: "/analytics",
                                newFeatures: true,
                            },
                            {
                                text: t("drawer.subItemNames.project"),
                                hrefLink: "/project",
                            },
                        ],
                        hrefLink: "/",
                    },
                    Calendar: {
                        text: t("drawer.itemNames.calendar"),
                        icon: <TodayOutlinedIcon fontSize="small" />,
                        hrefLink: "/calendar",
                        newFeatures: true,
                    },
                    "E-Commerce": {
                        text: t("drawer.itemNames.eCommerce"),
                        icon: <StoreOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: t("drawer.subItemNames.products"),
                                hrefLink: "/products",
                            },
                            {
                                text: t("drawer.subItemNames.productDetail"),
                                hrefLink: "/product-detail",
                            },
                            {
                                text: t("drawer.subItemNames.newProduct"),
                                hrefLink: "/new-product",
                            },
                        ],
                        hrefLink: "/e-Commerce",
                    },
                    Tasks: {
                        text: t("drawer.itemNames.tasks"),
                        icon: <ListAltOutlinedIcon fontSize="small" />,
                        hrefLink: "/tasks",
                    },
                    "File Manager": {
                        text: t("drawer.itemNames.fileManager"),
                        icon: <FileCopyOutlinedIcon fontSize="small" />,
                        hrefLink: "/file-manager",
                    },
                    Contacts: {
                        text: t("drawer.itemNames.contacts"),
                        icon: <RecentActorsOutlinedIcon fontSize="small" />,
                        hrefLink: "/contacts",
                    },
                    Notes: {
                        text: t("drawer.itemNames.notes"),
                        icon: <NoteOutlinedIcon fontSize="small" />,
                        hrefLink: "/notes",
                    },
                },
            },
            pages: {
                titleGroup: t("drawer.groupTitle.pages"),
                items: {
                    Authentication: {
                        text: t("drawer.itemNames.authentication"),
                        icon: <LockOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: t("drawer.subItemNames.login"),
                                hrefLink: "/login",
                            },
                            {
                                text: t("drawer.subItemNames.loginV2"),
                                hrefLink: "/login-v2",
                            },
                            {
                                text: t("drawer.subItemNames.register"),
                                hrefLink: "/register",
                            },
                            {
                                text: t("drawer.subItemNames.registerV2"),
                                hrefLink: "/register-v2",
                            },
                            {
                                text: t("drawer.subItemNames.forgotPassword"),
                                hrefLink: "/forgot-password",
                            },
                            {
                                text: t("drawer.subItemNames.resetPassword"),
                                hrefLink: "/reset-password",
                            },
                            {
                                text: t("drawer.subItemNames.lockScreen"),
                                hrefLink: "/lock-screen",
                            },
                            {
                                text: t("drawer.subItemNames.mailConfirmation"),
                                hrefLink: "/mail-confirmation",
                            },
                        ],
                        hrefLink: "/authentication",
                    },
                    "Coming Soon": {
                        text: t("drawer.itemNames.comingSoon"),
                        icon: <AlarmOutlinedIcon fontSize="small" />,
                        hrefLink: "/coming-soon",
                    },
                    Errors: {
                        text: t("drawer.itemNames.errors"),
                        icon: <ErrorOutlineOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: "404",
                                hrefLink: "/404",
                            },
                            {
                                text: "500",
                                hrefLink: "/500",
                            },
                        ],
                        hrefLink: "/errors",
                    },
                    Invoice: {
                        text: t("drawer.itemNames.invoice"),
                        icon: <InsertDriveFileOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: t("drawer.subItemNames.modern"),
                                hrefLink: "/modern",
                            },
                            {
                                text: t("drawer.subItemNames.compact"),
                                hrefLink: "/compact",
                            },
                        ],
                        hrefLink: "/invoice",
                    },
                    Maintenance: {
                        text: t("drawer.itemNames.maintenance"),
                        icon: <SettingsOutlinedIcon fontSize="small" />,
                        hrefLink: "/maintenance",
                    },
                    Pricing: {
                        text: t("drawer.itemNames.pricing"),
                        icon: <MonetizationOnOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: t("drawer.subItemNames.pricing"),
                                hrefLink: "/pricing",
                            },
                            {
                                text: t("drawer.subItemNames.pricingV2"),
                                hrefLink: "/pricing-v2",
                            },
                        ],
                        hrefLink: "/pricing",
                    },
                    Profile: {
                        text: t("drawer.itemNames.profile"),
                        icon: <AccountCircleOutlinedIcon fontSize="small" />,
                        hrefLink: "/profile",
                    },
                    FAQ: {
                        text: t("drawer.itemNames.faq"),
                        icon: <LiveHelpOutlinedIcon fontSize="small" />,
                        hrefLink: "/faq",
                    },
                },
            },
            "user interface": {
                titleGroup: t("drawer.groupTitle.userInterface"),
                items: {
                    Icons: {
                        text: t("drawer.itemNames.icons"),
                        icon: <CropOriginalOutlinedIcon fontSize="small" />,
                        hrefLink: "/icons",
                    },
                    Typography: {
                        text: t("drawer.itemNames.typography"),
                        icon: <TextFieldsOutlinedIcon fontSize="small" />,
                        hrefLink: "/typography",
                    },
                },
            },
            auth: {
                titleGroup: t("drawer.groupTitle.auth"),
                items: {
                    Login: {
                        text: t("drawer.itemNames.login"),
                        icon: <LockOpenOutlinedIcon fontSize="small" />,
                        hrefLink: "/login",
                    },
                    Register: {
                        text: t("drawer.itemNames.register"),
                        icon: <PersonAddOutlinedIcon fontSize="small" />,
                        hrefLink: "/register",
                    },
                },
            },
        },
    ];

    const ListQuickBarItems = [
        {
            todolist: {
                title: t("quickBar.itemTitles.toDoList"),
                icon: <ListOutlinedIcon fontSize="small" />,
                component: (
                    <>
                        <div>To-do list</div>
                    </>
                ),
            },
            notes: {
                title: t("quickBar.itemTitles.notes"),
                icon: <CreateOutlinedIcon fontSize="small" />,
                component: (
                    <>
                        <div>Notes</div>
                    </>
                ),
            },
            theme: {
                title: t("quickBar.itemTitles.themeColor"),
                icon: <ColorLensOutlinedIcon fontSize="small" />,
                component: <Themes />,
            },
            setting: {
                title: t("quickBar.itemTitles.settings"),
                icon: <SettingsOutlinedIcon fontSize="small" />,
                component: <Settings />,
            },
        },
    ];

    return (
        <Box display="flex" flexDirection="column" style={{ height: "100vh" }}>
            {state.layout.config.header.display && (
                <Header onClick={onClick} drawerWidth={drawerwidth} open={open} quickBarWidth={state.layout.config.toolbar.display ? quickBarWidth : 0} />
            )}
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp>
                    {state.layout.config.navbar.display && (
                        <Drawer
                            open={open}
                            drawerWidth={drawerwidth}
                            drawerVariant="temporary"
                            handleDrawerToggle={onClick}
                            ListDrawerItems={ListDrawerItems}
                            headerTitle="Mobile"
                        />
                    )}
                </Hidden>
                <Hidden xsDown>
                    {state.layout.config.navbar.display && (
                        <Drawer
                            open={open}
                            drawerWidth={drawerwidth}
                            drawerVariant="persistent"
                            handleDrawerToggle={onClick}
                            drawerClassName={classes.drawer}
                            ListDrawerItems={ListDrawerItems}
                            headerTitle={t("title")}
                        />
                    )}
                    <QuickBar qbWidth={quickBarWidth} qbClassName={classes.quickbar} ListQbItems={ListQuickBarItems} />
                </Hidden>
            </nav>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open && state.layout.config.navbar.display,
                })}
            >
                {state.layout.config.header.display && <div className={classes.drawerHeader} />}
                <div className={classes.container}>{children}</div>
            </main>
            {state.layout.config.footer.display && (
                <Footer drawerWidth={drawerwidth} open={open} quickBarWidth={state.layout.config.toolbar.display ? quickBarWidth : 0}>
                    <div>
                        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                            <Box p={1}>Created with Love | 2021</Box>
                            <Box p={1} alignSelf="flex-end">
                                ©ThemeReact v1.0.0
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="flex-center" p={1}>
                            <div>
                                Icons made by&nbsp;
                                <a className={classes.freepikLink} href="https://www.freepik.com" title="Freepik">
                                    Freepik
                                </a>
                                &nbsp; from&nbsp;
                                <a className={classes.freepikLink} href="https://www.flaticon.com/" title="Flaticon">
                                    www.flaticon.com
                                </a>
                            </div>
                        </Box>
                    </div>
                </Footer>
            )}
        </Box>
    );
};

export { Default };
