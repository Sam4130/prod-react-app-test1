import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";


//material ui components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";


//core components
import realtorPic from '../../../../assets/images/agent.png';
import image from "../../../../assets/images/intro-bg.png";
import Button from "@material-ui/core/Button";




//styles section
const useStyles = makeStyles( theme =>({
    rootRealtor: {
        display:"flex",
        paddingBottom:"25em",
        backgroundColor: theme.palette.common.blue,
        padding:"10px",
        height:"637px",
    },

    realtorPic:{
        position:"absolute",
       paddingBottom: "10em",
        paddingLeft:"10em",
        backgroundImage: "url("+ image +")",
        [theme.breakpoints.down("sm")]:{
            maxWidth:"65%",
            maxHeight:"65%"
        },


    },

    titleOne:{
        position: "absolute",
        fontFamily: "Roboto Condensed",
        fontSize: "48px",
        fontWeight: 700,
        color: theme.palette.common.white,
        paddingTop: "1.35em"
    },
    titleTwo:{
        position: "absolute",
        padding:  "2.75em",
        fontFamily: "Roboto Condensed",
        fontSize: "48px",
        fontWeight: 300,
        color: theme.palette.common.white,
        paddingTop: "1.35em"
    },


    licenseSec: {
        fontFamily: "Roboto Condensed",
        color: theme.palette.common.white,
        paddingTop:"7em",
        paddingBottom:"1.5em",
        fontSize:"21px",
        width: "16em"
    },

    divDes: {
        width: "7%",
        paddingLeft:"4em",
        paddingTop: "0.27em",
        backgroundColor: theme.palette.common.white,
    },

    parag: {
        width:"30em",
        color: theme.palette.common.white,
        fontFamily:"Roboto Condensed",
        paddingTop: "2em"
    },
    contactButton:{
        ...theme.typography.login,
        borderStyle:"solid",
        borderWidth:"1px",
        backgroundColor: "transparent",

        "&:hover":{
            backgroundColor: theme.palette.common.nwblue
        },
        borderRadius:"0px",
        marginLeft:"0px",
        marginRight:"0px",
        height: "45px"
    },
    buttonTitle:{
        fontFamily:"Raleway",
        textTransform:'uppercase',
        fontWeight: 400,
        fontSize:'1.3125rem',
        width: '250px'
    }

}));


export default function SectionRealtor() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return(

        <React.Fragment style={{paddingTop:"10em"}}>
            <Grid container={6}
                  style={{position: matchesSM ? undefined : "relative", paddingBottom:"4.2em", paddingLeft:"10em"}}>
                <Grid item style={{position:"absolute"}}>
                    <img src={realtorPic} alt={"realtor-pic"} className={classes.relatorPic}/>
                </Grid>
            </Grid>

            <Grid container xs={12} className={classes.rootRealtor}>
                <Grid item xs={6} justify={ matchesSM ? "center" : undefined } style={{ paddingLeft:"45em", paddingTop:"1.3em"}}>
                    <Typography className={classes.titleOne}>Alden</Typography>
                    <Typography className={classes.titleTwo}>Casas</Typography>
                    <Typography className={classes.licenseSec}>LICENSED REALTOR® (# 0.547777)</Typography>
                    <Divider className={classes.divDes}></Divider>
                    <Typography className={classes.parag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid item  xs={6}style={{paddingTop:"33em", paddingRight:"4em"}}>
                    <Button className={classes.contactButton}>
                        <Typography className={classes.buttonTitle}>Contact Me</Typography>
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>


    );
}

