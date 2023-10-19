//import required built in modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureReducer } from "./redux/configureReducer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";

//import required component files
import Routes from "./Routes";
import "./App.css";
import Navbar from "./Components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: green,
    normal: blue,
  },
  overrides: {
    MuiButton: {
      root: {
        color:"#81c784",
        border:"2px solid white",
        backgroundColor:"#81c784"
      },
      label:{
        color:"white",

      }
    
      
    },
  },
  
});

const App = () => {
  const store = configureReducer();
  
  return (
    <div style={{height:"100%"}}>

    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Routes />
         
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
    </div>

  );
};

export default App;
