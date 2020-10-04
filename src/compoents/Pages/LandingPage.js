
/*-------Table Of Contents----------*/


    /* Import List */
    /* Style Sheet*/
    /* Custom Variables */

    /*Hero Block*/

    /*Featured Homes For Sale Section Import*/

    /*Realtor Bio Import*/

    /*Client Testimonials*/

    /*Family Content Section*/

    /*Contact Form Section*/






import React, {useState, useEffect} from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";


// material ui imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";


// material ui icons
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// core components
import SectionImages from "../UI/Sections/SectionImages/SectionImages";
import SectionRealtor from "../UI/Sections/SectionRelator/SectionRealtor";

//assets components
import image from "../../assets/images/intro-bg.png";
import famimage from "../../assets/images/purchase.png";
import famimage2 from "../../assets/images/sell.png";
import {Hidden} from "@material-ui/core";







const useStyles = makeStyles(theme =>({

    mainContainer: {
       height:"385em",
    },
    root:{
        position: "static",
        justifyContent:"center",
        textAlign:"center",
        backgroundImage: "url("+ image +")",
        backgroundPosition: "center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"1100px",
        width:"100%",
        zIndex:1

    }, [theme.breakpoints.down("md")]: {
        height:"50%"
    },
    [theme.breakpoints.down("xs")]: {
        height:"10%"
    },
    heroSmallTitle: {
        fontFamily:"Raleway",
        textTransform:'uppercase',
        color: theme.palette.common.white,
        fontWeight: 400,
        paddingTop:"14.5em",
        boxShadow: theme.palette.common.white,
        fontSize:'1.5rem',
    },
    heroTitleOne: {
        fontFamily:"Raleway",
        textTransform:'uppercase',
        fontWeight: 200,
        fontSize:'4.5rem',
        color: theme.palette.common.yellow,
        [theme.breakpoints.down("md")]: {
            fontSize:"3.47rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize:"2.75rem",
        },

    },
    heroTitleTwo: {
        fontFamily:"Raleway",
        textTransform:'uppercase',
        fontWeight: 700,
        boxShadow: theme.palette.common.white,
        fontSize:'4.5rem',
        paddingBottom:"1.2em",
        color: theme.palette.common.yellow,
        [theme.breakpoints.down("sm")]: {
            paddingBottom:".77em",
        },
        [theme.breakpoints.down("md")]: {
            fontSize:"3.75rem",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize:"2.75rem",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize:"2.5rem",
        },
    },


    loginButton:{
        ...theme.typography.login,
        borderStyle:"solid",
        borderColor: theme.palette.common.white,
        borderWidth:"2px",
        backgroundColor: "transparent",

        "&:hover":{
            backgroundColor: theme.palette.common.nwblue,
            opacity:"75%"
        },
        borderRadius:"3px",
        marginLeft:"25px",
        marginRight:"25px",
        height: "63px",

    },
    buttonTitle:{
        fontFamily:"Raleway",
        color: theme.palette.common.white,
        textTransform:'uppercase',
        fontWeight: 500,
        paddingRight:"10px",
        paddingTop:"2x",
        paddingBottom:"2px",
        fontSize:'1.313rem',
        width: '300px',

    },

    loginButtonHome:{
        ...theme.typography.login,
        borderStyle:"solid",
        borderColor: theme.palette.common.black,
        borderWidth:"4px",
        backgroundColor: "transparent",

        "&:hover":{
            backgroundColor: theme.palette.common.white,
        },
        borderRadius:"3px",
        marginLeft:"25px",
        marginRight:"25px",
        height: "63px",

    },
    buttonTitleHome:{
        fontFamily:"Raleway",
        color: theme.palette.common.black,
        textTransform:'uppercase',
        fontWeight: 500,
        paddingRight:"10px",
        paddingTop:"2x",
        paddingBottom:"2px",
        fontSize:'1.313rem',
        width: '300px',

    },
    secondTitle: {
        fontFamily:"Roboto Condensed",
        fontSize:"1.3125rem",
        textTransform:'uppercase',
        fontWeight: 700,
        opacity: "40%"

    },
    mainTitle: {
        fontFamily:"Raleway",
        fontSize:"2.45rem",
        textTransform:'uppercase',
        fontWeight: 700,
        marginTop:"1em",
        display:"inline"

    },
    mainTitle2: {
        fontFamily:"Raleway",
        fontSize:"2.45rem",
        textTransform:'uppercase',
        fontWeight: 400,
        paddingBottom:"1em",
        paddingLeft:".25em",
        display:"inline"

    },
    divDes: {
        width: "7%",
        paddingTop:".47em",
        marginTop: "2em",
        backgroundColor: "#023061"

    },
    divDesTwo: {
        width: "16%",
        paddingTop:".47em",
        marginTop: "2em",
            backgroundColor: "#023061"

    },
    realtorPic:{
        position:"relative",
        paddingBottom: "10em",
        paddingLeft:"10em",
        backgroundImage: "url("+ image +")",
    },
    itemContainer: {
        width:"auto",
        [theme.breakpoints.down("md")]: {
            maxWidth:"40em"
        },
        [theme.breakpoints.down("sm")] :{
            maxWidth:"25em"
        },

    },

    familyPic: {
        backgroundImage: "url("+ famimage +")",
        backgroundPosition: "center",
        backgroundSize:"cover",
        height:"100%",
        width:"100%",
        [theme.breakpoints.down("sm")] : {
            maxHeight:"667px",
            maxWidth: "375px",

        },

    },
    familyPic2: {
        backgroundImage: "url("+ famimage2 +")",
        backgroundPosition: "center",
        backgroundSize:"cover",
        height:"100%",
        width:"100%",
        [theme.breakpoints.down("sm")] : {
            maxHeight:"667px",
            maxWidth: "375px",

        },

    },
    thickTitle:{
        fontFamily: "Raleway",
        fontSize: "36px",
        fontWeight: 700
    },
    thinTitle:{
        fontFamily: "Raleway",
        fontSize: "36px",
        fontWeight: 400
    },
    paragraphContainer:{
        fontFamily:"Roboto Condensed",
        paddingTop:"2em",
        width:"auto"
    },
    inputFeild:{
      width:"40ch",
      padding:" 1em",
    },
    msgBox:{
        width:"84ch",
        paddingTop:"3em"
    },
    formButton:{
        backgroundColor:theme.palette.common.nwblue,
        height:"4em",
        width:"15em",

        "&:hover":{
            backgroundColor: theme.palette.common.nwblue,
            opacity:"50%"
        },
    },
    formTitle:{
        color:"#ffffff",
        padding:"3%",
        fontFamily:"Raleway",
        fontSize:"1.47em",
        fontWeight:300
    }
})  );





