import React from "react";
import clsx from "clsx";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import {CardMedia} from "@material-ui/core";

import monkeyIcon from "../../../media/moneyMonkey.jpg";

const useStyles = makeStyles((theme) => ({
    panel: {
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
    },
    token: {
        color: "#7209B7",
        backgroundColor: "whihte",
    },
    tokenTitle: {
        backgroundColor: "#000000",
        color: "inherit",
        padding: "20px",
        textAlign: "center",
    },
    tiers: {
        flexGrow: 1,
        maxWidth: "100%",
    },
    tokenPanel: {
        "&:hover": {

        },
        background: "#fff",
        borderRadius: "5px",
        height: "100%",
        color: "#835494",
        border: "1px solid black",
        margin: "20px"
    },
    tokenContent: {
        textAlign: "center",
        padding: "20px 40px"
    },
    padItems: {
        padding: "20px 10px",
    },
    tierTitle: {
        textAlign: "center"
    },
    tierContent: {
        paddingLeft: "20px"  
    },
    tierImg: {
        display: "flex",
        justifyContent: "center"
    },
    logo: {
        height: "50%",
        width: "50%"
    }
}));

const TokenPanel = () => {
    const classes = useStyles();
    
    const TokenBoard = ({ name, content, pic}) => {
        const preventDefault = (event) => event.preventDefault();

        return (
            <Grid xs={3} container item className={classes.tokenPanel} direction="column" alignItems="center">
                <Grid className={clsx(classes.padItems, classes.tierTitle)} item>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                </Grid>
                
                <Grid className={clsx(classes.tierImg, classes.padItems)} item>
                    <CardMedia
                        component="img"
                        className={classes.logo}
                        title="Advertise for project"
                        image={pic} 
                    />
                </Grid>

                <Grid className={clsx(classes.tierContent, classes.padItems)} item>
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
        <Grid container className={clsx(classes.panel, classes.token)} direction="column" justify="center">
            <Grid item>
                <Typography className={classes.tokenTitle} variant="h3">
                    Pricing - token system
                </Typography>
            </Grid>

            <Grid item>
                <Typography className={classes.tokenContent} variant="body1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Grid>
            
            <Grid item container className={classes.tiers} justify="center" alignItems="center"> 
                <TokenBoard name="Free" content="some bullshit that we dont even believe, similar to the bible" pic={monkeyIcon}/>
                <TokenBoard name="Medium" content="some bullshit that we dont even believe, similar to the bible" pic={monkeyIcon} />
                <TokenBoard name="Premium" content="some bullshit that we dont even believe, similar to the bible" pic={monkeyIcon} />
            </Grid>
        </Grid>
    );
};

export default TokenPanel;