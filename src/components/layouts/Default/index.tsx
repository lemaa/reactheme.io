import React from "react";
import { Header, Drawer } from "@Module/index";
import { QuickBar } from "@Element/index";
import { Hidden } from "@material-ui/core";
import useStyles from "@Layout/Default/DefaultStyle";
import { IProps, IState } from "@Layout/Default/Default";
import theme from "@Style/base/theme";
import {
    DashboardOutlined as DashboardOutlinedIcon,
    TodayOutlined as TodayOutlinedIcon,
    SchoolOutlined as SchoolOutlinedIcon,
    MailOutlined as MailOutlinedIcon,
    ListAltOutlined as ListAltOutlinedIcon,
    FileCopyOutlined as FileCopyOutlinedIcon,
    RecentActorsOutlined as RecentActorsOutlinedIcon,
    ChatBubbleOutlineOutlined as ChatBubbleOutlineOutlinedIcon,
    PollOutlined as PollOutlinedIcon,
    NoteOutlined as NoteOutlinedIcon,
    LockOutlined as LockOutlinedIcon,
    AlarmOutlined as AlarmOutlinedIcon,
    ErrorOutlineOutlined as ErrorOutlineOutlinedIcon,
    InsertDriveFileOutlined as InsertDriveFileOutlinedIcon,
    SettingsOutlined as SettingsOutlinedIcon,
    MonetizationOnOutlined as MonetizationOnOutlinedIcon,
    AccountCircleOutlined as AccountCircleOutlinedIcon,
    SearchOutlined as SearchOutlinedIcon,
    LiveHelpOutlined as LiveHelpOutlinedIcon,
    CropOriginalOutlined as CropOriginalOutlinedIcon,
    TextFieldsOutlined as TextFieldsOutlinedIcon,
    HelpOutlineOutlined as HelpOutlineOutlinedIcon,
    WbSunnyOutlined as WbSunnyOutlinedIcon,
    AccountTreeOutlined as AccountTreeOutlinedIcon,
    LockOpenOutlined as LockOpenOutlinedIcon,
    PersonAddOutlined as PersonAddOutlinedIcon,
    StoreOutlined as StoreOutlinedIcon,
    ListOutlined as ListOutlinedIcon,
    CreateOutlined as CreateOutlinedIcon,
    ColorLensOutlined as ColorLensOutlinedIcon,
} from "@material-ui/icons";
import { useTranslation } from "next-i18next";

