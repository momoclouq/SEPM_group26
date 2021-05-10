import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import {
  Card,
  Container,
  Avatar,
  TextField,
  Link,
  withStyles,
  Typography,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import { Description } from "@material-ui/icons";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const packs = [
  {
    name: "Basic",
    color: "#aa2ee6",
    line1: "this is line 1",
    line2: "this is line 2",
    line3: "this is line 3",
    coins: "1",
    cost: "1 month",
  },
  {
    name: "Advance",
    color: "#ff79cd",
    line1: "this is line 1",
    line2: "this is line 2",
    line3: "this is line 3",
    coins: "3",
    cost: "3 months",
  },
  {
    name: "prenium",
    color: "#ffdf6b",
    line1: "this is line 1",
    line2: "this is line 2",
    line3: "this is line 3",
    coins: "5",
    cost: "6 months",
  },
];

const PackCard = withStyles({
  root: {
    minWidth: "200px",
    maxWidth: "300px",
    width: "100%",
    maxWidth: "350px",
    height: "content-fit",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "inherit",
    position: "absolute",
  },
})(Card);

const BuyButton = withStyles({
  root: {
    margin: "20px",
    backgroundColor: "inherit",
    borderRadius: "0",
    border: "white solid",
    color: "white",
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    margin: "0",
    height: "30%",
  },
  title: { color: "white" },
}));

const Des = (packs) => {
  const { name, color, line1, line2, line3, coins, cost } = packs.pack;
  const classes = useStyles();

  return (
    <Grid item lg={4} color>
      <div style={{ backgroundColor: color }}>
        <PackCard>
          <div className={classes.image}>
            <div style={{ fontSize: "40px", paddingTop: "20px" }}>
              {coins} X{" "}
              <RadioButtonUncheckedIcon fontSize="inherit"></RadioButtonUncheckedIcon>
              <Box pb={2}>
                <Typography variant="h2">{cost}</Typography>
              </Box>
            </div>
          </div>
          <Divider></Divider>
          <Box m={1} pt={2}>
            <Typography variant="h4" color="inherit" className={classes.title}>
              {name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="inherit"
              className={classes.title}
            >
              {line1}
            </Typography>
            <Typography
              variant="subtitle2"
              color="inherit"
              className={classes.title}
            >
              {line2}
            </Typography>
            <Typography
              variant="subtitle2"
              color="inherit"
              className={classes.title}
            >
              {line3}
            </Typography>

            <BuyButton variant="contained">Buy Now</BuyButton>
          </Box>
        </PackCard>
      </div>
    </Grid>
  );
};

const TokenDesc = () => {
  const classes = useStyles();
  // variable

  return (
    <Container>
      <Grid container spacing={6}>
        {packs.map((pack, i) => {
          const { name, color, line1, line2, line3, coins, cost } = pack;
          return <Des pack={pack}></Des>;
        })}
      </Grid>
    </Container>
  );
};

export default TokenDesc;