//built in modules
import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import {ChemicalCard, TempCard} from "../../Components/Cards/ChemicalCard";
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import { Cloud, RainyCloud } from "../../Components/svg/Icons";
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';

const useStyles = makeStyles((theme) => ({
    container:{
      backgroundColor: "rgba(13, 16, 23,0.9)",
      color:"black",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",
      padding:"1rem",
      paddingBottom:"4rem",
    },
    centeredBox:{
      display: "flex",
      flexDirection:"column",
      padding:"1rem",
      justifyContent:"center",

      alignContent: "center", /* Set align-content property */
      backgroundImage: "linear-gradient(rgba(25,45,25,0.5),rgba(25,35,25,0.5)),url(mainbg.jpg)",
      backgroundSize: "cover", /* Adjust as needed */
  backgroundPosition: "center center", /* Adjust as needed */

      // [theme.breakpoints.up('md')]:{}
    },
    textCentered:{
      textAlign:"center",
      fontWeight:700,
      padding:"0 2rem 0 2rem",
    },
    paragraph:{
      marginTop:"5rem",
      fontStyle:"italic",
      paddingBottom:"4rem"
    },
    line:{
      color:"white",
      width:"70%",
      height:"3px",
      backgroundColor:"white",
      marginTop:"3rem",
    },
    component:{
      display:"flex",
      flexDirection:"column",
      placeItems:"center",
      alignContent:"center",
      justifyContent:"center",
      color:"white",
      marginTop:"2rem",
      textAlign:"start",
      padding:"2rem" 
    }

}));

