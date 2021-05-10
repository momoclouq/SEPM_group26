import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import {useRef} from "react";

import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import { Box, CardActions, CardContent, CardHeader, CardMedia, Grid, List, Paper, Typography } from "@material-ui/core";

import step from "./../../media/step.png";
import algo from "./components/AlgoSolutions";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        padding: "20px 0",
        height: "100%",
        margin: "0",
        minWidth: "650px"
    },
    solutionCard: {

    },
    introPanel: {
        background: "white",
        padding: "10px 20px",
        borderRadius: "5px",
    },
    introPanelTitle: {
        color: "#890596"
    },
    introPanelSubTitle: {
        fontWeight: "300",
    },
    solutionContent: {
        marginTop: "20px",
        padding: "20px",
        background: "#890596", /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #890596, #2f0743)", /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #890596, #2f0743)", 
    },
    solutionCardGrid: {
        marginTop: "20px",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
    },
    algoList: {
        width: "100%",
    },
    algoListItem: {

    },
    algoListCard: {
        width: "100%"
    },
    indiCard: {
        marginTop: "20px",
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    contentTitle: {
        padding: "10px 0",
        color: "white",
    },
    contentSubTitle: {
        color: "white",
    },
    cardContent: {
        minHeight: "80px",
        maxHeight: "80px"
    }
}));

const algoData = [
    {
        title: "algo 1 cate 1",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
    {
        title: "algo 2 cate 1",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
    {
        title: "algo 3 cate 1",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
    {
        title: "algo 4 cate 1",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
    {
        title: "algo 1 cate 2",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
    {
        title: "algo 2 cate 2",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
    {
        title: "algo 3 cate 2",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
    {
        title: "algo 4 cate 2",
        introduction: "This is an algorithm suitable for x model creation",
        content: "content about algorithm, please content Phat for more infomation, content about algorithm, please content Phat for more infomation,content about algorithm, please content Phat for more infomation,",
    },
]

const Solution = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([false, false]);
    const [currentIndex, setCurrentIndex] = React.useState([0, 0]);

    const handleExpandClickOne = () => {
        setExpanded([!expanded[0], expanded[1]]);
      };

    const handleExpandClickTwo = () => {
        setExpanded([expanded[0], !expanded[1]]);
    };

    const myRef = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"});

    const changeCard = (index, cate) => {
        setCurrentIndex([index, cate]);
        executeScroll();
    }

    const listOfAlgo = (index, title, subheader, algoDesc ) => {
        let handleFunc;
        if (index == 0) handleFunc = handleExpandClickOne;
        else handleFunc = handleExpandClickTwo;

        return (
            <Card className={classes.solutionCard}>
                <CardHeader title={title} subheader={subheader}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {algoDesc}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.actionPanel}>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded[index],
                        })}
                        onClick={handleFunc}
                        aria-expanded={expanded[index]}
                        aria-label="show more"
                        >
                            <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                    <List component="nav" aria-label="main mailbox folders"> 
                        <ListItem button onClick={() => changeCard(0, 0)}>
                            <ListItemText primary={`Algo 1 cate ${index+1}`} />
                        </ListItem> 
                        <ListItem button onClick={() => changeCard(1, 0)}>
                            <ListItemText primary={`Algo 2 cate ${index+1}`} />
                        </ListItem>
                        <ListItem button onClick={() => changeCard(2, 0)}>
                            <ListItemText primary={`Algo 3 cate ${index+1}`} />
                        </ListItem> 
                        <ListItem button onClick={() => changeCard(3, 0)}>
                            <ListItemText primary={`Algo 4 cate ${index+1}`} />
                        </ListItem>
                    </List>
                </Collapse>
            </Card>
        );
    }

    const algoCard = (index, cate) => {
        return(
            <Card className={classes.indiCard} variant="outlined" ref={myRef}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {algoData[index].title}
                    </Typography>
                    <Typography className={classes.pos}>
                        {algoData[index].introduction}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {algoData[index].content}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <React.Fragment>
            <main className={classes.main}>
                <Container className={classes.content} maxWidth="lg">
                    <Box className={classes.introPanel} boxShadow={3}>
                        <Typography variant="h2" className={classes.introPanelTitle}>
                            Trainee Solution Models
                        </Typography>
                        <Typography variant="h6" className={classes.introPanelSubTitle}>
                            Explore different Machine Learning models suitable for your need
                        </Typography>
                    </Box>

                    <Box className={classes.solutionContent}>
                        <Typography variant="h4" className={classes.contentTitle}>Trainee Solution Library</Typography>
                        <Typography variant="body1" className={classes.contentSubTitle}>The Trainee Soltion library offers a collection of cloud-based solutions (Machine learning algorithms, training hardware). You can use the pre-defined configurations of the algorithms to build your personal models and integrate them to your project with ease. </Typography>

                        <Grid className={classes.solutionCardGrid} container spacing={2} direction="row" justify="center">
                            <Grid item xs={12} md={6}>
                                {listOfAlgo(0, "Category 1", "best for X type of problems", "something you would use daily for your model training process, but for professional and newbies alike. Something the world has yet to witness")}
                            </Grid>

                            <Grid item xs={12} md={6}>
                                {listOfAlgo(1, "Category 2", "best for Y type of problems", "something you would use daily for your model training process")}
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        {algoCard(currentIndex[0], currentIndex[1])}
                    </Box>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Solution;