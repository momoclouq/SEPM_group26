import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Container,
  Avatar,
  TextField,
  Link,
  withStyles,
  Box,
  Button,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
//icon
import FileCopyIcon from "@material-ui/icons/FileCopy";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import GoogleButton from "react-google-button";

const PurpleTypography = withStyles({
  root: {
    color: "#890596",
    fontStyle: "solid",
  },
})(Typography);
const LoginButton = withStyles({
  root: {
    color: "white",
    borderColor: "#890596",
    backgroundColor: "#890596",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      paddingRight: "30px",
      paddingLeft: "30px",
      backgroundColor: "#890596",
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "0 5px 15px rgba(145, 92, 182, .4)",
    },
  },
})(Button);
const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  card: {
    padding: "30px",
    height: "fit-content",
    width: "280px",
    margin: "110px auto",
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
  backButton: {
    position: "absolute",
    backgroundColor: "white",
    border: "none",
    transition: "all 0.2s ease-in-out",
    fontSize: "24px",
    "&:hover": {
      position: "absolute",
      fontSize: "30px",
    },
  },
}));
const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Card elevation={10} className={classes.card}>
        <button className={classes.backButton}>
          <KeyboardReturnIcon fontSize="inherit"></KeyboardReturnIcon>
        </button>
        <Box align="center" pb={2}>
          <PurpleTypography variant="h5" className={classes.color}>
            Trainee
          </PurpleTypography>
          <Box padding="20px">
            <Typography variant="h4">Sign Up Form</Typography>
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
            placeholder="Enter password"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Confirm Password"
            placeholder="Confirm Password"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Email"
            placeholder="Email"
            fullWidth
            required
          />
        </Box>
        <Box textAlign="center">
          <LoginButton variant="contained" href="#outlined-buttons">
            Register
          </LoginButton>
        </Box>
      </Card>
    </div>
  );
};
export default Register;
