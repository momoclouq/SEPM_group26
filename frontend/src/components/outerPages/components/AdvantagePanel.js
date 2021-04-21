import React from "react";
import clsx from "clsx";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    panel: {
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    advantage: {
        backgroundColor: "#4D3558",
        padding: "10px 30px",
    },
    advantageText: {
        color: "white",
        padding: "15px 5px"
    },
    advantagePanel: {
        "&:hover": {
            boxShadow: "0 0 2px #fff",
        },
        background: "#121212",
        borderRadius: "5px",
        minHeight: "25vh",
        padding: "10px",
        color: "#eedff0"
    },
    introBoard: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    specialBoard: {
        justifyContent: "space-around",
    },
    advantageContentText: {
        padding: "1em",
    }
}));

const AdvantagePanel = () => {
    const classes = useStyles();
    
    const AdvantageText = ({ text }) => {
        return (
            <Grid container item className={classes.advantagePanel} direction="row" justify="flex-start">
                <Grid item>
                    <BubbleChartIcon style={{ color: "#7377fa" }}/>
                </Grid>
                
                <Grid item >
                    <Typography variant="body1">
                        {text}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography className={classes.advantageContentText} variant="body1">
                        Some details about the advantages of the Trainee system, which is non-existent, some more text for testing
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid className={clsx(classes.panel, classes.advantage)} container direction="row" justify="center" alignItems="center">
            <Grid className={clsx(classes.introBoard, classes.specialBoard)} container direction="column" justify="space-evenly" alignItems="space-around" item xs={6}>
                <AdvantageText text="Advantage number 1" />
                <AdvantageText text="Advantage number 2" />
                <AdvantageText text="Advantage number 3" />
            </Grid>
            <Grid className={classes.introBoard} item xs={6}>
                <Typography className={classes.advantageText} variant="h3" align="right">
                    What is Trainee
                </Typography>
                <Typography className={classes.advantageText} variant="body1" align="right">
                    I dont know. We promise we will try to understand. Trainee is a system for procratination and deception. A tool to get high grades created by Phat
                </Typography>
                <Typography className={classes.advantageText} variant="body1" align="right">
                    Some text for comtemplation
                </Typography>
            </Grid>
        </Grid>
    );
};

export default AdvantagePanel;