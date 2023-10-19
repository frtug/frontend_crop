//built in modules
import React from "react";
import {
  form,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Paper,
  Button,
  Typography,
  InputAdornment,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from "react-router-dom";
import './login.css'

//background image
import background from "../../../../utils/images/croplogin.jpg";

export const useStyles = makeStyles((theme) => ({
  whitePaper: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the alpha value (0.5 for 50% transparency)
  },
  whiteInk:{
    color:'rgba(255, 255, 255)',
  },
  centered:{
    textAlign:"center"
  },
  buttonDisabled: {
    color: "#FFFFFF"
  },
  disabledButton: {
    backgroundColor: '#CCCCCC', // Change to the desired color
    color: '#FFFFFF', // Change to the desired text color
    '&:hover': {
      backgroundColor: '#CCCCCC', // Change to the desired color for hover state
    },
  }

 
}));
const LoginPageView = ({
  loginDetails,
  loginDetailsErrors,
  setLoginDetils,
  handleLoginDetails,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <Box
      style={{
        height:"calc(100vh)", // Example: Height is 100% minus 20 pixels
        background: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Paper elevation={5} className={classes.transparentPaper}> */}
          <Box p={4}>
            <Box className={classes.centered}>
                <Typography  className={classes.whiteInk} variant="h3" component="h3">
                  Login
            </Typography>
            </Box>
           
            <form>
              <Box my={2} >
                <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Username
                  </Typography>
                <FormControl
                  style={{ width: "300px" }}
                  variant="outlined"
                  size="small"
                >
                  
                  <OutlinedInput
                    value={loginDetails.username}
                    id="username"
                    className={classes.whitePaper}
                    name="username"
                    onChange={handleLoginDetails}
                    labelWidth={85}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircleIcon style={{ color: "#777" }} />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText className={classes.whiteInk}>{loginDetailsErrors.username}</FormHelperText>
                </FormControl>
              </Box>
              <Box my={2}>
              <Typography className={classes.whiteInk} variant="h6" component="h6">
                Password
              </Typography>
                <FormControl
                  style={{ width: "300px" }}
                  variant="outlined"
                  size="small"
                >
                  <OutlinedInput
                    value={loginDetails.password}
                    id="password"
                    name="password"
                    type="password"
                    className={classes.whitePaper}
                    onChange={handleLoginDetails}
                    labelWidth={75}
                    startAdornment={
                      <InputAdornment position="start">
                        <VpnKeyIcon style={{ color: "#777" }} />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText className={classes.whiteInk}>{loginDetailsErrors.password}</FormHelperText>
                </FormControl>
              </Box>

              <Box mt={5}>
                <FormControl
                  style={{ width: "300px" }}
                  variant="outlined"
                  size="small"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleSubmit(loginDetails);
                    }}
                    disabled={
                      !loginDetails.username ||
                      !loginDetails.password ||
                      loginDetailsErrors.username ||
                      loginDetailsErrors.password
                    }
                    
                    
                  >
                    Login
                  </Button>
                </FormControl>
              </Box>
              <Box mt={2} bgcolor={"white"}>
                <FormControl
                  style={{ width: "300px" }}
                  variant="outlined"
                  size="medium"
                >
                  <Link
                    to="/register"
                    style={{ textDecoration: "underline", color: "green"}}
                  >
                    <Typography variant="body2">
                      Don't have an account? Register here
                    </Typography>
                  </Link>
                </FormControl>
              </Box>

              <Box mt={2}>
                <FormControl
                  style={{
                    height: "100%",
                    width: "75%",
                  }}
                  variant="outlined"
                  size="small"
                >
                  
                </FormControl>
              </Box>
            </form>
          </Box>
        {/* </Paper> */}
      </Box>
    </Box>
  );
};

export default LoginPageView;
