import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from 'react-router';

const WOOKIE_INSTAGRAM_ACCOUNT = "@TheWookieBakery"
const WOOKIE_PHONE_NUMBER = "+65 945 945 45"

function MainLogo() {
  return (
    <Link to="/">
      <img src={`${process.env.PUBLIC_URL}/images/wookieLogo.jpg`} className="main-logo" alt="" />
    </Link>
  )
}

function NavMenu() {
  const [wookieProductMenuOpen, setWookieProductMenuOpen] = useState(false);

  return (
    <div id="nav-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/story">Our Story</Link>
        </li>
        <li>
          <span className="sub-menu-header" onClick={() => setWookieProductMenuOpen(!wookieProductMenuOpen)}>
            Wookie Products
            <b className="caret"></b>
          </span>
        </li>
        {wookieProductMenuOpen &&
          (<ul className="sub-menu">
            <li>
              <Link to="/cakes">Cakes</Link>
            </li>
            <li>
              <Link to="/cookies">Wookie Cookies</Link>
            </li>
            <li>
              <Link to="/burgers">Wookie Burgers</Link>
            </li>
          </ul>)}
        <li>
          <Link to="/help">FAQ And Help</Link>
        </li>
      </ul>
    </div>
  );
}

export function Header(props) {
  const [open, setOpen] = useState(false);

  let showNavMenu = props.showNavMenu;
  if (showNavMenu == null)
      showNavMenu = true;

  let location = useLocation();

  useEffect(() => {
    //Close side drawer on every click on links
    setOpen(false);
  }, [location]);

  return (
    <div id="header" className="container-fluid p-0 main-header-wrapper">
      <div className="d-lg-none">
        <AppBar position="static">
          <Toolbar>
            <div className="hamburger-wrapper">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setOpen(!open)}
                className="hamburger-icon"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="main-logo-wrapper">
              <MainLogo />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          docked={false}
          onRequestChange={() => setOpen(open)}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(!open)}
              className="cross-icon"
            >
              <CloseIcon />
            </IconButton>
            <NavMenu />
          </div>
        </Drawer>
      </div>
      <div id="desktop-header" className="d-none d-lg-block">
        <div className="desktop-logo-wrapper">
          <MainLogo />
          <span className="desktop-right-logo-outer-wrapper">
            <span className="desktop-right-logo-inner-wrapper">
              <InstagramIcon />
              <span className="desktop-right-logo-text">{WOOKIE_INSTAGRAM_ACCOUNT}</span>
            </span>
            <span className="desktop-right-logo-inner-wrapper">
              <WhatsAppIcon />
              <span className="desktop-right-logo-text">{WOOKIE_PHONE_NUMBER}</span>
            </span>
          </span>
        </div>
        {showNavMenu &&
          <div id="main-menu">
            <NavMenu />
          </div>
        }
      </div>
    </div>
  );
}
