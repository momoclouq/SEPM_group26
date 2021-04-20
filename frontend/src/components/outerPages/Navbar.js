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

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
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
        padding:"20px 30px",
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
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const headersData = [
        {
            label: "link1",
            href: "#"
        },
        {
            label: "link2",
            href: "#"
        },
        {
            label: "link3",
            href: "#"
        },
        {
            label: "link4",
            href: "#"
        },
    ];

    const femmecubatorLogo = "Logo";

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
                  <MenuItem>{label}</MenuItem>
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
                        <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
                    </Drawer>
                    <div className={classes.logo}>{femmecubatorLogo}</div>
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
                    <MenuItem>{label}</MenuItem>
                  </Link>
                </Grid>
                );
              });
        }

        return (
            <Toolbar className={classes.container}>
                <div className={classes.logo}>{femmecubatorLogo}</div>

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