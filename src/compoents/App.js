import React, {useState} from 'react';
// custom imports
import {  ThemeProvider } from '@material-ui/core/styles';
import Header from "./UI/Header/Header";
import Footer2 from "./UI/Footer/Footer2";
import LandingPage from "./Pages/LandingPage";
// not a compoenent, boiler plate
import theme from './UI/Theme/Theme';
import {BrowserRouter,Route, Switch} from "react-router-dom";


function App() {

    //selected item in the menu hooks
    const [selectedIndex, setSelectedIndex] = useState(0);
    //handling the selected tab on the menu
    const [value, setValue]= useState(0);



  return (
    <ThemeProvider theme={theme} >
        <BrowserRouter>
            <Header value={value} setValue={setValue} selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}/>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/buy-or-sell" component={()=> <div>Buy or Sell</div>} />
                <Route exact path="/contact-me" component={()=> <div>Contact Me</div>} />
            </Switch>
            <Footer2 value={value} setValue={setValue} selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}/>
        </BrowserRouter>

    </ThemeProvider>



  );
}

export default App;