const CropRecommendationHomeView = () => {
  // const mediatheme = useTheme();
  // const matches = useMediaQuery(mediatheme.breakpoints.up("md"));
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
    <Box className={classes.container}>
      <div style={{display:"flex",justifyContent:"center"}}>
        <img
            src="innovatron_industries.png"
            alt="logo header"
            style={{ width:"90%", maxWidth:"600px",  marginTop: "2rem" }}
          />
      </div>
      <Box className={classes.centeredBox} >
        <div style={{display:"flex",justifyContent:"center"}}>
          <img
          src="falogo.png"
          alt="logo header"
          style={{ width:"90%", maxWidth:"600px",  marginTop: "3rem" }}

          />
        </div>
        <div style={{marginTop:"3rem",color:"white"}}>
          <Typography className={classes.textCentered }  >
              Maximizing agricultural potential with machine learning recommendations
          </Typography> 

          <Typography className={classes.paragraph} >
            In the Phillipines agriculture is a vital sector that supports the economy and provudes employment
            opportunities. Many farmers face challenges in choosing the right crops for their soil leading to lower 
            productivity. to address this, we propose a system that uses machine learning to suggest suitable crops based on
            soil analysis. By providing the information, the system helps inexperienced farmers make informed decision
            and improve their productivity. This approach, known as precision agriculture, optimizes crop selection and contributions to the sustainable
            development of the Philippines agriculture sector
          </Typography> 
        </div>
          
      </Box>
      
      <hr  className={classes.line}></hr>
        <div style={{color:"white",display:"flex",flexDirection:"column",placeItems:"center",paddingTop:"1.4rem",textAlign:"center"}}>
          <Typography variant="h4" component="h4" style={{fontWeight:700}}>
            FEATURES
          </Typography>
          <div style={{width:"400px",backgroundColor:"white",marginTop:"3rem"}}>
            <img
            src="weather.png"
            alt="logo header"
            style={{ width:"100%" }}
            />
            <div style={{padding:"1rem",marginTop:"0px",color:"black"}}>
              <h1 >Integrated with WeatherAPI</h1>
              <p>WeatherAPI can help you dertermine your location Temperature Humidity 
                and Precipitiation in reat time </p>
            </div>
          </div>
        </div>

        <hr  className={classes.line}></hr>

        <div className={classes.component}>
          
          <div style={{width:"400px"}}>
            <Typography variant="h4" component="h4" style={{fontWeight:700}}>
              Helps in the decision-making process.
            </Typography>        
            <p>Our app helps farmers and landowners in decision making for
              their farm.This will give the farmer or landowners the ability to 
              experiment with different crops, fertilizers with location.</p>
              
            <img
              src="mainbg.jpg"
              alt="logo header"
              style={{ width:"100%", maxWidth:"600px" }}
              />
          </div>
        </div>
        <hr  className={classes.line}></hr>

        <div className={classes.component}>
          
          <div style={{width:"400px"}}>
            <Typography variant="h4" component="h4" style={{fontWeight:700}}>
              Crops thrive in different environmnets.
            </Typography>        
            <p>Our app helps farmers and landowners in decision making for
              their farm.This will give the farmer or landowners the ability to 
              experiment with different crops, fertilizers with location.</p>
            <div> 
            <TempCard image={<WhatshotRoundedIcon style={{fontSize:80,color:"orange"}}/>} temp="WARM" status="More" icon={<RainyCloud/>}/>
            
            <TempCard  image={<AcUnitRoundedIcon style={{fontSize:80,color:"lightblue"}} />} temp="COOL" status="LESS" icon={<Cloud/>}/>
              
            </div>  
            
          </div>
          
        </div>
        <hr  className={classes.line}></hr>

                {/* Crops have three  */}

        <div className={classes.component}>
          
          <div style={{width:"400px"}}>
            <Typography variant="h4" component="h4" style={{fontWeight:700}}>
              Crops have 3 primary nutrients necessary for growth.
            </Typography>        
            <p>
              Nitrogen, Phosphorus and Potassium concentration values also affects crops 
              differently Therefore various crops require different NPK levels.
            </p>
            <div> 
              <ChemicalCard value="Nitrogen" symbol="N" description="also affects crops 
              differently Therefore various crops require different NPK levels." />
              <ChemicalCard value="Phosphorus" symbol="P" description="also affects crops 
              differently Therefore various crops require different NPK levels." />
              <ChemicalCard value="Potassium" symbol="K" description="also affects crops 
               differently Therefore various crops require different NPK levels." />
              
            </div>  
            
          </div>
          
        </div>
        <hr  className={classes.line}></hr>
        <div className={classes.component}>
          
          <div style={{width:"400px"}}>
            <Typography variant="h4" component="h4" style={{fontWeight:700}}>
              Crops are also considered by soil type to use 
            </Typography>        
            <p>
              The type of soil Nitrogen, Phosphorus and Potassium concentration values also affects crops 
              differently Therefore various crops require different NPK levels.
            </p>
            <div> 
              <ChemicalCard value="Nitrogen" symbol="N" description="also affects crops 
              differently Therefore various crops require different NPK levels." />
              <ChemicalCard value="Phosphorus" symbol="P" description="also affects crops 
              differently Therefore various crops require different NPK levels." />
              
            </div>  
            
          </div>
          
        </div>
        <hr  className={classes.line}></hr>
        <div className={classes.component}>
          
          <div style={{width:"400px"}}>
            <Typography variant="h4" component="h4" style={{fontWeight:700}}>
              Crops are also considered by the farm area.
            </Typography>        
            <p>
              The type of soil Nitrogen, Phosphorus and Potassium concentration values also affects crops 
              differently Therefore various crops require different NPK levels.
            </p>
              <ChemicalCard value="Nitrogen" symbol="N" description="also affects crops 
              differently Therefore various crops require different NPK levels." />
                         
          </div>
          
        </div>
        <hr  className={classes.line}></hr>
        <div className={classes.component}>
          
          <div style={{width:"400px"}}>
            <Typography variant="h4" component="h4" style={{fontWeight:700}}>
              Crops are also considered by change in season
            </Typography>        
            <p>
              The type of soil Nitrogen, Phosphorus and Potassium concentration values also affects crops 
              differently Therefore various crops require different NPK levels.
            </p>
              <ChemicalCard value="Nitrogen" symbol="N" description="also affects crops 
              differently Therefore various crops require different NPK levels." />
                         
          </div>
          
        </div>
        
        

    </Box>
    </>
  );
};

export default CropRecommendationHomeView;

