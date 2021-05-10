import React from "react";
import clsx from "clsx";

import ads1 from "../../../media/machine-learning.svg";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import { Button, CardMedia, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

import {Link as RouterLink} from "react-router-dom";

let useStyles = makeStyles((theme) => ({
    panel: {
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    intro: {
        background: "white",
    },
    paper: {
        height: "100vh",
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: "10px",
        background: "blue",
    },
    introBoard: {
        padding: "0 20px"
    },
    ads: {
        height: "auto",
        width: "100%",
        borderRadius: "10px"
    },
    item: {
        padding: "20px 0",
    },
    getStartedBtn:{
        "&:hover": {
            background: "#7209B7",
        },
        background: "#7209B7",
        color: "white"
    },
    link: {
        textDecoration: "none"
    }
}));

const IntroPanel = () => {
    const classes = useStyles();

    return (
        <Grid className={clsx(classes.panel, classes.intro)} container direction="row" justify="center" alignItems="center">
            <Grid className={classes.introBoard} item xs={6}>
                <Typography className={classes.item} variant="h3" component="h4">
                        Accelerate your model training with Trainee
                </Typography>
                <Typography className={classes.item} component="p">
                    Create your model with speed, accuracy and precision
                </Typography>
                <Link className={classes.link} component={RouterLink} to="/start">
                    <Button className={classes.getStartedBtn} variant="contained" m={2}>
                        Get Started
                    </Button>
                </Link>
            </Grid>
            <Grid className={classes.introBoard} item xs={6}>
                <CardMedia
                 component="img"
                 className={classes.ads}
                 title="Advertise for project"
                 image={ads1} 
                 />
            </Grid>
        </Grid>
    );
};

export default IntroPanel;