import React from "react";
import ReactDOM from "react-dom";

import Container from "@material-ui/core/Container";
import {makeStyles, rgbToHex} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Navbar from "./Navbar";
import Footer from "./Footer";
import content from "./TosContent";

const useStyle = makeStyles((theme) => ({
    para: {
        padding: "20px",
    },
    paraSub: {
        padding: "5px 30px"
    }
}));

const Tos = () => {
    const classes = useStyle();
    const tosContent = content.tosContent;

    const divWrapper = (paras) => {
        return paras.map((para) => {
            return (
                <div className={classes.para}>{para}</div>
            );
        });
    }

    return (
        <React.Fragment>
            <Navbar />

            <Container maxWidth="lg">
                <Typography variant="h1">
                    {tosContent.title}
                </Typography>

                <Typography variant="subtitle1">
                    {tosContent.version}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.intro)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.accessTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.accessPara)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.contentTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.contentPara)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.thirdPartyTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.thirdPartyContent)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.disclaimerTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.disclaimerContent)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.limitationTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.limitationContent)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.copyrightTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.copyrightContent)}
                </Typography>

                <Typography variant="body2" className={classes.paraSub}>
                    {divWrapper(tosContent.copyrightContentList)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.generalTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.generalContent)}
                </Typography>

                <Typography variant="h5">
                    {tosContent.contactTitle}
                </Typography>

                <Typography variant="body1" className={classes.para}>
                    {divWrapper(tosContent.contactContent)}
                </Typography>
            </Container>

            <Footer />
        </React.Fragment>
    );
};

export default Tos;