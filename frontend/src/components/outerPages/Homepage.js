import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

import Navbar from "./Navbar";

class Homepage extends React.Component {
    render(){
        return (
            <React.Fragment>
                <main>
                    <Navbar />

                    <Container maxWidth="sm">
                        <Button variant="contained" color="secondary">Hello</Button>
                    </Container>
                </main>
            </React.Fragment>
        );
    }
}

export default Homepage;