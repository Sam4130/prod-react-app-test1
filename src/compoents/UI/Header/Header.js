import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";

//  material ui copmonets
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


// core componets
import ScrollToColor01 from "./header-Fade";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import {Hidden} from "@material-ui/core";



const useStyles = makeStyles(theme =>({

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down('md')] : {
            marginBottom:"2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1.25em"
        }
    },

    appbar:{
        zIndex: theme.zIndex.modal + 1,
        backgroundColor:"transparent",

    },

    title1:{
        fontFamily:"Roboto Condensed",
        fontWeight:700,
        fontSize:"2.375em",
        paddingRight:".65em",
        letterSpacing:"3px",
        textTransform:"uppercase"
    },
    title2:{
        fontFamily:"Roboto Condensed",
        fontWeight:200,
        fontSize:"2.375em",
        paddingRight:".65em",
        letterSpacing:"3px",
        textTransform:"uppercase"
    },
    tabs:{
        fontFamily:"Raleway",
        fontWeight:700,
        fontSize:"1.125em",
        textTransform:"uppercase",
        textAlign:"left"
    }

    })

);



// boiler plate
function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}



export default function Header(props) {

    const classes = useStyles();// end of classes
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <ElevationScroll>
            <ScrollToColor01>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                    <Typography variant="h6" className={classes.title1}>
                        Alden
                    </Typography>
                    <Typography variant={"h6"} className={classes.title2}>
                        Casas
                    </Typography>
                    <Hidden smDown>
                        <Tabs style={{paddingLeft: matchesMD ? "24em" :"45em"}}>
                            <Tab className={classes.tabs} label={"Buy or Sell"}/>
                            <Tab className={classes.tabs} label={"Contact Me"}/>

                        </Tabs>
                    </Hidden>
                </Toolbar>
            </AppBar>
            {/*<div className={classes.toolbarMargin} />*/}
            </ScrollToColor01>
        </ElevationScroll>
    );

}
