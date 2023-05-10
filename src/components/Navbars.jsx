import React, { useState } from "react";
import Logo from "../assets/Logo1.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { TfiAlignLeft } from "react-icons/tfi";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbars.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fade } from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Offerings",
    },
    {
      text: "Service",
    },
    {
      text: "Contact",
    },
    {
      text: "Join Now",
      button: true, // add a new menu item for the "Join Now" button
    },
  ];

  return (
    <nav>
      <div className="navbar-logo-container fixed top-0">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="dropdown">
          <button
            className="dropdown-toggle bg-white fw-3 text-dark fs-5"
            data-toggle="dropdown">
            Offerings
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu text-center">
            <li className="fs-5">
              <Link to="/mentor-connect">Mentor Connect</Link>
            </li>
            <li>
              <Link to="/investor-connect">Investor Connect</Link>
            </li>
            <li>
              <Link to="/grant-connect">Grant Connect</Link>
            </li>
          </ul>
        </div>
        <Link to="/">Service</Link>
        <Link to="/">Contact</Link>
        <Link to="/register">
          <button className="primary-button">Join Now</button>
        </Link>
      </div>

      <div className="navbar-menu-container">
        <TfiAlignLeft onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Fade in={openMenu}>
          <Box sx={{ width: 250 }}>
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  {item.button ? (
                    <ListItemButton>
                      <button className="primary-button">{item.text}</button>
                    </ListItemButton>
                  ) : (
                    <ListItemButton>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  )}
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Fade>
      </Drawer>
    </nav>
  );
};

export default Navbar;
