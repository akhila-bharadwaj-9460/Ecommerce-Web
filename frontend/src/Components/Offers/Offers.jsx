import React from "react";
import { withStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/base";
import exclusiveImage from "../Assets/exclusive_image.png";

const styles = (theme) => ({
  offersContainer: {
    background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
    width: "70% !important",
    display: "flex",
    alignItems: "center",
    padding: "75px",
    flexDirection: "row !important",
    height: "70vh",
    marginBottom: "50px !important",
  },
  offerRight: {
    width: "50%",
    display: "flex",
    flexDirection: "column !important",
    alignItems: "start",
    justifyContent: "center",
    rowGap: 10,
  },
  offerLeft: {
    width: "50%",
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    justifyContent: "center",
  },
  offersHeaderText: {
    fontWeight: "600 !important",
  },
  offersSubText: {
    fontWeight: "500 !important",
  },
  offersButton: {
    backgroundColor: `${theme.palette.text.red} !important`,
    color: "#fff !important",
    borderRadius: "30px !important",
    textTransform: "none !important",
    padding: "0.7rem 3rem !important",
    marginTop: "1rem !important",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
  },
});
function Offers(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.offersContainer}>
      <Grid item className={classes.offerRight}>
        <Typography variant="h2" className={classes.offersHeaderText}>
          Exclusive
        </Typography>
        <Typography variant="h2" className={classes.offersHeaderText}>
          Offers For You
        </Typography>
        <Typography variant="h6" className={classes.offersSubText}>
          ONLY ON BEST SELLERS PRODUCTS
        </Typography>

        <Button className={classes.offersButton}>Check Now</Button>
      </Grid>
      <Grid item className={classes.offerLeft}>
        <img src={exclusiveImage} alt="exclusive image" width={300} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Offers);
