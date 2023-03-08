import { cloneElement, useState } from 'react';
import { Link as RouterLink, useNavigate, Navigate, useParams } from 'react-router-dom';

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
    const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        // window.location.reload();
        console.log("Logout...")
        navigate('/home')
        window.location.reload();
    }

    const user = localStorage.getItem('Mentor');

    return (
        <ElevationScroll  >
            <MuiAppBar   >
                <Container maxWidth='xl' sx={{ padding: '10px', alignContent: 'center' }} >
                    <Toolbar   >
                        <Typography component="div" sx={{ textDecoration: 'none', flexGrow: 1, textAlign: 'left' }} style={{ color: 'black', fontSize: '30px', fontFamily: 'dancing script' }}>
                            <RouterLink to='/home' style={{ textDecoration: "none", color: 'black' }}>
                                <img src={'/assets/logo.png'} />
                            </RouterLink>
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
                            {/* <RouterLink to='/mentors' style={{ textDecoration: 'none' }}>  <Button style={{ color: 'rgb(54, 63, 84)', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto' }}>
                                <p>Mentor Connect</p>
                                <KeyboardArrowDownIcon sx={{ margin: '0px' }} />
                            </Button>
                            </RouterLink> */}
                            {/* <Button style={{ color: 'rgb(54, 63, 84)', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto' }}  >
                                Investor Connect
                                <KeyboardArrowDownIcon sx={{ margin: '0px' }} />
                            </Button>
                            <Button style={{ color: 'rgb(54, 63, 84)', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto' }} >
                                Grants Connect
                            </Button> */}
                            {/* <RouterLink to='/user/login' style={{ textDecoration: 'none' }}>
                                {localStorage.getItem('token') == null ? <Button


                                    disableElevation
                                    variant="contained"
                                    style={{ color: '#2e2ef5', background: '#b3daff', fontWeight: '700', fontSize: '14px', textTransform: 'none', fontFamily: 'roboto', padding: '10px 30px', borderRadius: '7px' }}
                                >
                                    Get Started
                                </Button> : <></>}
                            </RouterLink>*/}
                            <RouterLink style={{ textDecoration: 'none' }} to='/login'>
                                <Button onClick={logout} style={{ color: '#2e2ef5', background: '#b3daff', fontWeight: '700', fontSize: '17px', textTransform: 'none', fontFamily: 'roboto', padding: '10px 30px', borderRadius: '7px' }} >
                                    Logout
                                </Button>
                            </RouterLink>
                            {localStorage.getItem('token') != null ?
                                <><Button id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick} style={{ color: 'rgb(54, 63, 84)', textTransform: 'none', fontWeight: '700', fontSize: '14px', fontFamily: 'roboto' }}>
                                    <AccountCircle style={{ width: '55px', fontSize: '32px' }} />
                                </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        {/* <MenuItem onClick={logout}>Logout</MenuItem> */}
                                    </Menu>
                                </>
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
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
