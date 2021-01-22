import React from 'react';
import Header from '@module/Header/Header';
import Drawer from '@module/Drawer/Drawer';
import { Hidden, Paper } from '@material-ui/core';
import  useStyles  from '@layout/Default/DefaultStyle';
import theme from '@styles/base/theme';
import { IProps, IState  } from '@layout/Default/DefaultInterface';
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
    ImportContactsOutlined as ImportContactsOutlinedIcon,
    CropOriginalOutlined as CropOriginalOutlinedIcon,
    TextFieldsOutlined as TextFieldsOutlinedIcon,
    HelpOutlineOutlined as HelpOutlineOutlinedIcon,
    FlipCameraAndroidOutlined as FlipCameraAndroidOutlinedIcon,
    PlayArrowOutlined as PlayArrowOutlinedIcon,
    CodeOutlined as CodeOutlinedIcon,
    WbSunnyOutlined as WbSunnyOutlinedIcon,
    BeenhereOutlined as BeenhereOutlinedIcon,
    AccountTreeOutlined as AccountTreeOutlinedIcon,
    LockOpenOutlined as LockOpenOutlinedIcon,
    PersonAddOutlined as PersonAddOutlinedIcon,
    StoreOutlined as StoreOutlinedIcon
        } 
    from '@material-ui/icons';

const ListDrawerItems =[{
    "applications": {
        "dashboard":{
                text : "dashboard",
                icon: <DashboardOutlinedIcon fontSize="small"/>,
                subtext: ["Analytics", "project"]
        },
        "Calendar":{
            text : "Calendar",
            icon: <TodayOutlinedIcon fontSize="small"/>,
        },
        "E-Commerce":{
            text : "E-Commerce",
            icon: <StoreOutlinedIcon fontSize="small"/>,
            subtext: ["Products", "Product Detail", "New product","Orders", "Order Detail" ]
        },
        "Academy":{
            text : "Academy",
            icon: <SchoolOutlinedIcon fontSize="small"/>,
         },
         "Mail":{
            text : "Mail",
            icon: <MailOutlinedIcon fontSize="small"/>,
         },
         "To-do":{
            text : "To-do",
            icon: <ListAltOutlinedIcon fontSize="small"/>,
         },
         "File Manager":{
            text : "File Manager",
            icon: <FileCopyOutlinedIcon fontSize="small"/>,
         },
         "Contacts":{
            text : "Contacts",
            icon: <RecentActorsOutlinedIcon fontSize="small"/>,
         },
         "Chat":{
            text : "Chat",
            icon: <ChatBubbleOutlineOutlinedIcon fontSize="small"/>,
         },
         "Scrumboard":{
            text : "Scrumboard",
            icon: <PollOutlinedIcon fontSize="small"/>,
         },
         "Notes":{
            text : "Notes",
            icon: <NoteOutlinedIcon fontSize="small"/>,
         },
        },
    "pages": {
        "Authentication":{
            text : "Authentication",
            icon: <LockOutlinedIcon fontSize="small"/>,
            subtext: ["Login", "Login V2", "Login V3","Register", "Register V2", "Register V3", "Forgot Password", "Forgot Password V2" , "Reset Password " , "Reset Password V2", "Lock Screen", "Mail Confirmation"],
        },
        "Coming Soon":{
            text : "Coming Soon",
            icon: <AlarmOutlinedIcon fontSize="small"/>,
        },
        "Errors":{
            text : "Errors",
            icon: <ErrorOutlineOutlinedIcon fontSize="small"/>,
            subtext: ["404", "500" ],
         },
         "Invoice":{
            text : "Invoice",
            icon: <InsertDriveFileOutlinedIcon fontSize="small"/>,
            subtext: ["Modern", "Compact" ],
         },
         "Maintenance":{
            text : "Maintenance",
            icon: <SettingsOutlinedIcon fontSize="small"/>,
         },
         "Pricing":{
            text : "Pricing",
            icon: <MonetizationOnOutlinedIcon fontSize="small"/>,
            subtext: ["Pricing", "Pricing V2", "Pricing V3" ],

         },
         "Profile":{
            text : "Profile",
            icon: <AccountCircleOutlinedIcon fontSize="small"/>,
         },
         "Search":{
            text : "Search",
            icon: <SearchOutlinedIcon fontSize="small"/>,
            subtext: ["Classic",  "Modern" ],

         },
         "FAQ":{
            text : "FAQ",
            icon: <LiveHelpOutlinedIcon fontSize="small"/>,
         },
        },
    "user interface": {
        "Icons":{
            text : "Icons",
            icon: <CropOriginalOutlinedIcon fontSize="small"/>,
         },
         "Typography":{
            text : "Typography",
            icon: <TextFieldsOutlinedIcon fontSize="small"/>,
         },
         "Helper Classes":{
            text : "Search",
            icon: <HelpOutlineOutlinedIcon fontSize="small"/>,
         },
         "Page Layouts":{
            text : "FAQ",
            icon: <FileCopyOutlinedIcon fontSize="small"/>,
            subtext: ["Cadred", "Simple", "Blank" ],
         },
    },
    "configuration": {
        "Theming":{
            text : "Theming",
            icon: <WbSunnyOutlinedIcon fontSize="small"/>,
         },
         "Material Ui Components":{
            text : "Material Ui Components",
            icon: <AccountTreeOutlinedIcon fontSize="small"/>,
         }, 
        "3rd Party Components":{
            text : "3rd Party Components",
            icon: <AccountTreeOutlinedIcon fontSize="small"/>,
         },
    },
    "auth": {
        "Login":{
            text : "Login",
            icon: <LockOpenOutlinedIcon fontSize="small"/>,
         }, 
        "Register":{
            text : "Register",
            icon: <PersonAddOutlinedIcon fontSize="small"/>,
         }, 
    },

}];



const Default: React.FC<IProps> = ({ children, onClick, open, drawerwidth }) => {
    let drawerstate : IState;
    drawerstate ={
        drawerwidth: drawerwidth

    }
    const classes = useStyles(drawerstate);

    return (
        <div >
            <Header onClick={onClick} drawerWidth ={drawerwidth} color="#050517" open ={open}/>
            <nav className={classes.drawer} aria-label="mailbox folders">
               <Hidden smUp >  
                    <Drawer open={open} 
                        drawerWidth ={drawerwidth}
                        drawerVariant="temporary"
                        drawerAnchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        handleDrawerToggle={onClick}
                        ListDrawerItems={ListDrawerItems}
                        headerTitle="Test"
                        />
                </Hidden>
                <Hidden xsDown  > 
                    <Drawer open={open} 
                        drawerWidth ={drawerwidth}
                        drawerVariant="persistent"
                        drawerAnchor= "left"
                        handleDrawerToggle={onClick}
                        drawerClassName={classes.drawer}
                        ListDrawerItems={ListDrawerItems}
                        headerTitle="Test"
                        />
                </Hidden> 
            </nav>

            <div >{children}</div>
        </div>
    )
};

export default Default;