import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import { withStyles } from "@mui/styles";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png";

const styles = (theme) => ({
  hompageMain: {
    background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
    height: "90vh",
  },
  homepageLeftandRight: {
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leftContainer: {
    width: "50% !important",
  },
  leftText: {
    fontWeight: "600 !important",
  },
  handImg: {
    height: "4rem",
    width: "4rem",
  },
  homePageBtn: {
    backgroundColor: "#ff4141 !important",
    color: "#fff !important",
    borderRadius: "30px !important",
    textTransform: "none !important",
    padding: "0.5rem 1rem !important",
    marginTop: "1rem !important",
  },
  homePageBtnText: {
    fontSize: "0.8rem",
    fontWeight: "500 !important",
  },
});
function HomePage(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container className={classes.hompageMain}>
        <Grid item xs={6} className={classes.homepageLeftandRight}>
          <Grid container className={classes.leftContainer}>
            <Grid item>
              <Typography variant="h6" className={classes.leftText}>
                NEW ARRIVALS ONLY
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" className={classes.leftText}>
                new{" "}
                <img alt="hand" src={hand_icon} className={classes.handImg} />{" "}
                collections for everyone
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.homePageBtn}>
                <Typography className={classes.homePageBtnText}>
                  Latest Collections{" "}
                  <img src={arrow_icon} alt="arrow" width={15} />
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.homepageLeftandRight}>
          <img src={heroImage} alt="hero icon" height={700} width={500} />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(HomePage);