const Default: React.FC<IProps> = ({ children, onClick, open, drawerwidth, quickBarWidth }) => {
    const drawerstate: IState = {
        drawerwidth,
        quickBarWidth,
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
                            {
                                text: t("drawer.subItemNames.orders"),
                                hrefLink: "/orders",
                            },
                            {
                                text: t("drawer.subItemNames.orderDetail"),
                                hrefLink: "/order-detail",
                            },
                        ],
                        hrefLink: "/e-Commerce",
                    },
                    Academy: {
                        text: t("drawer.itemNames.academy"),
                        icon: <SchoolOutlinedIcon fontSize="small" />,
                        hrefLink: "/academy",
                    },
                    Mail: {
                        text: t("drawer.itemNames.mail"),
                        icon: <MailOutlinedIcon fontSize="small" />,
                        hrefLink: "/mail",
                    },
                    "To-do": {
                        text: t("drawer.itemNames.toDo"),
                        icon: <ListAltOutlinedIcon fontSize="small" />,
                        hrefLink: "/to-do",
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
                    Chat: {
                        text: t("drawer.itemNames.chat"),
                        icon: <ChatBubbleOutlineOutlinedIcon fontSize="small" />,
                        hrefLink: "/chat",
                    },
                    Scrumboard: {
                        text: t("drawer.itemNames.scrumboard"),
                        icon: <PollOutlinedIcon fontSize="small" />,
                        hrefLink: "/scrumboard",
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
                        text: t("pricing"),
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
                    Search: {
                        text: t("drawer.itemNames.search"),
                        icon: <SearchOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: t("drawer.subItemNames.classic"),
                                hrefLink: "/classic",
                            },
                            {
                                text: t("drawer.subItemNames.modern"),
                                hrefLink: "/modern",
                            },
                        ],
                        hrefLink: "/search",
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
                    "Helper Classes": {
                        text: t("drawer.itemNames.helperClasses"),
                        icon: <HelpOutlineOutlinedIcon fontSize="small" />,
                        hrefLink: "/helper-classes",
                    },
                    "Page Layouts": {
                        text: t("drawer.itemNames.PageLayouts"),
                        icon: <FileCopyOutlinedIcon fontSize="small" />,
                        subItem: [
                            {
                                text: t("drawer.subItemNames.cadred"),
                                hrefLink: "/cadred",
                            },
                            {
                                text: t("drawer.subItemNames.simple"),
                                hrefLink: "/simple",
                            },
                            {
                                text: t("drawer.subItemNames.blank"),
                                hrefLink: "/blank",
                            },
                        ],
                        hrefLink: "/page-layouts",
                    },
                },
            },
            configuration: {
                titleGroup: t("drawer.groupTitle.configuration"),
                items: {
                    Theming: {
                        text: t("drawer.itemNames.theming"),
                        icon: <WbSunnyOutlinedIcon fontSize="small" />,
                        hrefLink: "/theming",
                    },
                    "Material Ui Components": {
                        text: t("drawer.itemNames.materialUiComponents"),
                        icon: <AccountTreeOutlinedIcon fontSize="small" />,
                        hrefLink: "/material-ui-components",
                    },
                    "3rd Party Components": {
                        text: t("drawer.itemNames.3rdPartyComponents"),
                        icon: <AccountTreeOutlinedIcon fontSize="small" />,
                        hrefLink: "/3rd-party-components",
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
            quickbar: {
                todolist: {
                    title: t("quickBar.itemTitles.toDoList"),
                    icon: <ListOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                    component: (
                        <>
                            <div>To-do list</div>
                        </>
                    ),
                },
                notes: {
                    title: t("quickBar.itemTitles.notes"),
                    icon: <CreateOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                    component: (
                        <>
                            <div>Notes</div>
                        </>
                    ),
                },
                theme: {
                    title: t("quickBar.itemTitles.themeColor"),
                    icon: <ColorLensOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                    component: (
                        <>
                            <div>Theme color</div>
                        </>
                    ),
                },
                setting: {
                    title: t("quickBar.itemTitles.settings"),
                    icon: <SettingsOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                    component: (
                        <>
                            <div>Setting</div>
                        </>
                    ),
                },
            },
        },
    ];

    return (
        <div>
            <Header onClick={onClick} drawerWidth={drawerwidth} color="#050517" open={open} quickBarWidth={quickBarWidth} />
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp>
                    <Drawer
                        open={open}
                        drawerWidth={drawerwidth}
                        drawerVariant="temporary"
                        drawerAnchor={theme.direction === "rtl" ? "right" : "left"}
                        handleDrawerToggle={onClick}
                        ListDrawerItems={ListDrawerItems}
                        headerTitle="Mobile"
                    />
                </Hidden>
                <Hidden xsDown>
                    <Drawer
                        open={open}
                        drawerWidth={drawerwidth}
                        drawerVariant="persistent"
                        drawerAnchor="left"
                        handleDrawerToggle={onClick}
                        drawerClassName={classes.drawer}
                        ListDrawerItems={ListDrawerItems}
                        headerTitle={t("title")}
                    />
                    <QuickBar qbWidth={quickBarWidth} qbClassName={classes.quickbar} qbAnchor="right" ListQbItems={ListQuickBarItems} />
                </Hidden>
            </nav>

            <div>{children}</div>
        </div>
    );
};

export { Default };
