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
    height: 300,
    width: 350,
    padding: theme.spacing(2),
    textAlign: "center",
  },
  box: {
    height: "100px",
    width: "600px",
  },
  iconCon: {
    padding: "20px 30px 10px 30px",
  },
}));
const content = [
  {
    id: "01",
    title: "ML Services",
    content: "Build, train and deploy machine learning models fast",
    button: "Read More",
  },
  {
    id: "02",
    title: "ML Infrastructure",
    content: "High performance, cost-effective, fast transaction",
    button: "Read More",
  },
  {
    id: "03",
    title: "Deep Learning Frameworks",
    content: "Choice and flexibility with the broadest framework support",
    button: "Read More",
  },
];

const Con = (props) => {
  const classes = useStyles();
  const { id, title, content, button } = props.prop;

  return (
    <Grid item xs={4}>
      <Grid Container spacing={0}>
        <Paper className={classes.paper}>
          <Grid item xs={2}>
            <div className={classes.iconCon}>
              <FileCopyIcon fontSize="large" color="primary"></FileCopyIcon>
            </div>
            <Box pl={4}>
              <Typography variant="subtitle1" color="secondary">
                {id}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box pt={1} pb={1} pl={4}>
              <Typography variant="h5" pb={2} align={"center"}>
                {title}
              </Typography>
              <Box pt={1}>
                <Typography variant="subtitle2">{content}</Typography>
              </Box>
              <Box pt={1} align={"center"}>
                <Button
                  variant="outlined"
                  color="primary"
                  href="#outlined-buttons"
                >
                  {button}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Grid>
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
        {content.map((prop) => {
          const { id, title, content, button } = prop;
          return <Con prop={prop}></Con>;
        })}
      </Grid>
      <Container></Container>
    </Container>
  );
}
