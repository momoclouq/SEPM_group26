import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Box, CardMedia, Grid, Typography } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';

import Header from "./header";
import Footer from "./footer";

import step from "./../../media/medium_pack.png";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        minHeight: "100vh",
        margin: "0",
        minWidth: "650px",
        background: "#ECF3FF"
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
                <Card variant="outlined" elevation={10}>
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
            <Header />
            <main className={classes.main}>
                <Container className={classes.content} maxWidth="lg">
                    <Box className={classes.introPanel}>
                        <Typography variant="h2">
                            Getting Started with Trainee
                        </Typography>
                        <Typography variant="h5">
                            Learn the basic steps of creating a project and start training machine learning models now
                        </Typography>
                    </Box>

                    <Grid className={classes.step} container direction="column" wrap="nowrap">
                        {allStepPanel()}
                    </Grid> 
                    
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default GettingStarted;