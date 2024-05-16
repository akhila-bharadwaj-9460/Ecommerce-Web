import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  appBar: {
    backgroundColor: `${theme.palette.background.main} !important`,
    color: `${theme.palette.text.main} !important`,
    padding: "3rem",
  },
  logo: {
    marginRight: "1rem",
  },
  toolbar: { display: "flex !important", justifyContent: "space-between" },
  toolBarBox: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    marginRight: 2,
    display: "flex",
    fontFamily: "roboto",
    fontWeight: "700 !important",
    letterSpacing: ".2rem",
    color: "inherit",
    textDecoration: "none",
  },
  menuItem: {
    padding: 2,
    color: `${theme.palette.text.main} !important`,
    display: "block",
    fontSize: "1.2rem !important",
    marginRight: "1rem",
    "&:hover": {
      backgroundColor: `${theme.palette.background.main} !important`,
    },
    textTransform: "none !important",
  },
  activeMenuItem: {
    padding: 2,
    color: `${theme.palette.text.main} !important`,
    display: "block",
    fontSize: "1.2rem !important",
    marginRight: "1rem",
    border: "none",
    borderBottom: `2px solid ${theme.palette.border.contrast} !important`,
    borderRadius: "0 !important",
    "&:hover": {
      backgroundColor: `${theme.palette.background.main} !important`,
    },
    textTransform: "none !important",
  },
  loginText: {
    marginRight: 2,
    display: "flex",
    fontFamily: "roboto",
    fontWeight: "400 !important",
    color: `${theme.palette.text.main} !important`,
    textDecoration: "none",
    fontSize: "1.2rem !important",
    textTransform: "none !important",
  },
  loginButton: {
    padding: " 0.5rem 2rem",
    border: `1px solid ${theme.palette.border.main}`,
    borderRadius: "2rem",
    marginRight: "2rem",
  },
  cartButton: {
    "&:hover": {
      backgroundColor: `${theme.palette.background.main}`,
    },
  },
  hyperlink: {
    textDecoration: "none",
  },
});

const pages = [
  { name: "Shop", link: "/" },
  { name: "Mens", link: "/mens" },
  { name: "Womens", link: "/womens" },
  { name: "kids", link: "/kids" },
];

const Navbar = (props) => {
  const { classes } = props;
  const [selectedMenu, setSelectedMenu] = useState(pages[0]);
  const [activeMenu, setActiveMenu] = useState(0);

  const handleMenu = (menu, index) => {
    setSelectedMenu(menu);
    setActiveMenu(index);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbar}>
          <Box className={classes.toolBarBox}>
            <img src={logo} className={classes.logo} alt="logo" />

            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              className={classes.logoText}
            >
              SHOPPER
            </Typography>
          </Box>

          <Box className={classes.toolBarBox}>
            {pages.map((page, index) => (
              <Link to={page.link} className={classes.hyperlink}>
                <Button
                  key={page.name}
                  className={
                    activeMenu === index
                      ? classes.activeMenuItem
                      : classes.menuItem
                  }
                  variant="h5"
                  onClick={() => handleMenu(page.name, index)}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box className={classes.toolBarBox}>
            <Link to="/login">
              <Button className={classes.loginButton}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  className={classes.loginText}
                >
                  Login
                </Typography>
              </Button>
            </Link>
            <Link to="/cart">
              <Button className={classes.cartButton}>
                <img src={cart_icon} alt="cart" />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