export default function LandingPage() {

    const classes = useStyles();// end of classes
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("down"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));



    return(
        <Grid container className={classes.mainContainer}>
            <Grid item style={{width:"100%" }}>

                {/*------Hero Block--------*/}
                    <Grid container className={classes.root}>
                        <Grid item>
                            <Typography  className={classes.heroSmallTitle}> Greater Las Vegas Real Estate</Typography>
                            <Typography  variant={"h2"} className={classes.heroTitleOne}>Find Your<br/></Typography>
                            <Typography className={classes.heroTitleTwo}>Dream Home</Typography>
                            <Grid item>
                                <Button className={classes.loginButton}>
                                    <Typography className={classes.buttonTitle}>Contact Me</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                {/*-----Featured Homes For Sale Section-------*/}
                <Grid container
                      direction={"column"}
                      style={{  display:"flex",textAlign:"center"}}>
                    <Grid item direction={"column"} style={{width:"auto"}}>
                        <Typography className={classes.secondTitle} variant={"subtitle1"}>Las Vegas, Henderson, Summerline + More</Typography>
                        <Grid item style={{paddingTop:"1em"}} justify={"space-between"}>
                            <Typography  variant={"h3"} className={classes.mainTitle}>Featured</Typography>
                            <Typography className={classes.mainTitle2} variant={"h3"}>Homes For Sale</Typography>
                        </Grid>
                        <Grid item align={"center"} >
                            <Divider className={classes.divDes}></Divider>
                        </Grid>
                        <Grid item style={{paddingTop:"8em"}}>
                            <SectionImages/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*----end of featured properties---*/}
            {/*-----Realtor Bio-------*/}
            <Grid container
                  direction={"column"}
                  style={{paddingTop:"10em"}}>
                <Hidden mdDown>
                    <Grid item>
                        <SectionRealtor/>
                    </Grid>
                </Hidden>
             {/*---end of relator bio------*/}
                {/*-----Client Testimonials-------*/}
             <Grid container
                   direction={"column"}
                   style={{  display:"flex",textAlign:"center", paddingTop:"6em"}}>
                 <Grid item direction={"column"} style={{width:"auto",}}>
                     <Typography className={classes.secondTitle} variant={"subtitle1"}>Client</Typography>
                     <Grid item style={{paddingTop:"1em"}} justify={"space-between"}>
                         <Typography  variant={"h3"} className={classes.mainTitle}>Testimonials</Typography>
                     </Grid>
                     <Grid item align={"center"} >
                         <Divider className={classes.divDes}></Divider>
                     </Grid>
                 </Grid>
             </Grid>
                <Grid container
                      direction={"row"}
                      justify={"center"}
                      style={{  display:"flex",textAlign:"center", paddingTop:"6em"}}>
                    <Grid  item
                           container
                           className={classes.itemContainer}
                           style={{ marginBottom: matchesMD ? "15em" : 0}}
                           md>
                        <Grid item container direction={"column"} md >
                            <Grid item>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <Typography style={{paddingTop:"2em", paddingLeft: matchesSM ? "3em" : "6em", paddingRight: matchesSM ? "3em" : "6em"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Typography>
                                <Typography style={{fontStyle:"italic", paddingTop:"2em"}}> -First Last</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid  item
                           container
                           className={classes.itemContainer}
                           style={{ marginBottom: matchesMD ? "15em" : 0}}
                           md>
                        <Grid item container direction={"column"} md >
                            <Grid item>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <StarBorderIcon/>
                                <Typography style={{paddingTop:"2em", paddingLeft: matchesSM ? "3em" : "6em", paddingRight: matchesSM ? "3em" : "6em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Typography>
                                <Typography style={{fontStyle:"italic", paddingTop:"2em"}}> -First Last</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            {/*----end of testimonial section------*/}
            {/*---Family Content Section----*/}
                <Grid container
                      direction={"row"}
                      style={{
                          display:"flex",
                          flexWrap:"wrap",
                          paddingTop:"8em",
                          justifyContent:"space-between" }}>
                    <Grid item
                          container
                          className={classes.itemContainer}
                          style={{backgroundColor:"#ffffff",
                              marginBottom: matchesMD ? "15em" : 0,
                              width:"50%", }}>
                        <img src={famimage} alt={"famliy-pic-1"} className={classes.familyPic}/>
                    </Grid>
                    <Grid item
                          container
                          className={classes.itemContainer}
                          style={{backgroundColor:"#ffffff",
                              marginBottom: matchesMD ? "15em" : 0,
                              width:"50%",
                          }}>
                        <Grid style={{backgroundColor:"rgb(2, 47, 95, 0.1)", paddingTop:"5.35em"}}>
                            <Grid item style={{paddingLeft:"2em"}}>
                                <Typography className={classes.thickTitle}>Purchase</Typography>
                                <Typography className={classes.thinTitle}>A Home</Typography>
                            </Grid>
                            <Grid item style={{paddingLeft:"2em"}}>
                                <Divider className={classes.divDesTwo}></Divider>
                            </Grid>
                            <Grid item style={{paddingLeft:"2em", paddingRight:"4em"}}>
                                <Typography className={classes.paragraphContainer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                </Typography>
                            </Grid>
                            <Grid item style={{ paddingTop:"1em", paddingBottom:"2em"}}>
                                <Button className={classes.loginButtonHome}>
                                    <Typography className={classes.buttonTitleHome}>Get Started</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container
                      direction={"row-reverse"}
                      style={{
                          display:"flex",
                          flexWrap:"wrap-reverse",
                          justifyContent:"space-between",
                          paddingBottom:"6em"}}>
                    <Grid item
                          container
                          className={classes.itemContainer}
                          style={{backgroundColor:"#ffffff",
                              marginBottom: matchesMD ? "15em" : 0,
                              width:"50%",}}>
                        <img src={famimage2} alt={"famliy-pic-2"} className={classes.familyPic2}/>
                    </Grid>
                    <Grid item
                          container
                          className={classes.itemContainer}
                          style={{backgroundColor:"#ffffff",
                              marginBottom: matchesMD ? "15em" : 0,
                              width:"50%",
                          }}>
                        <Grid style={{backgroundColor:"rgb(2, 47, 95, 0.1)", paddingTop:"5.35em"}}>
                            <Grid item style={{paddingLeft:"2em"}}>
                                <Typography className={classes.thickTitle}>List</Typography>
                                <Typography className={classes.thinTitle}>A Home</Typography>
                            </Grid>
                            <Grid item style={{paddingLeft:"2em"}}>
                                <Divider className={classes.divDesTwo}></Divider>
                            </Grid>
                            <Grid item style={{paddingLeft:"2em", paddingRight:"4em"}}>
                                <Typography className={classes.paragraphContainer}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt
                                </Typography>
                            </Grid>
                            <Grid item style={{ paddingTop:"1em", paddingBottom:"2em"}}>
                                <Button className={classes.loginButtonHome}>
                                    <Typography className={classes.buttonTitleHome}>Get A Free Home Estimate</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            {/*----end of family portrait section----*/}
            {/*------Contact Form Section-------*/}
                <Grid container
                      style={{display:"flex"}}>
                    <Grid  item
                           container
                           style={{marginBottom: matchesMD ? "15em" : 0, width:"100%", height:"100%"}}>
                        <Grid item
                              style={{flexGrow:"1", textAlign:"center", margin:"2%"}}>
                            <Typography className={classes.secondTitle} variant={"subtitle1"}>I am Available</Typography>
                            <Grid item style={{paddingTop:"1em"}} justify={"space-between"}>
                                <Typography  variant={"h3"} className={classes.mainTitle}>Contact Me</Typography>
                                <Typography className={classes.mainTitle2} variant={"h3"}>Today</Typography>
                            </Grid>
                            <Grid item align={"center"} >
                                <Divider className={classes.divDes}></Divider>
                            </Grid>
                        </Grid>
                        <Grid item
                               container
                              direction={"row"}
                              style={{flexWrap:"wrap",
                                  justifyContent:"space-between",
                                  paddingTop:"6em",
                                  margin:"11%",}}
                                >
                            <Grid item
                                  style={{flex:"0 32%",
                                height:"100px",
                                marginBottom:"2%"}}>
                                <Typography align={"center"}>
                                    <PhoneEnabledIcon align={"center"} style={{color:"#023061"}}/>
                                </Typography>
                                <Typography
                                    align={"center"}
                                    style={{
                                        fontStyle:"Roboto Condensed",
                                        textTransform:'uppercase',
                                        fontSize:"18px",
                                        color:"#707070",
                                        opacity:"50%"}}>
                                    Direct Phone #
                                </Typography>
                                <Typography
                                    align={"center"}
                                    style={{
                                        fontStyle:"Roboto Condensed",
                                        textTransform:'uppercase',
                                        fontSize:"18px",
                                        color:"#000000"}}>
                                    702-123-4567
                                </Typography>
                            </Grid>
                            <Grid item
                                  style={{flex:"0 32%",
                                      height:"100px",
                                      marginBottom:"2%"}}>
                                <Typography align={"center"}>
                                    <MailOutlineIcon align={"center"} style={{color:"#023061"}}/>
                                </Typography>
                                <Typography
                                    align={"center"}
                                    style={{
                                        fontStyle:"Roboto Condensed",
                                        textTransform:'uppercase',
                                        fontSize:"18px",
                                        color:"#707070",
                                        opacity:"50%"}}>
                                    Email Me
                                </Typography>
                                <Typography
                                    align={"center"}
                                    style={{
                                        fontStyle:"Roboto Condensed",
                                        textTransform:'uppercase',
                                        fontSize:"18px",
                                        color:"#000000"}}>
                                    Email@mail.com
                                </Typography>
                            </Grid>
                            <Grid item
                                  style={{flex:"0 32%",
                                      height:"100px",
                                      marginBottom:"2%"}}>
                                <Typography align={"center"}>
                                    <LocationOnIcon align={"center"} style={{color:"#023061"}}/>
                                </Typography>
                                <Typography
                                    align={"center"}
                                    style={{
                                        fontStyle:"Roboto Condensed",
                                        textTransform:'uppercase',
                                        fontSize:"18px",
                                        color:"#707070",
                                        opacity:"50%"}}>
                                    Office
                                </Typography>
                                <Typography
                                    align={"center"}
                                    style={{
                                        fontStyle:"Roboto Condensed",
                                        textTransform:'uppercase',
                                        fontSize:"18px",
                                        color:"#000000"}}>
                                    Realty Office
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/*--Form---*/}
                <Grid container justify={"space-between"} display={"flex"} style={{flexWrap:"wrap"}} >
                    <Grid item
                          align={"center"}
                          direction={"row"}
                          style={{width:"100%", margin:"2%" }}>
                        <Typography className={classes.secondTitle} variant={"subtitle1"}>Schedual a Free</Typography>
                        <Grid item style={{paddingTop:"1em"}} justify={"space-between"}>
                            <Typography  variant={"h3"} className={classes.mainTitle}>Home Consultation</Typography>
                        </Grid>
                    </Grid>
                    <Grid item
                          align={"center"}
                          direction={"row"}
                          style={{width:"100%",  }}>
                        <TextField className={classes.inputFeild} defaultValue={"NAME"}  id="outlined-basic"  variant="outlined" />
                        <TextField className={classes.inputFeild} defaultValue={"EMAIL"}  id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid item
                          align={"center"}
                          direction={"row"}
                          style={{width:"100%", }}>
                        <TextField className={classes.inputFeild} defaultValue={"PHONE"}  id="outlined-basic"  variant="outlined" />
                        <TextField className={classes.inputFeild} defaultValue={"OPTIOIN"}  id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid item
                          align={"center"}
                          direction={"row"}a
                          style={{width:"100%", }}>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            defaultValue={"MESSAGE"}
                            rows={10}
                            variant="outlined"
                            className={classes.msgBox}
                        />
                    </Grid>
                    <Grid item
                          align={"center"}
                          direction={"row"}
                          style={{width:"100%", paddingTop:"3em"}}>
                        <Button className={classes.formButton}>
                            <Typography className={classes.formTitle}>Submit</Typography>
                        </Button>
                    </Grid>
                </Grid>
                {/*----end of contact info section -------*/}

            {/*---end of maincontainer----*/}
            </Grid>
        </Grid>



    );

}
