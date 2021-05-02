import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, CardMedia, Grid, Typography } from "@material-ui/core";

import step from "./../../media/step.png";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "0px",
        minHeight: "100vh",
        margin: "0",
        minWidth: "650px"
    },
    stepImg: {
        height: "auto",
        width: "100%",
        maxWidth: "1000px"
    },
    stepCard: {
        border: "1px solid black",
        margin: "20px 0",
    },
    stepCardTitle: {

    },
    stepImgContainer: {
        margin: "0 auto",
    }
}));


const GettingStarted = () => {
    const classes = useStyles();
    console.log(step);
    
    return (
        <React.Fragment>
            <main className={classes.main}>
                <Navbar />

                <Container className={classes.content} maxWidth="lg">
                    <Box className={classes.introPanel}>
                        <Typography variant="h2">
                            Getting Started with Trainee
                        </Typography>
                        <Typography variant="h5">
                            Learn the basic steps of creating a project and start training machine learning models now
                        </Typography>
                    </Box>

                    <Grid className={classes.step} container direction="column">
                        <Grid className={classes.stepCard} container item direction="column">
                            <Grid item>
                                <Typography className={classes.stepCardTitle} variant="body1">
                                    Step 1: Sign up/ Log into the system
                                </Typography>
                            </Grid>

                            <Grid className={classes.stepImgContainer} item>
                                <CardMedia className={classes.stepImg} component="img" image={step}/>
                            </Grid>
                        </Grid>
                        <Grid className={classes.stepCard} container item direction="column">
                            <Grid item>
                                <Typography className={classes.stepCardTitle} variant="body1">
                                    Step 1: Sign up/ Log into the system
                                </Typography>
                            </Grid>

                            <Grid className={classes.stepImgContainer} item>
                                <CardMedia className={classes.stepImg} component="img" image={step}/>
                            </Grid>
                        </Grid>
                        <Grid className={classes.stepCard} container item direction="column">
                            <Grid item>
                                <Typography className={classes.stepCardTitle} variant="body1">
                                    Step 1: Sign up/ Log into the system
                                </Typography>
                            </Grid>

                            <Grid className={classes.stepImgContainer} item>
                                <CardMedia className={classes.stepImg} component="img" image={step}/>
                            </Grid>
                        </Grid>
                        <Grid className={classes.stepCard} container item direction="column">
                            <Grid item>
                                <Typography className={classes.stepCardTitle} variant="body1">
                                    Step 1: Sign up/ Log into the system
                                </Typography>
                            </Grid>

                            <Grid className={classes.stepImgContainer} item>
                                <CardMedia className={classes.stepImg} component="img" image={step}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                <Footer />
            </main>
        </React.Fragment>
    );
}

export default GettingStarted;