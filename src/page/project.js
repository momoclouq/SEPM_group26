import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: { minWidth: "200px", width: "300px", maxWidth: "350px" },
  title: {
    textAlign: "center",
    borderRadius: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
    margin: "auto",
    marginBottom: "10px",
    width: "50%",
  },
  content: {
    textAlign: "left",
    margin: "auto",
    width: "70%",
  },
  content_item: {
    marginBottom: "15px",
  },
  btn: {
    marginTop: "20px",
  },
}));

const Price = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.title}>Basic Bundle</div>
              <Divider></Divider>
              <div className={classes.content}>
                <p className={classes.content_item}>* limited Storage</p>
                <p className={classes.content_item}>* Slower Training Time</p>
                <p className={classes.content_item}>* Less Available Option</p>
              </div>
              <Divider></Divider>
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  className={classes.btn}
                >
                  5 Tokens / month
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.title}>Basic Bundle</div>
              <Divider></Divider>
              <div className={classes.content}>
                <p className={classes.content_item}>* limited Storage</p>
                <p className={classes.content_item}>* Slower Training Time</p>
                <p className={classes.content_item}>* Less Available Option</p>
              </div>
              <Divider></Divider>
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  className={classes.btn}
                >
                  5 Tokens / month
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardContent>
              <div className={classes.title}>Basic Bundle</div>
              <Divider></Divider>
              <div className={classes.content}>
                <p className={classes.content_item}>* limited Storage</p>
                <p className={classes.content_item}>* Slower Training Time</p>
                <p className={classes.content_item}>* Less Available Option</p>
              </div>
              <Divider></Divider>
              <Box textAlign="center">
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  className={classes.btn}
                >
                  5 Tokens / month
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Price;
