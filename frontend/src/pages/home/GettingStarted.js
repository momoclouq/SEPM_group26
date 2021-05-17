import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Box, CardMedia, Grid, Typography } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';

import Header from "./header";
import Footer from "./footer";

//getting started pictures
import step1 from "./../../media/steps/step_signup.png";
import step2 from "./../../media/steps/step_dashboard.png";
import step3 from "./../../media/steps/step_create1.png";
import step4 from "./../../media/steps/step_create2.png";
import step5 from "./../../media/steps/step_solution1.png";
import step6 from "./../../media/steps/step_solution2.png";
import step7 from "./../../media/steps/step_solution3.png";

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
    introPanel: {
        background: "linear-gradient(to right bottom, #3A0CA3, #7209B7)",
        color: "white",
        padding: "20px 20px",
        borderRadius: "10px"
    },
    introSubtitle: {
        fontWeight: "300"
    },
    stepImg: {
        maxWidth: "100%",
        height: "auto"
    },
    stepImgWrapper: {
        heigth: "80vh",
        width: "100%",
        borderTop: "0.25px solid grey"
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
        explanation: "All services provided require a Trainee account. Your email is only used for identification.",
        imageLink: step1,
        hoverTitle: "log in page"
    },
    {
        title: 2,
        content: "Access \"Create projects\" menu on the left drawer",
        explanation: "After logging in, the dashboard will appear with access to the Trainee services as well as all projects listed",
        imageLink: step2,
        hoverTitle: "dashboard"
    },
    {
        title: 3,
        content: "Provide needed information",
        explanation: "Fill in the project name, description and choose the type of models: Classication/ Regression",
        imageLink: step3,
        hoverTitle: "types of algorithm"
    },
    {
        title: 4,
        content: "Upload your dataset",
        explanation: "Please provide your dataset in the .csv file type for compatibility",
        imageLink: step4,
        hoverTitle: "upload file page"
    },
    {
        title: 5,
        content: "Create your solution based on the project data",
        explanation: "Move to dashboard main page, click on the newly created project and click \"CREATE A SOLUTION\"",
        imageLink: step5,
        hoverTitle: "Create a solution button"
    },
    {
        title: 6,
        content: "Provide adequate criteria for your solution creation and start the process",
        explanation: "Adjusting the arguments will greatly affect the outcome as well as the time needed for model training",
        imageLink: step6,
        hoverTitle: "Various fields for adjusting the arguments"
    },
    {
        title: 7,
        content: "Monitor the creation process",
        explanation: "You can keep track of the model training process as well as stop/resume the process at any time",
        imageLink: step7,
        hoverTitle: "Monitor process panel"
    },
]

const GettingStarted = () => {
    const classes = useStyles();

    const StepPanel = (number, instruction, explanation, imageLink, hoverTitle) => {
        return (
            <Grid className={classes.stepCard} item key={`stepPanel${number}`}>
                <Card variant="outlined" elevation={10} className={classes.wrapperCard}>
                    <CardHeader 
                        title={`Step ${number}: ${instruction}`}
                        subheader={explanation}
                    />
                    <Box className={classes.stepImgWrapper}>
                        <CardMedia
                            component="img"
                            className={classes.stepImg}
                            image={imageLink}
                            title={hoverTitle}
                        />
                    </Box>
                </Card>
            </Grid>
        );
    }

    const allStepPanel = () => {
        return stepData.map((indiStep, index) => {
            return StepPanel(index + 1, indiStep.content, indiStep.explanation, indiStep.imageLink, indiStep.hoverTitle);
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
                        <Typography className={classes.introSubtitle} variant="h5">
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