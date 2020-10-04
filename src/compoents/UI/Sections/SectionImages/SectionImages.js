import React from 'react';
import {makeStyles, useTheme} from "@material-ui/styles";


// core copmonets
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";


// core compoents
import vegasHouse from '../../../../assets/images/ft-homes1.png';
import vegasHouse1 from '../../../../assets/images/ft-homes2.png';
import vegasHouse2 from '../../../../assets/images/ft-homes3.png';
import bed from '../../../../assets/images/bed-solid.png';
import shower from '../../../../assets/images/bath-solid.png';
import house from '../../../../assets/images/home-solid.png';




const useStyles = makeStyles( theme =>({

        root: {
            display:"flex",
            flexWrap: "wrap",
            paddingLeft:"12.5em",
            paddingRight:"12.5em",
            justifyContent: "space-between",
            [theme.breakpoints.down("sm")] : {
                justifyContent:"center"


            },

        },
    subtitle1:{
        fontFamily:"Roboto Condensed",
        paddingTop:"1em",
        fontWeight:400

    },
    icons:{
        display: "inline",
        justifyContent: "space-between",
        paddingRight: "1em",
        paddingLeft:"1em"


    },
    iconText:{
        display:"inline",


    },
    showingButton:{
        color: theme.palette.common.nwblue,
    }
    })
);



export default function SectionImages() {

    const classes = useStyles();// end of classes
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container className={classes.root}>
            <Grid item
                  container
                  style={{ flex: "0 32%",
                      height: "100px",
                      marginBottom: matchesSM ? "100%" : "2%", /* (100-32*3)/2 */}}>
                <Grid item container
                      direction={"column"}
                      md
                      alignItems={"center"}
                      style={{maxWidth: "40em", marginTop: matchesSM ? "10em" : 0,
                          boxShadow:" 3px 3px 3px 3px #000000"}}>
                    <Grid item>
                        <img style={{height:"219px",width:"368px"}} src={vegasHouse} alt={"Vegas-House-1"}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.subtitle1} variant={"subtitle1"} gutterBottom>
                            123 Main St. Las Vegas, NV 89147
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h5"}
                                    style={{fontFamily:'Roboto Condensed', fontWeight:700}}>
                            $800,150
                        </Typography>
                    </Grid>
                    <Grid item style={{paddingTop: matchesSM ? "8em" : "2em"}}>
                        <img className={classes.icons} src={bed} alt={"bed-pic"}/>
                        <Typography className={classes.iconText}>4</Typography>
                        <img className={classes.icons} src={shower} alt={"shower-pic"}/>
                        <Typography className={classes.iconText}>3</Typography>
                        <img className={classes.icons} src={house} alt={"house-pic"}/>
                        <Typography className={classes.iconText}>2,504sqft</Typography>
                    </Grid>
                    <Grid item style={{paddingTop:"2em"}}>
                        <Button className={classes.showingButton}> Schedule a Showing</Button>
                    </Grid>
                </Grid>
            </Grid>
            {/*-----vegas house one-----*/}
            <Grid item
                  container
                  direction={"row"}
                  justify={"center"}
                  style={{ flex: "0 32%",
                      height: "100px",
                      marginBottom: matchesSM ? "100%" : "2%", /* (100-32*3)/2 */}}>
                <Grid item container
                      direction={"column"}
                      md
                      alignItems={"center"}
                      style={{maxWidth: "40em", marginTop: matchesSM ? "17em" : 0,
                          boxShadow:" 3px 3px 3px 3px #000000"  }}>
                    <Grid item>
                        <img style={{height:"219px",width:"368px"}}  src={vegasHouse2} alt={"Vegas-House-3"}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.subtitle1} variant={"subtitle1"} gutterBottom>
                            123 Main St. Las Vegas, NV 89147
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h5"}
                                    style={{fontFamily:'Roboto Condensed', fontWeight:700}}>
                            $800,150
                        </Typography>
                    </Grid>
                    <Grid item style={{paddingTop:"2em"}}>
                        <img className={classes.icons} src={bed} alt={"bed-pic"}/>
                        <Typography className={classes.iconText}>4</Typography>
                        <img className={classes.icons} src={shower} alt={"shower-pic"}/>
                        <Typography className={classes.iconText}>3</Typography>
                        <img className={classes.icons} src={house} alt={"house-pic"}/>
                        <Typography className={classes.iconText}>2,504sqft</Typography>
                    </Grid>
                    <Grid item style={{paddingTop:"2em"}}>
                        <Button className={classes.showingButton}> Schedule a Showing</Button>
                    </Grid>
                </Grid>
            </Grid>
            {/*-----vegas house two------*/}
            <Grid item
                  container
                  direction={"row"}
                  justify={"center"}
                  style={{ flex: "0 32%",
                      height: "100px",
                      marginBottom: matchesSM ? "100%" : "2%", /* (100-32*3)/2 */}}>
                <Grid item  container
                      direction={"column"}
                      md
                      alignItems={"center"}
                      style={{maxWidth: "40em", marginTop: matchesSM ? "17em" : 0,
                          boxShadow:" 3px 3px 3px 3px #000000" }}>
                    <Grid item>
                        <img style={{height:"219px",width:"368px"}}  src={vegasHouse1} alt={"Vegas-House-2"}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.subtitle1} variant={"subtitle1"} gutterBottom>
                            123 Main St. Las Vegas, NV 89147
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h5"}
                                    style={{fontFamily:'Roboto Condensed', fontWeight:700}}>
                            $800,150
                        </Typography>
                    </Grid>
                    <Grid item style={{paddingTop:"2em"}}>
                        <img className={classes.icons} src={bed} alt={"bed-pic"}/>
                        <Typography className={classes.iconText}>4</Typography>
                        <img className={classes.icons} src={shower} alt={"shower-pic"}/>
                        <Typography className={classes.iconText}>3</Typography>
                        <img className={classes.icons} src={house} alt={"house-pic"}/>
                        <Typography className={classes.iconText}>2,504sqft</Typography>
                    </Grid>
                    <Grid item style={{paddingTop:"2em"}}>
                        <Button className={classes.showingButton}> Schedule a Showing</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );


}
