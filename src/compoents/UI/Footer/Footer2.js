import React from 'react';
import {makeStyles} from "@material-ui/styles";

// material ui copmonets
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

// core components
import Map from "../Maps/GoogleMaps";


// image assets
import homes1 from '../../../assets/images/homes4.png';
import homes2 from '../../../assets/images/homes5.png';
import homes3 from '../../../assets/images/homes2.png';
import homes4 from '../../../assets/images/homes3.png';
import homes5 from '../../../assets/images/homes1.png';
import facebook from '../../../assets/images/facebook-square-brands.png';
import instagram from '../../../assets/images/instagram-brands.png';
import linkedin from '../../../assets/images/linkedin-in-brands.png';
import youtube from '../../../assets/images/youtube-brands.png';
import map from '../../../assets/images/map.png';



const useStyles = makeStyles(theme =>({
    footer: {
        width: "100%",
    },

    imageItem: {
      flexGrow: 1,
      height:"100%",
      width:"100%",

    },

    mainContainer:{
        position:"absolute",
        backgroundColor: theme.palette.common.nwblue,
        display:"flex",
        height:"21.438em"
    },
    gridItem:{
        display:"flex",
        marginTop:"6em",

    },
    title1:{
        fontFamily:"Roboto Condensed",
        color:theme.palette.common.white,
        fontWeight:700,
        fontSize:"2.375em",
        paddingRight:".65em",
        letterSpacing:"3px",
        textTransform:"uppercase"
    },
    title2:{
        fontFamily:"Roboto Condensed",
        color:theme.palette.common.white,
        fontWeight:200,
        fontSize:"2.375em",
        paddingRight:".65em",
        letterSpacing:"3px",
        textTransform:"uppercase"
    },
    icon:{
        height:"1.55em",
        width: "1.55em",
        [theme.breakpoints.down("xs")]:{
            height:".5em",
            width:".5em"
        }
    },
    link:{
        color: theme.palette.common.white,
        fontFamily: "Roboto Condensed",
        fontSize: ".85rem",
        fontWeight:"regular",
        textDecoration:"uppercase",
        paddingTop:"1em"
    },
    realTitle:{
        fontFamily:"Raleway",
        color:theme.palette.common.white,
        fontWeight:"bold",
        fontSize:"1.3125em",
        letterSpacing:"3px",
        textTransform:"uppercase"
    },
    address:{
        textAlign:"right",
        fontFamily:"Roboto Condensed",
        color:theme.palette.common.white,
    },
    copyRight:{
        color:theme.palette.common.white,
        textAlign: "center"
    }
    })
);


export default function Footer2() {

    const classes = useStyles();//




    return(
        <footer className={classes.footer}>

            <Grid container style={{display:"flex"}}>
                <Hidden mdDown>
                <Grid item className={classes.imageItem}>
                    <img style={{height:"19em", width:"20em", }} src={homes1} alt={"pic-home-1"} />
                    <img style={{height:"19em", width:"19em", paddingLeft:"3px", paddingRight:"3px"}} src={homes2} alt={"pic-home-2"} />
                    <img style={{height:"19em", width:"19em", paddingLeft:"3px", paddingRight:"3px"}} src={homes3} alt={"pic-home-3"} />
                    <img style={{height:"19em", width:"19em", paddingLeft:"3px", paddingRight:"3px"}} src={homes4} alt={"pic-home-4"} />
                    <img style={{height:"19em", width:"20em", }} src={homes5} alt={"pic-home-5"} />
                </Grid>
                </Hidden>
            </Grid>


            <Grid container className={classes.mainContainer}>
                <Hidden mdDown>
                    <Grid item  style={{paddingLeft:"5em"}} className={classes.gridItem}>
                        <Grid container direction={"column"}>
                            <Typography className={classes.title1}>
                                Alden
                            </Typography>
                            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                                <Grid item component={"a"} href="https://www.facebook.com/"
                                      rel="noopener noreferrer"
                                      target="_blank">
                                    <img alt="facebook logo" src={facebook} className={classes.icon}/>
                                </Grid>
                                <Grid item component={"a"} href="https://www.instagram.com"
                                      rel="noopener noreferrer"
                                      target="_blank">
                                    <img alt="twitter logo" src={instagram} className={classes.icon}/>
                                </Grid>
                                <Grid item component={"a"} href="https://www.youtube.com"
                                      rel="noopener noreferrer"
                                      target="_blank">
                                    <img alt="twitter logo" src={youtube} className={classes.icon}/>
                                </Grid>
                                <Grid item component={"a"} href="https://www.linkedin.com"
                                      rel="noopener noreferrer"
                                      target="_blank">
                                    <img alt="twitter logo" src={linkedin} className={classes.icon}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden mdDown>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={"column"}>
                            <Typography className={classes.title2}>
                                Casas
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid  style={{paddingLeft:"11em"}} spacing={2}container direction={"column"}>
                            <Grid className={classes.link}>About Adlen</Grid>
                            <Grid className={classes.link}>Search Homes</Grid>
                            <Grid className={classes.link}>Buy or Sell</Grid>
                            <Grid className={classes.link}>Contact Me</Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden mdDown>
                <Grid item className={classes.gridItem}>
                    <Grid cotainer column justify={"flex"} style={{ flexWrap:"wrap",
                        justifyContent:"space-between", paddingLeft:"19em"}}>
                        <Grid item style={{ flex:"0 32%", width:"100%"}}>
                            <Grid className={classes.realTitle}>Realty Office </Grid>
                        </Grid>
                        <Grid item style={{ flex:"0", width:"100%", paddingTop:"3em"}}>
                            <Grid className={classes.address}> 123 Street</Grid>
                            <Grid className={classes.address}> City, State, 89077</Grid>
                            <Grid style={{textDecoration:"underline"}}
                                  className={classes.address}> Get Directions</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item column  justify={"flex"} style={{paddingLeft:"3em"}}>
                    <Grid item className={classes.gridItem}>
                        <Map/>
                    </Grid>
                </Grid>
                <Grid container column justify={"flex"}>
                    <Grid item
                          align={"center"}
                          direction={"row"}
                          style={{width:"100%", marginLeft:"3%", marginRight:"11.2%"}}>
                        <Divider style={{backgroundColor:"white", height:""}}></Divider>
                    </Grid>
                </Grid>
                </Hidden>
                <Grid container column justify={"flex"}>
                    <Grid item algin={"center"} direction={"row"} style={{width:"100%"}}>
                        <Typography className={classes.copyRight}>© No Rights Reserved - Project Breif</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </footer>

    );

}
