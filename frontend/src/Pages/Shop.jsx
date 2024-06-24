import React from "react";
import HomePage from "../Components/HomePage/HomePage";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import { withStyles } from "@mui/styles";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const styles = (theme) => ({
  shopMainContainer: {
    display: "flex",
    justifyContant: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
function Shop(props) {
  const { classes } = props;
  return (
    <div className={classes.shopMainContainer}>
      <HomePage props={props}></HomePage>
      <Popular props={props}></Popular>
      <Offers props={props}></Offers>
      <NewCollections props={props}></NewCollections>
      <NewsLetter props={props}></NewsLetter>
    </div>
  );
}

export default withStyles(styles)(Shop);
