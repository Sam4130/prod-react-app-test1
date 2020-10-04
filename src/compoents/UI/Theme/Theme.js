

import { createMuiTheme } from '@material-ui/core/styles';

// set colors to const for easier use
const arcBlue = "#023061";
const titleYellow = "#F7F7F7";
const navGrey = "#222";
const navBlack = "#080808";
const arcOrange = "#ce4b03";
const nwBlue = "#141448";

export default createMuiTheme({
    palette: {
        common:{
           blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            yellow: `${titleYellow}`,
            grey: `${navGrey}`,
            black: `${navBlack}`,
            nwblue: `${nwBlue}`
        },
        primary: {
            main: `${navGrey}`
        },
        secondary: {
            main: `${titleYellow}`
        }
    },
    typography: {
        tab: {
            fontFamily:"Raleway",
            textTransform:'none',
            fontWeight: 600,
            fontSize:'1rem',
        },
        login:{
            fontFamily:"Raleway",
            fontSize:"1.1rem",
            textTransform:"none",
            color:"white",

        },
       pageTitle:{
           fontFamily:"Roboto Condensed",
           textTransform:'uppercase',
           fontWeight: 700,
           fontSize:'2.5rem'

       },
       pageTitleTwo:{
           fontFamily:"Roboto Condensed",
           textTransform:'uppercase',
           fontWeight: 400,
           fontSize:'2.5rem'
       }
    }

});
