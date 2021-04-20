import React from "react";
import ReactDOM from "react-dom";

import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "blue",
        margin: "0"
    },
}));

const Homepage = () => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <main className={classes.main}>
                <Navbar />

                <Container maxWidth="sm">
                </Container>

                <Footer />
            </main>
        </React.Fragment>
    );
}

export default Homepage;