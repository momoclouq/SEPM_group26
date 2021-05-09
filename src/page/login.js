import React from "react";
import "./login.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GoogleButton from "react-google-button";
import Paper from "@material-ui/core/Paper";
import {
  Card,
  Container,
  Avatar,
  TextField,
  Link,
  withStyles,
} from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const PurpleTypography = withStyles({
  root: {
    color: "#890596",
    fontStyle: "solid",
  },
})(Typography);
const LoginButton = withStyles({
  root: {
    color: "#890596",
    borderColor: "#890596",
  },
})(Button);
const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  card: {
    padding: "30px",
    height: "60vh",
    width: "280px",
    margin: "150px auto",
  },
  box: {
    marin: "30px ",
  },
  body: {
    background: "linear-gradient(to right,#9733ee,#da22ff)",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    position: "absolute",
  },
}));
const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Grid className={classes.root}>
        <Card elevation={10} className={classes.card}>
          <Box align="center">
            <PurpleTypography variant="h5" className={classes.color}>
              Trainee
            </PurpleTypography>
            <Box padding="20px">
              <Typography variant="h3">Sign in</Typography>
            </Box>
            <TextField
              margin="dense"
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label="Password"
              placeholder="Enter passwor"
              fullWidth
              required
            />
            <Box p={2}>
              <LoginButton variant="outlined" href="#outlined-buttons">
                Login
              </LoginButton>
            </Box>
            <Box pt={1}>
              <Link href="">Forgot Password?</Link>
            </Box>
            <Box p={1}>
              Haven't had an account ?
              <Link href="" margin="dense">
                Register now
              </Link>
            </Box>
            <GoogleButton
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
          </Box>
        </Card>
      </Grid>
    </div>
  );
};

export default Login;
