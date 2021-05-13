import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Box, CardMedia, Grid, Typography } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';

import Navbar from "./Navbar";
import Footer from "./Footer";

import step from "./../../media/step.png";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        height: "100%",
        margin: "0",
        minWidth: "650px",
    },
    introPanel: {
        background: "white",
        padding: "10px 20px",
        borderRadius: "5px",
    },
    introPanelTitle: {
        color: "#890596"
    },
    introPanelSubTitle: {
        fontWeight: "300",
    },
    stepImg: {
        height: "auto",
        width: "100%"
    },
    stepCard: {
        margin: "20px 0",
    },
    stepCardTitle: {
        fontSize: "1.2em"
    },
    stepImgContainer: {
        margin: "0 auto",
    },
    stepWord: {
        color: "#8f05b5",
    },
    stepInstruction: {
        fontWeight: "300"
    }
}));

const stepData = [
    {
        title: 1,
        content: "Sign up/ Log into the system",
        imageLink: step
    },
    {
        title: 2,
        content: "Sign up/ Log into the system",
        imageLink: step
    },
    {
        title: 3,
        content: "Sign up/ Log into the system",
        imageLink: step
    },
    {
        title: 4,
        content: "Sign up/ Log into the system",
        imageLink: step
    },
    {
        title: 5,
        content: "Sign up/ Log into the system",
        imageLink: step
    },
]

const GettingStarted = () => {
    const classes = useStyles();

    const StepPanel = (number, instruction, imageLink) => {
        return (
            <Grid className={classes.stepCard} item key={`stepPanel${number}`}>
                <Card variant="outlined" borderLeft={0} borderRight={0}>
                    <CardHeader 
                        title={`Step ${number}: ${instruction}`}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        className={classes.stepImg}
                        image={imageLink}
                        title="Paella dish"
                    />
                </Card>
            </Grid>
        );
    }

    const allStepPanel = () => {
        return stepData.map((indiStep, index) => {
            return StepPanel(index + 1, indiStep.content, indiStep.imageLink);
        }, []);
    }
    
    return (
        <React.Fragment>
            <main className={classes.main}>
                <Container className={classes.content} maxWidth="lg">
                    <Box className={classes.introPanel} boxShadow={3}>
                        <Typography variant="h2" className={classes.introPanelTitle}>
                            Getting Started with Trainee
                        </Typography>
                        <Typography variant="h6" className={classes.introPanelSubTitle}>
                            Learn the basic steps of creating a project and start training machine learning models now
                        </Typography>
                    </Box>

                    <Grid className={classes.step} container direction="column" wrap="nowrap">
                        {allStepPanel()}
                    </Grid> 
                    
                </Container>
            </main>
        </React.Fragment>
    );
}

export default GettingStarted;