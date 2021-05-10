import React from "react";
import { useState, useEffect } from "react";
import {Link as RouterLink} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
        margin: "0",
    },
    header: {
        backgroundColor: "inherit",
        padding: "0 20px",
        "@media  (max-width: 900px)": {
            paddingLeft: 0,
            },
        color: "#7209B7",
    },
    drawerContainer: {
        fontWeight: "400",
        color: "inherit",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        padding: "0 5px",
        fontWeight: "700"
    },
    itemBar: {
        justifyContent: "flex-end",
        fontWeight: "400",
    },
    mobileBar: {
        color: "inherit"
    },
    logoLink: {
        textDecoration: "none"
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const headersData = [
        {
            label: "Getting Started",
            href: "/start",
        },
        {
            label: "Why",
            href: "/why"
        },
        {
            label: "Solutions",
            href: "/solutions"
        },
        {
            label: "Token System",
            href: "/token"
        },
        {
            label: "Log in",
            href: "/login"
        },
    ];

    const TraineeLogo = "Trainee";

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false})); 
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    //components
    const PurpleText = withStyles({
        root: {
          color: "#890596",
          fontStyle: "normal",
        },
    })(Typography);

    const indexLink = (
        <Link
                    {...{
                      component: RouterLink,
                      to: "/",
                      color: "inherit",
                      style: { textDecoration: "none" },
                    }}
                  >
                    <PurpleText variant="h6">
                            {TraineeLogo}
                    </PurpleText>
                  </Link>
    );

    const DrawerItem = withStyles({
        root: {
            color: "#890596",
            padding: "20px 30px",
            textAlign: "center",
        }
    })(MenuItem);

    const displayMobile = () => {
        const handleDrawerOpen = () => {
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        }

        const handleDrawerClose = () => {
            setState((prevState) => ({...prevState, drawerOpen: false}));
        }

        const getDrawerChoices = () => {
            return headersData.map(({ label, href }) => {
              return (
                <Link
                  {...{
                    component: RouterLink,
                    to: href,
                    color: "inherit",
                    style: { textDecoration: "none" },
                    key: label,
                  }}
                >
                  <DrawerItem>{label}</DrawerItem>
                </Link>
              );
            });
          };

        return (
            <Toolbar className={classes.mobileBar}>
                <IconButton 
                    {
                        ...{
                            edge: "start",
                            color: "inherit",
                            "aria-label": "menu",
                            "aria-haspopup": "true",
                            onClick: handleDrawerOpen,
                        }
                    }>
                        <MenuIcon />
                    </IconButton>
                    <Drawer {
                        ...{
                            anchor: "left",
                            open: drawerOpen,
                            onClose: handleDrawerClose,
                        }
                    }>
                        <div className={classes.drawerContainer} onClick={handleDrawerClose}>{getDrawerChoices()}</div>
                    </Drawer>

                    {indexLink}
            </Toolbar>
        );
    };

    const displayDesktop = () => {
        const getGridChoices = () => {
            return headersData.map(({ label, href }) => {
                return (
                <Grid item>
                    <Link
                    {...{
                      component: RouterLink,
                      to: href,
                      color: "inherit",
                      style: { textDecoration: "none" },
                      key: label,
                    }}
                  >
                    <DrawerItem>{label}</DrawerItem>
                  </Link>
                </Grid>
                );
              });
        }

        return (
            <Toolbar className={classes.container}>
                {indexLink}

                <Grid className={classes.itemBar} container spacing={1}>
                    {getGridChoices()}
                </Grid>
            </Toolbar>
        );
    }

    return (
        <Box component="header" className={classes.root}>
            <AppBar className={classes.header}>
                {mobileView ? displayMobile(): displayDesktop()}
            </AppBar>
        </Box>
    );
}

export default Navbar;