//built in modules
import React from "react";

//component files
import Login from "./components/Login";
import { Box } from "@material-ui/core";
import { Button, Typography, Container, Grid, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    color:"white",
    backgroundColor:"black",
    display:"flex",
    flexDirection:"column",
    paddingTop:"25vh",
    alignItems:"center",
    height:"calc(100vh)"
  },
  logo: {
    width: '350px', // Adjust the size as needed
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));
const LandingPageView = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <img src="../../innovatron_industries.png" alt="Logo" className={classes.logo} />
      <Typography variant="h3" component="h1">
        FARM ANALYTICA
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        className={classes.button}
        component={Link} 
        to="/login"
      >
        Get Started
      </Button>
    </Container>
  );
};

export default LandingPageView;
