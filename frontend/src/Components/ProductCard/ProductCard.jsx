import { Typography, Grid } from "@mui/material";
import React from "react";
import _isEmpty from "lodash/isEmpty";
import Item from "../Item/Item";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  popularContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column !important",
  },
  productContainer: {
    width: "100%",
    padding: 20,
    margin: "50px 0 !important",
  },
  popularBorder: {
    borderBottom: "6px solid black",
    color: "transparent",
  },
});

function ProductCard(props) {
  const { classes, productData = [], title = "" } = props;

  const getProductCard = () => {
    return (
      !_isEmpty(productData) &&
      productData.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Item product={product} classes={classes} />
        </Grid>
      ))
    );
  };

  return (
    <div>
      <Grid container className={classes.popularContainer} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.popularBorder}>
            -----------------------------------
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.productContainer}
          spacing={2}
          rowGap={3}
        >
          {getProductCard()}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ProductCard);
