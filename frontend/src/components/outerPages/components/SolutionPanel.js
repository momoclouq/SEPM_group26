import React from "react";
import clsx from "clsx";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    panel: {
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
    },
    solution: {
        color: "#7209B7",
        backgroundColor: "#dcddf2",
        padding: "10px 20px",
    },
    solutionTitle: {
        color: "inherit",
        padding: "15px 5px 0px 5px",
        textAlign: "center",
    },
    solutionContainer: {
        flexGrow: 1,
        maxWidth: "100%"
    },
    solutionPanel: {
        "&:hover": {
            border: "7px solid #e8daf5",
        },
        background: "#fff",
        borderRadius: "5px",
        height: "35vh",
        color: "#835494",
        border: "1px solid black",
        transition: "border 0.25s ease-out",
    },
    solutionContent: {
        flexGrow: 1,
    },
    padItems: {
        padding: "5px 10px",
    }
}));

const SolutionPanel = () => {
    const classes = useStyles();
    
    const Solution = ({ name, content }) => {
        const preventDefault = (event) => event.preventDefault();

        return (
            <Grid xs={6} md={3} container item className={classes.solutionPanel} direction="column" justify="flex-start">
                <Grid className={classes.padItems} item>
                    <Typography variant="h6">
                        {name}
                    </Typography>
                </Grid>
                
                <Grid className={clsx(classes.solutionContent, classes.padItems)} item>
                    <Typography variant="body1">
                        {content}
                    </Typography>
                </Grid>

                <Grid className={classes.padItems} item>
                    <Typography variant="body2">
                        <Link href="#" onCLick={preventDefault} color="secondary">
                            Learn more
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid container className={clsx(classes.panel, classes.solution)} direction="column">
            <Grid item>
                <Typography className={classes.solutionTitle} variant="h3">
                    Solutions
                </Typography>
            </Grid>
            
            <Grid item container className={classes.solutionContainer} alignItems="center"> 
                <Solution name="Algo 1" content="some bullshit that we dont even believe, similar to the bible" />
                <Solution name="Algo 2" content="some bullshit that we dont even believe, similar to the bible" />
                <Solution name="Algo 3" content="some bullshit that we dont even believe, similar to the bible" />
                <Solution name="Algo 4" content="some bullshit that we dont even believe, similar to the bible" />
                <Solution name="Algo 5" content="some bullshit that we dont even believe, similar to the bible" />
                <Solution name="Algo 6" content="some bullshit that we dont even believe, similar to the bible" />
                <Solution name="Algo 7" content="some bullshit that we dont even believe, similar to the bible" />
                <Solution name="Algo 8" content="some bullshit that we dont even believe, similar to the bible" />
            </Grid>
        </Grid>
    );
};

export default SolutionPanel;