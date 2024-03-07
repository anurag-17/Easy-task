import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import profile from "../../Assets/svg/home/profile.svg"
import bars from "../../Assets/svg/home/bars.svg"
import Upcoming from "../../Assets/svg/home/upcoming.svg"
import Expired from "../../Assets/svg/home/expired.svg"
import Today from "../../Assets/svg/home/today.svg"
import Tomorrow from "../../Assets/svg/home/tomorrow.svg"
import Calendar from "../../Assets/svg/home/calendar.svg"
import Plus from "../../Assets/svg/home/plus.svg"
import Slider from "../../Assets/svg/home/slider.svg"
import Signout from "../../Assets/svg/home/signout.svg"
import Search from "../../Assets/svg/home/search.svg"
import Notification from "../../Assets/svg/home/notifications.svg"
import TodayPage from '../today-task/Today';
import "./home.css"

const dummyArray =
    [
        {
            "label": "Upcoming",
            "icon": Upcoming,
            "totalNumber": 12
        },
        {
            "label": "Expired",
            "icon": Expired,
            "totalNumber": 2
        },
        {
            "label": "Today",
            "icon": Today,
            "totalNumber": 5
        },
        {
            "label": "Tomorrow",
            "icon": Tomorrow,
            "totalNumber": 12
        },
        {
            "label": "Calendar",
            "icon": Calendar,
            // "totalNumber": ''
        }
    ]

const dummyArray1 = [
    {
        "label": "Personal",
        "icon": "👤",
        "totalNumber": 12,
        color: " #ff6b6b"
    },
    {
        "label": "Work",
        "icon": "💼",
        "totalNumber": 2,
        color: "#66d9e8"
    },
    {
        "label": "List!",
        "icon": "📝",
        "totalNumber": 5,
        color: " #ffd43b"
    },

]




