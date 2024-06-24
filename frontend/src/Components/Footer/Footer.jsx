import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import _isEmpty from "lodash/isEmpty";
import { withStyles } from "@mui/styles";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import logo from "../Assets/logo.png";

const styles = (theme) => ({
  logoText: {
    marginRight: 2,
    display: "flex",
    fontFamily: "roboto",
    fontWeight: "700 !important",
    letterSpacing: ".2rem",
    color: "inherit",
    textDecoration: "none",
  },
  logo: {
    marginRight: "1rem",
  },
  toolbar: { display: "flex !important", justifyContent: "space-between" },
  toolBarBox: {
    display: "flex",
    alignItems: "center",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80% !important",
    height: 200,
    paddingBottom: 30,
    borderBottom: `2px solid ${theme.palette.border.main}`,
  },
  footerContents: {
    display: "flex",
    gap: 30,
  },
  copyrightContainer: {
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "center",
    width: "80% !important",
    height: 100,
  },
});

function Footer(props) {
  const { classes } = props;

  const footerContents = [
    { name: "Company", type: "text" },
    { name: "Products", type: "text" },
    { name: "Offices", type: "text" },
    { name: "About", type: "text" },
    { name: "Contact", type: "text" },
  ];
  const socialMediaContents = [
    { name: "instagram", type: "image", src: instagram_icon },
    { name: "whatsapp", type: "image", src: whatsapp_icon },
    { name: "pinterest", type: "image", src: pinterest_icon },
  ];

  const displayFooterContent = (contents) => {
    return (
      !_isEmpty(contents) &&
      contents.map((content) => {
        const { type = "", name = "", src = "" } = content;
        if (type === "image" && src) {
          return (
            <span>
              <img src={src} alt={name} />
            </span>
          );
        } else if (type === "text") {
          return (
            <Typography variant="h6" className={classes.newsLettersHeaderText}>
              {name}
            </Typography>
          );
        }
      })
    );
  };

  return (
    <>
      <Grid container className={classes.footerContainer}>
        <Grid item className={classes.foorterHeader}>
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
        </Grid>
        <Grid item className={classes.footerContents}>
          {displayFooterContent(footerContents)}
        </Grid>
        <Grid item className={classes.footerContents}>
          {displayFooterContent(socialMediaContents)}
        </Grid>
      </Grid>
      <Grid container className={classes.copyrightContainer}>
        <Grid item className={classes.footerContents}>
          <Typography>Copyright @ 2024 - All Right Reserved </Typography>{" "}
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Footer);
