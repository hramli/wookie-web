import React from "react";
import wookieLogo from "../images/wookieLogo.jpg";
import "./Header.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

import MenuIcon from "@mui/icons-material/Menu";

class NavMenu extends React.Component {
  render() {
    return (
      <div>TEST</div>
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
      <div id="header" className="container-fluid p-0 main-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={this.toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <div>
                <img src={wookieLogo} className="main-logo" alt="" />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            docked={false}
            onRequestChange={(open) => this.setState({ open })}
            open={this.state.open}
            onClose={this.toggleDrawer}
          >
            <NavMenu />
          </Drawer>
        </Box>
      </div>
    );
  }
}
