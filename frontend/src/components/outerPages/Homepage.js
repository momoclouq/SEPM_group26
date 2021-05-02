import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";
import IntroPanel from "./components/IntroPanel";
import AdvantagePanel from "./components/AdvantagePanel";
import SolutionPanel from "./components/SolutionPanel";
import TokenPanel from "./components/TokenPanel";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "0px",
        minHeight: "100vh",
        margin: "0",
        minWidth: "650px"
    },
}));


const Homepage = () => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <main className={classes.main}>
                <Navbar />

                <Container className={classes.content} maxWidth="lg">
                    <IntroPanel />
                    <AdvantagePanel />
                    <SolutionPanel />
                    <TokenPanel />
                </Container>

                <Footer />
            </main>
        </React.Fragment>
    );
}

export default Homepage;