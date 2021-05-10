import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { findByLabelText } from "@testing-library/dom";

import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(1,2),
        backgroundColor:
            theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    item: {
        padding: "0 10px",
        color: "#7209B7"
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container
                justify="flex-end">
                <Grid item>
                    <Typography className variant="body2">
                        <Link component={RouterLink} className={classes.item} to="/term_of_service">Term of Services/ Privacy</Link>
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;