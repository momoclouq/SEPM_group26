import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { findByLabelText } from "@testing-library/dom";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(1,2),
        marginTop: "auto",
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
    const preventDefault = (event) => event.preventDefault();

    return (
        <footer className={classes.footer}>
            <Container width="100%">
                <Grid container
                    justify="flex-end">
                    <Grid item>
                        <Typography className variant="body2">
                            <Link className={classes.item} href="#" onClick={preventDefault}>Term of Services</Link>
                            <Link className={classes.item} href="#" onClick={preventDefault}>Privacy</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;