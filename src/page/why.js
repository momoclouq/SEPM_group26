import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 350,
    width: 400,
  },
  box: {
    height: "100px",
    width: "600px",
  },
  iconCon: {
    padding: "20px 30px 10px 30px",
  },
}));

const Con = () => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        <div className={classes.iconCon}>
          <FileCopyIcon fontSize="large" color="primary"></FileCopyIcon>
        </div>
        <Box pl={4}>
          <Typography variant="subtitle1" color="secondary">
            {" "}
            01
          </Typography>
        </Box>
        <Box pt={1} pb={1} pl={4}>
          <Typography variant="h5" pb={2}>
            {" "}
            Reason 1
          </Typography>
          <Box pt={1}>
            <Typography variant="subtitle2">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remainin{" "}
            </Typography>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
              Link
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
export default function Why() {
  const classes = useStyles();
  return (
    <Container>
      <Container>
        <Box pt={1} pb={3}>
          <Typography variant="h6" color="primary">
            Trainee
          </Typography>
        </Box>

        <Typography variant="h3">Why Choose us</Typography>
        <Box pb={5} pt={3} className={classes.box}>
          <Typography variant="h9" className={classes.box}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetti
          </Typography>
        </Box>
      </Container>
      <Grid className={classes.root} container spacing={0}>
        <Con></Con>
        <Con></Con>
        <Con></Con>
      </Grid>
      <Container></Container>
    </Container>
  );
}
