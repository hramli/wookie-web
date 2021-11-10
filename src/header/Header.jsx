import React from "react";
import wookieLogo from "../images/wookieLogo.jpg";
import "./Header.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import CloseIcon from "@mui/icons-material/Close";

const instagramAccount = "@TheWookieBakery"
const phoneNumber = "+65 945 945 45"

function MainLogo() {
  return (
    <a href="/">
      <img src={wookieLogo} className="main-logo" alt="" />
    </a>
  )
}

class NavMenu extends React.Component {
  render() {
    return (
      <div id="nav-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Our Story</a>
          </li>
          <li>
            <a href="/">Wookie Products</a>
          </li>
          <li>
            <a href="/">FAQ And Help</a>
          </li>
        </ul>
      </div>
    );
  }
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleDrawer = () => this.setState({ open: !this.state.open });

  render() {
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
                  onClick={this.toggleDrawer}
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
            onRequestChange={(open) => this.setState({ open })}
            open={this.state.open}
            onClose={this.toggleDrawer}
          >
            <div>
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                onClick={this.toggleDrawer}
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
                <span className="desktop-right-logo-text">{instagramAccount}</span>
              </span>
              <span className="desktop-right-logo-inner-wrapper">
                <WhatsAppIcon />
                <span className="desktop-right-logo-text">{phoneNumber}</span>
              </span>
            </span>
          </div>
          <div id="main-menu">
            <NavMenu />
          </div>
        </div>
      </div>
    );
  }
}