function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const drawerWidth = isClosing ? '100px' : '300px';

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const styles = {
        square: {
            width: '16px',
            height: '16px',
            // backgroundColor: '#66d9e8',
            borderRadius: '4px',
        },
        head: {
            color: '#444444',
            fontSize: '12px',
            fontFamily: 'Lexend Deca',
            fontWeight: 600,
            lineHeight: '16px',
            textTransform: 'uppercase',
            paddingBottom: '5px'
        },
        sidebar: {
            width: isClosing ? '100px' : '300px',
            // height: '852px',
            backgroundColor: '#f4f4f4',
            borderRadius: '16px',
            padding: '30px 16px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
    
        },
        hoverLabel: {
            width: '298px',
            height: '40px',
            backgroundColor: '#ebebeb',
            borderRadius: '8px',
            opacity: 0.97,
        },
        icon: {
            height: 'auto', width: '100%'
        }
    };
    const drawer = (
        <div style={styles.sidebar}>
            {/* <Toolbar /> */}
            {/* <Divider /> */}
            <Box>
                {
                    !isClosing ?
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Box sx={{ height: '88px', width: '88px', borderRadius: '50%' }}> <img src={profile} alt="profile" /> </Box>
                                <Typography variant='p' sx={{
                                    color: '#000000',
                                    fontSize: '24px',
                                    fontFamily: 'Roboto',
                                    fontWeight: '500',
                                    lineHeight: '28px',
                                    ml: 1
                                }}>Giorgia</Typography>
                            </Box>
                            <Box sx={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                onClick={handleDrawerClose} > <img src={bars} alt="bars" /> </Box>
                        </Box>
                        :

                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', rowGap:'20px' }}>
                            <Box sx={{ width: '20px', height: '20px', cursor: 'pointer', ml: "auto" }}
                                onClick={handleDrawerTransitionEnd} > <img src={bars} alt="bars" /> </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
                                <Box sx={{ height: '60px', width: '60px', borderRadius: '50%' }}> <img src={profile} alt="profile" style={{height: 'auto', width: '100%'}}/> </Box>
                            </Box>
                        </Box>
                }
                <List sx={{ mt: 4 }}>
                    <Typography variant='p' style={styles.head}>Tasks</Typography>
                    {dummyArray.map((items, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton sx={{
                                '&:hover': {
                                    backgroundColor: '#ebebeb',
                                    borderRadius: '8px',
                                    opacity: 0.97,
                                }
                            }}>
                                <ListItemIcon>
                                    <img src={items.icon} alt={items.icon} />
                                </ListItemIcon>
                                {
                                    !isClosing &&
                                    <>
                                        <ListItemText primary={items.label}
                                            sx={{ color: '#444444', fontSize: '16px', fontFamily: 'Lexend Deca', lineHeight: '24px', m: 0 }}
                                        />
                                        <ListItemText primary={items.totalNumber} sx={{ m: 0, textAlign: 'right' }} />
                                    </>
                                }
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{ backgroundColor: '#ebebeb', my: 2 }} />
                <List  >
                    <Typography variant='p' style={styles.head}>List</Typography>
                    {dummyArray1.map((items, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton sx={{
                                '&:hover': {
                                    backgroundColor: '#ebebeb',
                                    borderRadius: '8px',
                                    opacity: 0.97,
                                }
                            }}>
                                <Box sx={{ background: items.color, height: '16px', width: '16px', borderRadius: '4px', mr: 2 }}>
                                </Box>
                                {
                                    !isClosing &&
                                    <>
                                        <ListItemText primary={items.label}
                                            sx={{ color: '#444444', fontSize: '16px', fontFamily: 'Lexend Deca', lineHeight: '24px', m: 0, }}
                                        />
                                        <ListItemText primary={items.totalNumber} sx={{ m: 0, textAlign: 'right' }} />
                                    </>
                                }
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', px: '16px' }}>
                    <Box sx={{ height: '16px', width: '16px', borderRadius: '4px', mr: 2 }}>
                        <img src={Plus} alt="Plus" />
                    </Box>
                    {
                        !isClosing &&
                        <>
                            <Typography sx={{ color: '#444444', fontSize: '16px', fontFamily: 'Lexend Deca', lineHeight: '24px', m: 0, }}
                            > Add new list </Typography>
                        </>
                    }
                </Box>

                <Divider sx={{ backgroundColor: '#ebebeb', my: 3 }} />
            </Box>


         <Box>

         {
                !isClosing ?
                    <>
                        <Box sx={{ px: '16px', pt: '150px' }}>
                            <Box sx={{ display: 'flex', }}>
                                <Box sx={{ height: '16px', width: '16px', borderRadius: '4px', mr: 2 }}>
                                    <img src={Slider} alt="Setting" />
                                </Box>

                                <Typography sx={{ color: '#444444', fontSize: '16px', fontFamily: 'Lexend Deca', lineHeight: '24px', m: 0, }}
                                > Setting </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                <Box sx={{ display: 'flex', my: 2 }}>
                                    <Box sx={{ height: '16px', width: '16px', borderRadius: '4px', mr: 2 }}>
                                        <img src={Signout} alt="Signout" />
                                    </Box>
                                    <Typography sx={{ color: '#444444', fontSize: '16px', fontFamily: 'Lexend Deca', lineHeight: '24px', m: 0, }}
                                    > Sign out </Typography>

                                </Box>
                                <Box sx={{ display: 'flex', my: 2, alignItems: 'center' }}>
                                    <Box sx={{ height: '19px', width: '25px', borderRadius: '4px', mr: 2 }}>
                                        <img src={Search} alt="Search" style={styles.icon} />
                                    </Box>
                                    <Box sx={{ height: '29px', width: '30px', borderRadius: '4px', mr: 2 }}>
                                        <img src={Notification} alt="Notification" style={styles.icon} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </>
                    :
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px', pl: '16px',pt: '90px' }}>
                            <Box sx={{ height: '16px', width: '16px', borderRadius: '4px', mr: 2 , cursor:'pointer'}}>
                                <img src={Slider} alt="Setting" />
                            </Box>

                            <Box sx={{ height: '16px', width: '16px', borderRadius: '4px', mr: 2 , cursor:'pointer' }}>
                                <img src={Signout} alt="Signout" />
                            </Box>
                            <Box sx={{ height: '18px', width: '18px', borderRadius: '4px', mr: 2 , cursor:'pointer' }}>
                                <img src={Search} alt="Search" style={styles.icon} />
                            </Box>
                            <Box sx={{ height: '22px', width: '22px', borderRadius: '4px', mr: 2 , cursor:'pointer' }}>
                                <img src={Notification} alt="Notification" style={styles.icon} />
                            </Box>
                        </Box>
                    </>
            }

         </Box>

        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', padding: "24px" }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRight: 'none' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: drawerWidth, position: 'fixed',
                            top: '20px',
                            bottom: '20px',

                            left: '20px', borderRight: 'none'
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <TodayPage />
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
