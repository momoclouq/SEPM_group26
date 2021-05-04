import React from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";

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
        paddingTop: "0px",
        minHeight: "100vh",
        margin: "0",
        minWidth: "650px"
    },
    solutionCard: {
        maxWidth: "500px"
    },
    solutionContent: {
        padding: "20px"
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
}));


const Solution = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([false, false]);

    const handleExpandClickOne = () => {
        setExpanded([!expanded[0], expanded[1]]);
      };

      const handleExpandClickTwo = () => {
        setExpanded([expanded[0], !expanded[1]]);
      };

    const listOfAllAlgo = () => {
        let temp = [];
        for (const algorithm in algo){
            temp.push(
                <Card key={algo[algorithm].name}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {algo[algorithm].name}
                        </Typography>
                        <Typography className={classes.pos}>
                            {algo[algorithm].intro}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {algo[algorithm].content}
                        <br />
                        </Typography>
                    </CardContent>
                </Card>
            );
        }
        return temp;
    }

    return (
        <React.Fragment>
            <main className={classes.main}>
                <Navbar />

                <Container className={classes.content} maxWidth="lg">
                    <Box className={classes.introPanel}>
                        <Typography variant="h2">
                            Trainee Solution Models
                        </Typography>
                        <Typography variant="h5">
                            Explore different Machine Learning models suitable for your need
                        </Typography>
                    </Box>

                    <Box className={classes.solutionContent}>
                        <Typography variant="h4">Trainee Solution Library</Typography>
                        <Typography variant="body2">The Trainee Soltion library offers a collection of cloud-based solutions (Machine learning algorithms, training hardware). You can use the pre-defined configurations of the algorithms to build your personal models and integrate them to your project with ease. </Typography>

                        <Grid className={classes.solutionCardGrid} container spacing={2} direction="row" justify="center">
                            <Grid item>
                                <Card className={classes.solutionCard}>
                                    <CardHeader title="Algorithm1" subheader="category1"/>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded[0],
                                        })}
                                        onClick={handleExpandClickOne}
                                        aria-expanded={expanded[0]}
                                        aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
                                        <List component="nav" aria-label="main mailbox folders">
                                            <ListItem button>
                                                <ListItemText primary="Algo 1 cate 1" />
                                            </ListItem> 
                                            <ListItem button>
                                            <ListItemText primary="Algo 2 cate 1" />
                                            </ListItem>
                                            <ListItem button>
                                            <ListItemText primary="Algo 1 cate 1" />
                                            </ListItem> 
                                            <ListItem button>
                                            <ListItemText primary="Algo 2 cate 1" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card className={classes.solutionCard}>
                                    <CardHeader title="Algorithm2" subheader="category2"/>
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded[1],
                                            })}
                                            onClick={handleExpandClickTwo}
                                            aria-expanded={expanded[1]}
                                            aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                    </CardActions>
                                    <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
                                        <List component="nav" aria-label="main mailbox folders">
                                            <ListItem button>
                                            <ListItemText primary="Algo 1 cate 1" />
                                            </ListItem> 
                                            <ListItem button>
                                            <ListItemText primary="Algo 2 cate 1" />
                                            </ListItem>
                                            <ListItem button>
                                            <ListItemText primary="Algo 1 cate 1" />
                                            </ListItem> 
                                            <ListItem button>
                                            <ListItemText primary="Algo 2 cate 1" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        {listOfAllAlgo()}
                    </Box>
                </Container>
                <Footer />
            </main>
        </React.Fragment>
    );
}

export default Solution;