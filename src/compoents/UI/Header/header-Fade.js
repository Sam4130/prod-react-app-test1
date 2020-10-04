import React from "react";
import { useScrollTrigger } from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/styles";


const useStyles = makeStyles(theme =>({}));


const ScrollHandler = props => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? window() : undefined
    });

    return React.cloneElement(props.children, {
        style: {
            backgroundColor: trigger ? "#222" : "transparent",
            color: trigger ? "white" : "white",
            transition: trigger ? "0.3s" : "0.5s",
            boxShadow: "none",
            height:"8em",
            paddingTop:"3em",
            paddingLeft:"3em"
        }
    });
};

const ScrollToColor01 = props => {
    return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor01;
