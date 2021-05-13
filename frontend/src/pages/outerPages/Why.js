import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import { Container, Card, withStyles } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
const ReadMoreButton = withStyles({
  root: {
    color: "white ",
    fontStyle: "normal",
    alignSelf: "flex-end",
    backgroundColor: "#890596",
    "&:hover": {
      backgroundColor: "#890596",
      boxShadow: `1px 1px 1px 1px #9030a8`,
    },
  },
})(Button);
const ReadMore = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ReadMoreButton
        variant="contained"
        type="submit"
        value="Search"
        onClick={onClick}
      >
        ReadMore
        {/* {showResults ? <Results /> : null} */}
      </ReadMoreButton>
    </div>
  );
};
const styles = {
  body: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%",
  },
  container: {
    height: "100%",
    width: "40%",
    border: "black solid",
    position: "fixed",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "0",
    padding: "0",
    backgroundColor: "white",
    color: "black",
  },
};
const Results = () => (
  <body style={styles.body}>
    <div style={styles.container} id="results" className="search-results"></div>
  </body>
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "200px",
    width: "auto",

    textAlign: "center",
    alignItems: "center",
  },
  card: {
    height: "content-fit",
    width: "inherit",
    margin: "20px 0 40px 0",
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
    <Grid item xs={12} md={4}>
      <Grid Container spacing={0}>
        <Paper className={classes.paper}>
          <Typography>
            <div className={classes.iconCon}>
              <FileCopyIcon fontSize="large" color="primary"></FileCopyIcon>
            </div>
            {title}
          </Typography>
          <Box pt={1} ml={5} mr={5}>
            <Typography variant="subtitle2">{content}</Typography>
          </Box>
        </Paper>
        <ReadMore></ReadMore>
      </Grid>
    </Grid>
  );
};

const PurpleText = withStyles({
  root: {
    color: "#890596 ",
    fontStyle: "normal",
  },
})(Typography);

export default function Why() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={0} justify="center">
        <Grid item lg={12} sm={8} zeroMinWidth="400px">
          <Card className={classes.card}>
            <Box pb={3}>
              <PurpleText variant="h2">Why Choose us</PurpleText>
            </Box>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetti
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <div className={classes.root}>
        <Grid container spacing={0}>
          {content.map((prop) => {
            const { id, title, content, button } = prop;
            return <Con prop={prop}></Con>;
          })}
        </Grid>
      </div>
    </Container>
  );
}
