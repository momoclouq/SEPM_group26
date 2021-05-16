import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery, MediaQuery } from "react-responsive";
import CheckIcon from "@material-ui/icons/Check";
import {
  Card,
  Container,
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
    color: "none",
    line1: "this is line 1",
    line2: "#280659",
    line3: "save 50%",
    coins: "2-year plan",
    cost: "10 token",
  },
  {
    name: "Advance",
    color: "none",
    line1: "this is line 1",
    line2: "#280659",
    line3: "save 30%",
    coins: "1-year plan",
    cost: "5 token",
  },
  {
    name: "prenium",
    color: "none",
    line1: "this is line 1",
    line2: "grey",
    line3: "save 0%",
    coins: "1-month plan",
    cost: "1 token",
  },
];

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, backgroundColor: "#fafafa", paddingBottom: "100px" },
  image: {
    margin: "0",
    height: "30%",
  },
  title: { color: "black" },
  backGround: {
    background: "linear-gradient(to right,#9733ee,#da22ff)",
    margin: "0",
    padding: "0",
    height: "100%",
    border: "1px solid black",
    overflow: "none",
  },
}));

const DesPC = (packs) => {
  const width_size = packs.width;
  const PackCard = withStyles({
    root: {
      Width: "auto",

      height: "content-fit",
      textAlign: "center",
      padding: "10px",
      backgroundColor: "inherit",

      "&:hover": {
        boxShadow: `1px 1px 3px 3px #660f56`,
      },
    },
  })(Paper);
  const BuyButton = withStyles({
    root: {
      margin: "20px",
      backgroundColor: "inherit",
      borderRadius: "0",
      border: "white solid",
      color: "black",
      "&:hover": {},
    },
  })(Button);
  const { name, color, line1, line2, line3, coins, cost } = packs.pack;

  const classes = useStyles();

  //
  return (
    <Grid item sm={6} lg={4}>
      <PackCard elevation={2}>
        <div className={classes.image}>
          <div
            style={{
              fontSize: "20px",
              margin: "10px 0px 5px 0px",
              color: "#059689",
            }}
          >
            {coins}
          </div>
          <Box>
            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#890596" }}
            >
              {cost}
            </Typography>
            <p style={{ fontSize: "15px", display: "inline" }}>/month</p>
          </Box>
        </div>

        <BuyButton variant="contained">Choose Plan</BuyButton>
        <Box pt={1}>
          <div
            style={{
              padding: "5px",
              border: "solid",
              borderRadius: "12px",
              width: "fit-content",
              margin: "auto",
              color: "white",
              backgroundColor: line2,
            }}
          >
            {line3}
          </div>
        </Box>
      </PackCard>
    </Grid>
  );
};
const DesMobile = (packs) => {
  const width_size = packs.width;
  const PackCard = withStyles({
    root: {
      maxWidth: "auto",
      width: "auto",
      height: "content-fit",
      textAlign: "center",
      padding: "10px",
      backgroundColor: "inherit",
      margin: "0px auto 10px auto",
      border: "#890596 solid",
    },
  })(Card);
  const BuyButton = withStyles({
    root: {
      margin: "20px",
      backgroundColor: "inherit",
      borderRadius: "0",
      border: "white solid",
      color: "black",
      "&:hover": {},
    },
  })(Button);

  const { name, color, line1, line2, line3, coins, cost } = packs.pack;

  const classes = useStyles();

  //
  return (
    <Grid item xs>
      <PackCard>
        <div className={classes.image}>
          <div style={{ fontSize: "2px", paddingTop: "10px" }}>
            {coins} X Token
            <Box pb={2}>
              <Typography variant="h4">{cost}</Typography>
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

          <BuyButton size="small" variant="contained">
            Buy Now
          </BuyButton>
        </Box>
      </PackCard>
    </Grid>
  );
};

const TokenDesc = () => {
  // variable
  const classes = useStyles();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1824px)",
  });
  const isLaptop = useMediaQuery({ query: "(min-width: 900px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const width1 = "350px";
  const width2 = "250px";

  return (
    <body className={classes.backGround}>
      <Container maxWidth="md" className={classes.root}>
        <Title></Title>
        {isDesktopOrLaptop && (
          <Grid container spacing={0}>
            {packs.map((pack, i) => {
              const { name, color, line1, line2, line3, coins, cost } = pack;
              return <DesPC pack={pack} width={width1}></DesPC>;
            })}
          </Grid>
        )}
        {isLaptop && (
          <Grid container spacing={0}>
            {packs.map((pack, i) => {
              const { name, color, line1, line2, line3, coins, cost } = pack;
              return <DesPC pack={pack} width={width1}></DesPC>;
            })}
          </Grid>
        )}
        {isTabletOrMobile && (
          <Grid container spacing={0} justify={"center"}>
            {packs.map((pack, i) => {
              const { name, color, line1, line2, line3, coins, cost } = pack;
              return <DesMobile pack={pack} width={width2}></DesMobile>;
            })}
          </Grid>
        )}
      </Container>
    </body>
  );
};

const Title = () => {
  const TitleCard = withStyles({
    root: {
      maxWidth: "auto",
      width: "100%",
      height: "content-fit",
      textAlign: "initial",
      padding: "30px 30px 20px 30px",
      margin: "20px 0px 50px 0px",
      backgroundColor: "inherit",
      font: "30px",
    },
  })(Card);
  return (
    <Grid container spacing={0} justify={"center"}>
      <Grid item sm={10} lg={6}>
        <TitleCard>
          <div
            style={{
              textAlign: "left",
              padding: "0px 0px 5px 0px",
              color: "#660f56",
            }}
          >
            <Typography variant="h3"> Choose Plan</Typography>
          </div>
          <Divider></Divider>
          <Typography variant="h5">
            Best Machine learning Services As a Platform
          </Typography>
          <Box mb={1} mt={1}>
            <Typography variant="subtitle1" display="inline">
              <CheckIcon
                style={{ color: "green" }}
                fontSize="small"
              ></CheckIcon>
              Reason1
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="subtitle1" display="inline">
              <CheckIcon
                style={{ color: "green" }}
                fontSize="small"
              ></CheckIcon>
              Reason1
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" display="inline">
              <CheckIcon
                style={{ color: "green" }}
                fontSize="small"
              ></CheckIcon>
              Reason1
            </Typography>
          </Box>
        </TitleCard>
      </Grid>
    </Grid>
  );
};

export default TokenDesc;
