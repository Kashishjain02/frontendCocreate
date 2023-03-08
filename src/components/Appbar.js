import { cloneElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Link from 'react-router-dom';

// project imports
// import Logo from 'ui-component/Logo';

// assets
// import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark
        }
    });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);
    const [currTab, setCurrTab] = useState('home');
    let tab = window.location.pathname;
    tab = tab.replace('/', '');
    var buttonColor= ['none', 'none', 'none'];

    if(tab == 'mentors') {
        buttonColor = ["#ECEBF8", 'none', 'none'];
    }
    
    /** Method called on multiple components with different event types */
    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const changeBg = (e) => {
        const tab = window.location.pathname;
        tab = tab.replace('/', '');
        setCurrTab(e.currentTarget.value);
        if(currTab == 'mentor'){
            e.currentTarget.style.backgroundColor = '#D1F2F8';
        }

        else if(currTab == 'investor'){

        }

    }
    const logout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }
    const userr = localStorage.getItem('User');
    const user = JSON.parse(userr);
    // console.log(user.role, "USER");
    // const role = user.role;

    return (
        <ElevationScroll  >
            <MuiAppBar   >
                <Container maxWidth='xl' sx={{ padding: '5px', alignContent: 'center' }} >
                    <Toolbar style={{display: 'flex', justifyContent: "space-between"}}>
                        <Typography component="div" sx={{ textDecoration: 'none', flexGrow: 1, textAlign: 'left' , maxWidth: '300px'}} style={{ color: 'black', fontSize: '30px', fontFamily: 'dancing script' }}>
                            <RouterLink to='/home' style={{ textDecoration: "none", color: 'black' }}>
                                <img src={'/assets/logo_1.png'} style={{height: '40px', marginTop: '15px', marginLeft: '10px'}}/>
                            </RouterLink>
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={3}>
                            <RouterLink to='/mentors' style={{ textDecoration: 'none' }}>  <Button id='mentorConnect' value='mentor' style={{ color: 'rgb(54, 63, 84)', background: buttonColor[0], fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto', height: '45px', padding: '0px 15px', transition: 'backgroundColor 2s' }}>
                                <p>Mentor Connect</p>
                            </Button>
                            </RouterLink>
                            <RouterLink to='/investor' style={{ textDecoration: 'none' }}> <Button style={{ color: 'rgb(54, 63, 84)', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto' }}  >
                                Investor Connect
                            </Button>
                            </RouterLink>
                            <Button style={{ color: 'rgb(54, 63, 84)', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto' }} >
                                Grants Connect
                            </Button>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                            <RouterLink style={{ textDecoration: 'none' }} to='/aboutus'>
                                <Button style={{ color: 'rgb(54, 63, 84)', textTransform: 'none', fontWeight: '700', fontSize: '14px', fontFamily: 'roboto' }} >
                                    About Us
                                </Button>
                            </RouterLink>
                            <RouterLink to='/user/login' style={{ textDecoration: 'none' }}>
                                {localStorage.getItem('token') == null ? <Button


                                    disableElevation
                                    variant="contained"
                                    style={{ color: 'white', background: 'rgba(36, 61, 102, 1)', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto', padding: '10px 30px', borderRadius: '7px' }}
                                >
                                    Get Started
                                </Button> : <></>}
                            </RouterLink>
                            
                            {user ?
                                (

                                    user.role === 'user' ? <RouterLink style={{ textDecoration: 'none' }} to='/Dashboard'>
                                        <Button style={{ color: 'white', background: 'rgba(36, 61, 102, 1)', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto', padding: '10px 30px', borderRadius: '7px' }} >
                                            Dashboard
                                        </Button>
                                    </RouterLink>
                                        :
                                        <RouterLink style={{ textDecoration: 'none' }} to='/Dashboard/Mentor'>
                                            <Button style={{ color: '#2e2ef5', background: '#b3daff', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto', padding: '10px 30px', borderRadius: '7px' }} >
                                                Sign Up
                                            </Button>
                                        </RouterLink>

                                )


                                :
                                <></>

                            }
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' }, background: 'none' }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                <Box
                                    sx={{
                                        width: 'auto'
                                    }}
                                    role="presentation"
                                    onClick={drawerToggler(false)}
                                    onKeyDown={drawerToggler(false)}
                                >
                                    <List>
                                        <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    {/* <IconHome2 /> */}
                                                </ListItemIcon>
                                                <ListItemText primary="Home" />
                                            </ListItemButton>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    {/* <IconDashboard /> */}
                                                </ListItemIcon>
                                                <ListItemText primary="Dashboard" />
                                            </ListItemButton>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            href="https://codedthemes.gitbook.io/berry"
                                            target="_blank"
                                        >
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    {/* <IconBook /> */}
                                                </ListItemIcon>
                                                <ListItemText primary="Documentation" />
                                            </ListItemButton>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            href="https://material-ui.com/store/items/berry-react-material-admin/"
                                            target="_blank"
                                        >
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    {/* <IconCreditCard /> */}
                                                </ListItemIcon>
                                                <ListItemText primary="Purchase Now" />
                                            </ListItemButton>
                                        </Link>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar >
        </ElevationScroll >
    );
};

export default AppBar;
