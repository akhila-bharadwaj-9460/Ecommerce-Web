import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  itemCard: {
    margin: "0 15px",
  },
  priceText: {
    fontWeight: "500 !important",
    display: "flex",
    width: "30%",
    justifyContent: "space-between",
  },
  newPrice: { color: theme.palette.text.secondary },
  oldPrice: {
    textDecoration: "line-through",
    color: theme.palette.text.inActive,
  },
});

function Item({ product, classes }) {
  const {
    name: productName,
    new_price: newPrice,
    old_price: oldPrice,
    image: productImage,
    id,
  } = product;

  return (
    <Card sx={{ maxWidth: 345 }} key={id} className={classes.itemCard}>
      <CardMedia
        sx={{ height: 400 }}
        image={productImage}
        title={productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {productName}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          className={classes.priceText}
        >
          <span className={classes.newPrice}>{`${newPrice}`}</span>
          <span className={classes.oldPrice}>{`${oldPrice}`}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Item);
