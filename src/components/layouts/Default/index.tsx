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

const ListDrawerItems = [
    {
        applications: {
            dashboard: {
                text: "dashboard",
                icon: <DashboardOutlinedIcon fontSize="small" />,
                subtext: ["analytics", "project"],
                hrefLink: "/",
            },
            Calendar: {
                text: "Calendar",
                icon: <TodayOutlinedIcon fontSize="small" />,
                hrefLink: "/calendar",
            },
            "E-Commerce": {
                text: "E-Commerce",
                icon: <StoreOutlinedIcon fontSize="small" />,
                subtext: ["products", "product detail", "new product", "orders", "order detail"],
                hrefLink: "/e-Commerce",
            },
            Academy: {
                text: "Academy",
                icon: <SchoolOutlinedIcon fontSize="small" />,
                hrefLink: "/academy",
            },
            Mail: {
                text: "Mail",
                icon: <MailOutlinedIcon fontSize="small" />,
                hrefLink: "/mail",
            },
            "To-do": {
                text: "To-do",
                icon: <ListAltOutlinedIcon fontSize="small" />,
                hrefLink: "/to-do",
            },
            "File Manager": {
                text: "File Manager",
                icon: <FileCopyOutlinedIcon fontSize="small" />,
                hrefLink: "/file-manager",
            },
            Contacts: {
                text: "Contacts",
                icon: <RecentActorsOutlinedIcon fontSize="small" />,
                hrefLink: "/contacts",
            },
            Chat: {
                text: "Chat",
                icon: <ChatBubbleOutlineOutlinedIcon fontSize="small" />,
                hrefLink: "/chat",
            },
            Scrumboard: {
                text: "Scrumboard",
                icon: <PollOutlinedIcon fontSize="small" />,
                hrefLink: "/scrumboard",
            },
            Notes: {
                text: "Notes",
                icon: <NoteOutlinedIcon fontSize="small" />,
                hrefLink: "/notes",
            },
        },
        pages: {
            Authentication: {
                text: "Authentication",
                icon: <LockOutlinedIcon fontSize="small" />,
                subtext: [
                    "Login",
                    "Login V2",
                    "Login V3",
                    "Register",
                    "Register V2",
                    "Register V3",
                    "Forgot Password",
                    "Forgot Password V2",
                    "Reset Password ",
                    "Reset Password V2",
                    "Lock Screen",
                    "Mail Confirmation",
                ],
                hrefLink: "/authentication",
            },
            "Coming Soon": {
                text: "Coming Soon",
                icon: <AlarmOutlinedIcon fontSize="small" />,
                hrefLink: "/coming-soon",
            },
            Errors: {
                text: "Errors",
                icon: <ErrorOutlineOutlinedIcon fontSize="small" />,
                subtext: ["404", "500"],
                hrefLink: "/errors",
            },
            Invoice: {
                text: "Invoice",
                icon: <InsertDriveFileOutlinedIcon fontSize="small" />,
                subtext: ["Modern", "Compact"],
                hrefLink: "/invoice",
            },
            Maintenance: {
                text: "Maintenance",
                icon: <SettingsOutlinedIcon fontSize="small" />,
                hrefLink: "/maintenance",
            },
            Pricing: {
                text: "Pricing",
                icon: <MonetizationOnOutlinedIcon fontSize="small" />,
                subtext: ["Pricing", "Pricing V2", "Pricing V3"],
                hrefLink: "/pricing",
            },
            Profile: {
                text: "Profile",
                icon: <AccountCircleOutlinedIcon fontSize="small" />,
                hrefLink: "/profile",
            },
            Search: {
                text: "Search",
                icon: <SearchOutlinedIcon fontSize="small" />,
                subtext: ["Classic", "Modern"],
                hrefLink: "/search",
            },
            FAQ: {
                text: "FAQ",
                icon: <LiveHelpOutlinedIcon fontSize="small" />,
                hrefLink: "/faq",
            },
        },
        "user interface": {
            Icons: {
                text: "Icons",
                icon: <CropOriginalOutlinedIcon fontSize="small" />,
                hrefLink: "/icons",
            },
            Typography: {
                text: "Typography",
                icon: <TextFieldsOutlinedIcon fontSize="small" />,
                hrefLink: "/typography",
            },
            "Helper Classes": {
                text: "Search",
                icon: <HelpOutlineOutlinedIcon fontSize="small" />,
                hrefLink: "/helper-classes",
            },
            "Page Layouts": {
                text: "FAQ",
                icon: <FileCopyOutlinedIcon fontSize="small" />,
                subtext: ["Cadred", "Simple", "Blank"],
                hrefLink: "/page-layouts",
            },
        },
        configuration: {
            Theming: {
                text: "Theming",
                icon: <WbSunnyOutlinedIcon fontSize="small" />,
                hrefLink: "/theming",
            },
            "Material Ui Components": {
                text: "Material Ui Components",
                icon: <AccountTreeOutlinedIcon fontSize="small" />,
                hrefLink: "/material-ui-components",
            },
            "3rd Party Components": {
                text: "3rd Party Components",
                icon: <AccountTreeOutlinedIcon fontSize="small" />,
                hrefLink: "/3rd-party-components",
            },
        },
        auth: {
            Login: {
                text: "Login",
                icon: <LockOpenOutlinedIcon fontSize="small" />,
                hrefLink: "/login",
            },
            Register: {
                text: "Register",
                icon: <PersonAddOutlinedIcon fontSize="small" />,
                hrefLink: "/register",
            },
        },
    },
];

const ListQuickBarItems = [
    {
        quickbar: {
            todolist: {
                title: "To-do list",
                icon: <ListOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                component: (
                    <>
                        <div>To-do list</div>
                    </>
                ),
            },
            notes: {
                title: "Notes",
                icon: <CreateOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                component: (
                    <>
                        <div>Notes</div>
                    </>
                ),
            },
            theme: {
                title: "Theme color",
                icon: <ColorLensOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                component: (
                    <>
                        <div>Theme color</div>
                    </>
                ),
            },
            setting: {
                title: "Setting",
                icon: <SettingsOutlinedIcon fontSize="small" style={{ color: "rgb(153 153 153)" }} />,
                setting: (
                    <>
                        <div>Setting</div>
                    </>
                ),
            },
        },
    },
];
const Default: React.FC<IProps> = ({ children, onClick, open, drawerwidth, quickBarWidth }) => {
    const drawerstate: IState = {
        drawerwidth,
        quickBarWidth,
    };
    const classes = useStyles(drawerstate);
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
                        headerTitle="Test"
                    />
                    <QuickBar qbWidth={quickBarWidth} qbClassName={classes.quickbar} qbAnchor="right" ListQbItems={ListQuickBarItems} />
                </Hidden>
            </nav>

            <div>{children}</div>
        </div>
    );
};

export { Default };
