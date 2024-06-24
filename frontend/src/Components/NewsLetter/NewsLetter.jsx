import { Typography, Grid, Input, Button } from "@mui/material";
import React from "react";
import _isEmpty from "lodash/isEmpty";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  newsLettersContainer: {
    background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
    width: "80% !important",
    display: "flex",
    alignItems: "center",
    padding: "75px",
    flexDirection: "row !important",
    height: "60vh",
    marginBottom: "50px !important",
  },
  newsLetterContents: {
    width: "100%",
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 25,
  },
  newsLettersHeaderText: {
    fontWeight: "600 !important",
  },
  newsLettersSubText: {
    fontWeight: "500 !important",
  },
  newsLettersButton: {
    backgroundColor: `${theme.palette.background.black} !important`,
    color: "#fff !important",
    borderRadius: "30px !important",
    textTransform: "none !important",
    padding: "1rem 3rem !important",
    marginTop: "1rem !important",
    border: "none",
    fontSize: "17px !important",
    fontWeight: "600 !important",
    cursor: "pointer",
  },
  inputButtonContainer: { display: "flex" },
});

function NewsLetter(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.newsLettersContainer}>
      <Grid item className={classes.newsLetterContents}>
        <Typography variant="h3" className={classes.newsLettersHeaderText}>
          Get Exclusive newsLetters On Your Email
        </Typography>
        <Typography variant="h6" className={classes.newsLettersSubText}>
          subscribe to our newsletterand stay updated
        </Typography>
        <Grid className={classes.inputButtonContainer}>
          <Input
            placeholder="Your email id"
            type="email"
            sx={{ border: "none", outline: "none", width: "20rem" }}
          />
          <Button className={classes.newsLettersButton}>Subscribe</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(NewsLetter);
