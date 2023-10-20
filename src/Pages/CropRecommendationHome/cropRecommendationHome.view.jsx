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
import {ChemicalCard, ImageCard, SoilCard, TempCard} from "../../Components/Cards/ChemicalCard";
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
              <ChemicalCard value="Nitrogen" symbol="N" description="helps in chlorophyll production, grain quality
              and size, protein sysnthesis and resistance to stress and diseases" />
              <ChemicalCard value="Phosphorus" symbol="P" description="assists in root development, energy transfer and storage
              flowering and reproduction development " />
              <ChemicalCard value="Potassium" symbol="K" description="facilitates water and nutrient uptake, stomatal regulation
              and enzyme activation" />
              
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
              <SoilCard name="Clay Soil" url="https://www.familyhandyman.com/wp-content/uploads/2022/02/GettyImages-1320300867-ADedit.jpg?resize=768%2C512" desc="has the potential to be fertile due to 
              its highnutrient retnetion capacity,however, the compacted nature and poor drainage can inhibit root development and affects plants growth" />
              <SoilCard name="Loam Soil" url="https://static.prepp.in/public/image/b672f72f289e4650afd8c5ec140bf664.png?tr=w-512,h-341,c-force" desc="has generally better drainage, may benifit from more frequent and precise 
              nutrient application to ensure adequate nutrients availability for plants uptake.
              " />
              
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
              How much crop yield that will be generated can be determined by
               how small or large the land area of the farm is
            </p>
            <ImageCard title="Crops in farm area" url="https://opecfund.org/var/site/storage/images/_aliases/content/6/4/6/7/1667646-1-eng-GB/3dac31e2bf55-philippines_oq_oct_2015_ss_1088045873.jpg" />
       
          </div>
          
        </div>
        <hr  className={classes.line}></hr>
        <div className={classes.component}>
          
          <div style={{width:"400px"}}>
            <Typography variant="h4" component="h4" style={{fontWeight:700}}>
              Crops are also considered by change in season
            </Typography>        
            <p>
              Crops yield depends on seasons, for different seasons have different length of daylight 
              temperature, and rainfall. It also dictates the prevalance of pests and dieases,
              pollination and reproduction since some crops might require insects or wind for pollination.

            </p>
              <ImageCard title="Seasons vary according to" url="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTExYTFBQXFxYYGBsZGhkZGR4ZHhsZHx8ZGRgZGRkgHikhGSEmHxkaIjIiJiosLy8vGyA1OjUtOSkuLywBCgoKDg0OHBAQHDQnIScuNzcuLjkuLjAuLjcsLjAuLi4uMC4uLi4wLjQuMC43MCwsLi4sLjAuLi4uLi4uMC4uLv/AABEIALUBFgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQIDAAEGBwj/xAA8EAACAQIFAwIEBAUEAQQDAQABAhEDIQAEEjFBBSJRYXETMoGRBkJSoRRiscHwI9Hh8YIVU3KSJDOyB//EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAwEQACAQMCAwcDBAMBAAAAAAAAAQIDESESMQRBURMUImFxgfAyocEVkbHxBULh0f/aAAwDAQACEQMRAD8A5vTjYTBf8N6jEv4dse6qiPG7J9AQLiQXBHwj4xnw8UUxHAoC42FxfoxIU8HULpKBSON6MXBcSMnHag6UUBcZpxdpxvRgajtJQExjU8X6MZowykBxB9GM0Yv04zRhtQNIPoxmjBGnGaMdqBpB9GJrSJ2xboxtZGA5BS6lL5dhuMaFE+MFrPm+DcrlWYbD74nKrpWSsaWp4E2jEgmDamTYGDvi/IgI8kTx/wA46VVWujo0XezBKOUY7Dfk2H3wZQ6Y4mVH1w/TMJoAge2Ki884xS4iT5G2PDRXMX5bpyIw1wf6YfLlqQXtUTHjCwZaT5wzy1AQACR7+cZ6s28tmilBLCQszebKrFsK6ueniBi7O0GLMPBwFUpMuNMIRsZ6k538izLkyTG2CK/VvhKSVgATvf7YDStAgziv4BqbiwO/rx9sdKK5ixm9kK80zZhtdQELeE2/8id74no4w0bKKI7pJ4GJZiaaQoUeYux+uOg4w2yzpxlPfCAKORYmDYc46/L5KnQpFtK6zeCZ9pnHI08yQZjBLdVqEQTbCVtc/Qejohnmdb0vqWoEtc+v9sZjkUzpHOMxB0SyrFOrElf0xELiYXGzBkyTFQ4sFX/IxUFxNUwcHeIxo/z/ALxoKMT0HG9B8YZSFcX0IacYExeKR8HGgMFTFcOpWaRHGM0YuxkY7UdpXIp0YzRgmnTn0xopgqaA4Mo0D1xoU8EacZpw2sGkHCY2VGL9ONacDWdpB9GNqnnF5TESuC5nKBGoBNhbDrouUerZVEbSTF/Hr9sc71Gt8OmW52Hubf8AOD/wV1bQrBmGq8AlZi20nnGPiJ2jg1cOvFk6LO/hLMMda/DNttV/3AH745rPZWpRbTURlbwRH1Hn3GPS+g58tSDMIkk7j6FhaLD9sA/j3ICpQFYb0z91aAf30/vjNR4luWmRoq0bLUjzxax4ODMtXOASmLKYjbGuUTNGQ7pEi+CK1Ro4jcYV5fMnm+LqtRiLWB84g4u+TSpK2DRzV9sVZmqpiRjRywtLf574ozAUTBkevGHWm+CbcrZBs2VLAIPX2Hn/ADxiJpEDeBgdQwBdjBa8RsPyr9Bv6k4gah84eLbVyWLlj25OB6jE4noHJOJBF/y+OvYNrgZONF8HjSPyk4hqE2THa/I7R5gi02OwOMw2y2bKj5cZhdcug3Zx6g4GJqMbBB8YmriLMDg6hbEQMTGNq/oPfGpwyZ1iQOJB/OIhTiSocddAyXLmCMQLTiOk42RjlYLbe5IHGw2IAYkRg3BYmHxmIri+pQZY1ArO0jfCuok7DKLauQAxsY1qHnFgqJycc5HKKNBPWMS0rHr54+2BKuaHH+fTFJzRwbSYHKKD1pjk4jmVVEZye1RPr9sJOodXWkO43OwG5/2wnpfiarUfQgCiJJ+Yx6cTtxhZSs7XDGzV7FWd6y1apo/JEgC4n1PO+GPS6KkgiqgP6XBB+hgr9yMKMpm0/iEatdCw1yJsbT7Cxx6RlOjURDooINwwOoHwRMg4y1aunDL0aOrKOo/CeoUEXcBfynUAb7ESG9sNutOP4atIsEmD6XE+ngYVZTMQPkSeCBB/a2M6zXL0Kq3upMEzEd1rTuOTjFFrXc2yi9JxLsDsF+k4i1WfGF7Zrxis5k+cewoHlOohh8fE/wCLwt/jgPmtiit1IflE+9hguIvaW5jOpnDxgOszNad7n28fX/fCqpm3O7R7WxQtd5J1G/rxx/nrgWWwjqXHpB84z4YwjOaffUfvixOpON4P0/2wWmFVEOhSETbGi2Fa9X8r9jiP/q/8v7/8YXSxu0Q0LYjOFzdV8L9zgWrn3bmB6f74OkDmh8KgG5jGY5rVO8nGYGhHdqw3M5XMMCoaPWSP7YpyHSa6tIAHszX/AGjHW0VBBvMeDN99+bXxQxAViYEcnbfafO9sfO99qX8z2e4U4q98CoUMz4H3OImnWiWH7nDunUVl1wI9bRxcA4yqaf5osQDPnfbn/nD/AKhW6/YV8DRtdPHqJaLNFlB/8v7RivM08wQe0L4MGR67RhualIQQBvAIiJ3Ec/4MRq9RQHTBuPMx9LScHvtZ8yHYUIrMjn8p0nMhgRVA5Mlz+wB+2GOWy+ZAaWmZi8yfPdBA/wAjFx6msADedwdxxxxja9V9ZPrebf12wneaqJqXDSJmrmALoP8A7CPXGUczWbhJjaSf7RijM501VN4AM2kyBYk/W8Yu/DdNnRaj+bRsVWVB9QYn64E/8jXUW7rHkehR4ClKzzZ7B/4Y63k8xUFGq1WlWJ0hamkKW/SGHPo0Ttvj0LqOWZctUULrhGgWuQDFvMxj5+/GBDZmp23YqVIsDssn3gfbHafh/wDEuYy6fDWq9VF4rd59QpsQPAm2E4hTqaaqlne3/gjrQoN02ufTcGepmf8A249ZH+98D1P4mxOgX2/oCYthh1DqJrt8RUVA8WUHSfLXHJP+ci5um5gD3I3gWvHpOL9/rdTzakEr6ItlU5kiyL634xTmqtdFLNpVRuZHt5v7YPFN1G5I5kbDx7f7Y4f8R9YNZtCk/DUyPU7Ti1Hi69SVr4OjSV7Si17l2SzjVampjJ3vxOwA44xZluoIazxaVgHyQZP349sJ6dTRK/qAv42II9wcDVHIIIsRyMatTTuXcU46R7mKBL3O+oD0/NHrtgMZutQM0qtSmOQrECeZAMHAP8ZUkHWxi4k/55OH/TWy9b/9tX4TAgEaXcsP5QqkMfQx7jfAk0zopxHH4P691PMVVpUqrVJMQyK4HuYsPUnHY9Z6jmYrUkdDosxC6SbkOvzNED+hwspfiqlk6DU8jQZGWAa1bSzNMAkIpIEyIv8ASb4V/hnqDvLVDLVSWJ5Ja5MfX7zjNlPUjdBKS0Mo/wBf9P8AT/bEagr/AKf6YdCig/L9ZJvfz9saTQCDpE2Fzhf1GoZf09HPOlWflwXVykIWFUM1oXQwnaRqNgRv6wfSWZ076R+378XxJo/SOdo4/wCsD9QqBX+Pj1OcZatu0+vpispV/Th+ADEibk3H+Tv+2Immt+2NuBucFcdUROPAxauIW+J+jGFKn6MN2ZZiI+nrGKlKi+w22w646oDucRTFT9GMHxP0gYbMByf2xWSoFpH0we/VAd1iha1Vh+Sf89sVnNP/AO3+4wz1rO8/X9sY0TF/W/PjB77MXu0ReuZP6P3xrBiwf+8Zg99mDu6+MMpZqqBBUx6ce/qL2HnG871Y6WCggHySSbefWMbpZMgkswgnbe4mxIPP9I9sG/w+3IbxaPSCb7euPNbjfY09jVs0pYYjodachUnSTb/s/XFlTPXKEDUPHBv/AH8+cNFygDg6BINiQCbfyib4ozeRpuxqOvzE9wJH/HOG1wb2Jvhp6bN/0KUzAcBg0Abj9sWRfe3v/kYJodMp06jagzJ2x4E3MCxBmPeNvJidIo1JKNpuBAOobza8jcknafE4MpxMr/x828A7VNoQgRvBi8jf/N8XghhAA0yeAInck7m394xYvTiKZGq3cO4wBa3/AM5jiw2vhfl8vHb8QEwZi1wCY08D098Jh7HT4adPbn7ACdV+EGDEzrZbbgTBYewEj7e3UVupqlECkJBARCuw8fsD9scr1Toqlvnv6X9pHH3x2HSvw0wpUpqAUqtMdwvDxEBS3pMzuNsT4iNJ6c5b26nucLWm6bxywcv13Ls1eiSUAAXu3kzMH+3ucdPQSibErJvI459h/wB4S5vo1dG0spABjUCGG8yQO4iIO2HuXbLmgtCoksBIZAUZWP6iRDKYi+3EXiklhRT2MsZzndyitV+fPyIUKiKID9ysCpJ28xY2jDDMZ2AGVh8wF4vPH2DYS01ywGol2MfKTFwT4EzvzggZgOoFPLhDMg3J5AgkX+Y3B/2xGUcj051Umnby+IV/jjq7JRSkphqq9+w7PEDaZg+xx55N8dD+NHJrCf0CwmBdhEnf1OEeUphnCn81vqQQP3jHqcPFRpojUblLI76b0h66gfDqalEqwUkMu/A3U/cH0GBc10pyCygCDDL+k2uvlLgzxPpj0vpCL/DCppPxlonUqBlqqwAgkiNVMwbXgnHMV2VlNQbEX4KnYq45sSLidjjoVXJst2KtkQ9FyilnDgMVCi9xzqGHOXoqh7QANxAxP8DZIs/xWRXUVAzqxIDKTMWHif2x0PWcvlarVcxQMU5KKogBqunUxTu+QFgJsJVosMNKrBT0yfLl9k/UCpVNKlGOHzbttv6nB9WzvcaY3JvP1j9iD9cdD+HaLWO5A/fjbHGtVLViTvMb+LAT7DHpfR6A/gCVU/EerpFS/aoCsFBjcmduBeBha8tERacsuRFakyRfgXv9PrjSVRGoXIPI24txGKDSKygCt/P/ADfNY3PqQf0n6UZrMVaarS0idILMeAdpn5Rtbe49seclfYaPEzUrSji33uMWYhJJgT8w8W+njFtWhC9xAtMLc7bER/fg++Aem1GCMhOqYMbCYmL7nB1J3NMtACkGDtJuDCjj1Pr5wjumVXEXW3xFDUDB4FhMxHk33JtYYHUiSGYN40+eDO2G2eahThXDlpjVAZgSDvud1kj9sKkyEsdNVRciHOj1B+YzM8xxhoyTWQSm07c/LkDPUUBSLAEjzewud8aO0zIvtcWmQfP/ABhzW6QgQtrssanPykRMrLi3P1EeiilkahIKg6bkGfm3uu1ok+cOppnarO0kD1MwYjSYkSLe8jzjSOGMgHcgg8+SfG2LipJJAv7g7ckTbn/YYuTL/EGoMiLs7tCDe99z9LnnD3SFVWDdgOqBuBB/6GNCIjT3WtY38A4IqdPamEdGFSmSAKimYJtDgSVO5j+9sEUssVBYWJ1d1o9uYJ8njHOSSO1pvYWGNjBPrb/bGYtq11YgtTLWiQxm312/4xmDcClBjlMwDKADckg8EEwQfH+2LaYWLajyL7SYPrY2v7YCoVj8zAGLegEi0eb7+nGC6dHtVjZCJY382Ft5M29PGM7LU5plIr/kERq1Sfrz9cXvXi69t4O1+Tb0384pfLqrabqwNuSTtM3tYQI5jFteoFYKR3nxeLbGRY397XwHbkBvDKc32s2qSLwoGwM6RuPvvviYCIdSRYHmATttxafW3rg+tWVi0kFjsOCZM22gCB7za2IJlVpqonctM8nUQP8AxsTGxPpjtWCluYnz+XqVLI+iJ9Z23jfxMHi1sct1PoVam8qhYHlZb6k+v0+mO4zbchFLMRpAmSeIBPMg7C+KqmZUqAzaSTz3QCsb8EX9b4tCrKGxKdFSOQyeSqU3JcwpIUkxBb83rpWQSR6ecel/h/OLVyjU3hWoj67EowHncf8AeOfzlWnB3sANrxvF+ZvNvOCMtW0JpDRqhpEXMAiQP6epxn4uLrRT2aaafoUoR7NtcrFXU869RiYKABVKmxn5iJuGHNosQDfAVbOV1C6FBIbTwtxIDQSJi+8/N4EYJ6hVV1Vgz8WUHU1oiTNpI552NgQaVYswlTYkkEaVUWG5aSdre3pi8VfNgS3CFrkLp7S6qWJ3sO47bRBJ9/W5GWdySjXHyEQYB5m/ocC5OqKd/iISSSplSQbAmQbg+Tcx6YupZumpVXgr4uZtqmJDOT9fbCyXRCRdtnk5b8a5TQaZDagVYe2ki08xq4xzSrJ/f2HnHffjmlUenr0BUVtSgEEwe03B9tpFt7W4bJ1tDhvG/tzj0eGlekupnqxtM9a6R1X+ISm1dUpl6QprXWq01CAUIqIFY1GmD3EW384TdY/D1dSVZNEmAzKQr6TcSLAx7xJBjHP0Vaky16BKgEMQImPKeDB4x39H8SrmqP8ACNWy9RoFSk7VKlKGuAgp/DAlVtGrnm+Iu9KV1t/BeL1YZzT5p6WujTCAO8S1o1QAoX0kCbjDLoiDLU0owTJIbb558R3C4i+2Itlnp/B1QajtKoBqKlWAQzsSxuI4jzjT/iUqWYosCJ0nSdX/ANZ5Fp3JwlVOovAt9+rGcpRtdvGEuiOAymXliDdg0GPM3Hr5HsfY+rdIpr/A0UYBm0uQQe2GYkq7AEauy4IECN+PLtJ11KiqSmokkA6QCxIDn8u0g7zjvcr1Rq2XoFiqLSVUUd7ajOqWiBPd9fThuLTlFW6kaLtcnVRVZUnSpuFAM+AAAvPqIscLusvTNZgSrEkWBmNICgSDeAN9pB8YJyXUWqrIsCdJaPQkKgne9z6b84qbpQpXJVWI7tRsR6wD4NpmxvYjGaPhedxauqUfCt+YV06pSDAadUESDBOoXOoTO3pGOgq1NVJ2kBwp1dsWGykXi2xBAMc4SP0o1tJ+IO0QulQoTm6gMBcTqkH7zjKmZdcvVMFmWm2ppZZhSZv83uN53xCS1NWZooQUU1JDykyR+Zm/Spj6aYv++FnVXUkKNUmfmJCgeTqNvb1wRmaiqhDDUQAATpEmYWD72k7bnzgXpo0alqCXYyQg1HyNBUmw9bb4WGMlKrSekDr5w0acqQATABEr7Rp23I3Jm4F8UNVZ6YdAz3AKxpg2IkEyB/aPXDPMZQqflMG/fBmLG4JA3Prvgc0DU1ILg9oBhr7xJME7fbFk0SlDHkCZIszltTUgo1RIIAEBjp33JAHJIHrjVagKjayappr2hALRzqJJ4sTvPgXFmeywphaSyR+bQoAZoIu0EAAWA9SeYxujTqQLkCPIa3KgarW9Iw9+aJQp3w0D9Kh6rIlw6spUhhZZOmNhEWjYjzbF+aq3jUuu8DgRA+nHHvi1dOpLgEH+VbQdtgBHri+rlGXvd1AbugFFHlu4sd78AY5tOVyjp+BKwtUlr9t7mDsf63+wgesZi/4tL81Smo4glv6KPW+Mx2SXhXxAT1v5oiTcyRsZYcf8YJXqDIopPYDxckiRHmAw0z/KcZnciNMyikiBCrVJgkXmRNtxsdxjaIrorCPiBgwlgbkgMJCKLQeLydsHFhpU2tnZkct1Quyz2kR3H0IIYXteZ2OJVEnYmQR5OpJEKI+p+2LaNJDURTO0i4khRAUtxMwT6HG+oUAgnxABEwdiAQDeO4wbHzIOEur4BTvvLqV5jNaAFE61NxFhOnQCT5O5/mxulnTTFObn4YLA7l9b8HjuP3HnA2cqKGeNwvdctuYn6G1vTziXxVLKyLNOB822q7AQYIB1RM8YbSrFJPxYDM1mTqMzrFiTEqRFx/MTEeB+06wkFtEAwYUTEgtPMxcWtA84pBUAORebktIkib2uOBJj08njNWAfuAV9Ucm/aNrEEiLWHGEbsisfMQ5uqkmnckEao8+ByJB2/wAFOazIZx3BgJHaYMAWXQBtYDecFCl8Vy7E6nY6CxDDUFgNptpiSsDkL9Ef4j6YaJUhiVImZvrJPG9hF/fGmmotpcyEqjSbWwRmethAWtfbcEAiQBtHF+fO+E4zrNJ1adV4F7eD/nAwEUZhBE2mfeAB6m4P1xAyONpH2xqjTisIzSquQyo5qNoG+2/1PPGDqXUS8ADSw5mwHJM2E8k78456nUjnj++84sSswAgwL28+TtjpU0wKTOryeZFafiM5Uzq1GRBtA/Tv7b44zPUPh1GSZgkT5HB+og/XDzpPUqhJjuPAILcbqPTe/wDeMUfiQa9FW+o9ryIuPljk2kSd4wtO8J25DybaF2TqjZo9CYwRm6IWHWxnxIngxthZi41zp0naZvxizjm6HjUWjTL2Oh6d+Kq6U/hazURWWoFK/KVOoGYJABgxIFsL8z1LUCdySxO3zPJYgC3P02wZ+Eaq06ju4cgKQApChj6zuPYcnbHXZnI5Osq9o1AT2dguQWMjuaJHdcEgACWBOeVSNOdre5ybmtx1/wD5Z0R8vl3r1Vg14Gkwf9ITEjiST9IxV+Kfw3Ryqq1OPh6tS04BZW3kFj3KDHtYYn+D+qulM5eqIqFUZBNyjaioII7TABi8Tf0U/iD8QrmDpRVZUcpqqUywNl1aRIsCL+LGIvic7ybZdNKOAJM81MwCpQ7ltyT5AA0zMWMc74sFevIZUpn8vaq6jHGoghiQAeNrbY5rP9LdQz/DZdMHt71iQN7FbkESD74Y9CzL1EddUmYPdpHdJGwvBUncAcRthJ00o6lnqLT1N6JNnR0+qmukOx1REMflJmNJUdnsReB5xdm6SuBoZWUjSN2NgC9p2gGY8jjC4VGVQuin2sBqEapnSWLCCxnkxY41mup6TNMj+WVET8gMRIaNc2mALCwxlUM+EpJRgn6dMkqlZ5YAswGqSsiDzpjzPpIFsDnqXw1amCFBMk6YOkwBA/UTO5O0zMYvo5womkAkRA09zO02gMJuYmNvfGstkWpOatc/DYEkQQXJiO1eOACSLRsScVVlv/Zlcm8x35voYhq9vjeNtud4BH77GCLF0ssQpmoo1yEIMELsSZkgm47UMCZNwcU1Ota/kWKd9bs2p2vEeAWJgTq58YkuZAHzBCRNl/KAABBiFgCOQDEbnAd+hSGlvf3CcvkKemwdhf5bW3Nib8Gw/ocCZ2h2HQ2iLEWLkcMHmQNvSMCZjqZiaY1qbTEXmJN+0T4+2Aq1RmMHSGJ4gkXuxM7yQBtJOGjF3uF1YpYX4J5J0S8a42vJLWuG2iPTfFudzBYhI0zc72B2ZouW4AP7Cw2IRZIIgdvJLTHcN7+mBWUAjW5UveDYzMfLyI2PqDcYbDdyfjasM8pmyo0jSiiwkSx9SoUx7m/tjWEdHqmgmGCA7AkcckG4J8RxxMYzBdOXQCduR1a0Q1ArIJT5bCJZlEMTJgArJHmfXCnNUVo0jvZpsST3BiZg9psLHna18OMpYa9BBUtKqJlPlUiDDEQSRvIHkYoz1HS9WqQWXtXT807lpHidgI1E8XIlF2djUo6khf0jOM6yCCyGO/tki6sjfK0ywaYI1jxcjpmcDqZBM2cHdYCyfvx/MdsCtRVnDU0ky0QXkH9IBaABMzEWJ8YMyjOhPxdyCquBYEX7jPcqmPF44GHmk72Ei7y0/wBFtRARoVX16SJUiQTKxqCzIM7Rt7DCjN1GLtoOuHaYcAwDBnhRBAJM3/czp2abXTdSCFcAA2tpIAI5kQfqMTqU9YWXmCNXbdo3B2HdaIECT9OXh3Hk043KqtUhaQMwdwSDIkGQy2sSw2iQZ3jFtGuWEGYVAYNtRsDqJsLyoN422OCazhgAKZW5UCPmIACKB+UEy1uEO5vgfozQ1QaCJDi9u5gpCi2/aft5JwvLYaULbA2UDCQ4sAZ4gKR4HOpfNz6nFH4gyy1UpmndSXDOSQvxRoWCArbgrE+ow3r5yfido0vDqYMgBqaE+hJf7kmOcG9L6YjipQdwVLIy8aaqkGkQNu5i4OxOsDicNGai9RKME04o5qnRVSEdWlNIhhZpNiTvBLUxb18YDOQU09FtS/ni88k+hM7zb6YaVqj0i9MNIsw1CIJK6ViWABfgixkjYkruoVyq/DampNpABBLAxeCAJ3iP2w8L3wQVCMNvcRVemsFdjACwQREEEgSDzvOJtkgFiRJ3kHwLKPeRPMYbZisXNRbaYmYgag6E/sCfTGnqyFLUioXuBWZa5hW1ElzImRHG4NtOuTJypXasxLkxUD6UXU7/AGPO/ItJnaOIOKep5lndpfXfeIBgQCB48TeMPK+ScM9ISK1QTUO+gEj/AEVIAliT3QN4S3dKKnlQ/as6xNuGHlPX0548Yomm7hldKwDi5Kh2AFv5QT94waemsVLTt73gSY9BYTsfbFaUgqNO5G/vsMPqTBGOrcI6fm4O8ystquLX8HYTAw26X1N/iK9ND83J1C1laLC1oBt/Uc/05ASWIkKJ3jwP+fph303N/CfuBjSbXEkEH18iZ/2xGpFZHg9rjX8WdWikVDL8RmRYgFvhU1dCXPBd7wDYKvuVXRM64RnEgB+GIBkd4+YReG+v0wD1PMh2aVJJNid/IneCeQOfG2LsxlVpJSYh9FUMeBMERciwus+x5GFjTShpKOpeVx+MyDRL1JVR2AAlviMQYVDPCm8CAD5jC/IOq6mjSIDX4iTaPcWv8vnCdM2zGSYK7GNgLRY2G/ufc4aUa5tV7FiCNSgBD+r+ZvHN8K6dlYV11c6GlWKBfiGDqJWmCSZIgrPEmBpW4I2xD4k1NSxKHTdo0gkTA2EDmOCPTCWhnRVQ0y4BYjSwBB1C0CdiQSsi3dfGstnAdK03ILI0kAgqSbKTNzaZi998RdIHatu50D9RKVf9MI8hhrV1DjntIYkKCTAji9hGKM5WLi5ZjB1SCCW0wJ2gWBBHrhXnKSUlCuwSowAqaO5gOE0/kYgAuxjaANxg3oTpUazGnTQjmdViRBO+lZaNoG0YDpqK1FJybxz+YK2o6NFJolT8Q3Ah2HaoB3hdIm8yTzgXOO+vdhe5IZSV3aSbnbi0+8Yyr1Fajs6nUST2MZiDaCWvYKJ/tgilmkcKGg/oeDaJhTtPdaYkWjbDWay0LSjq5gma6sqiCvIEaiIjhoF3gDeQJ2tGFFHqLsxvGq7EcxtPoOBi3+IFNyvfEspUEqbCxbeSN7E774Hru2oDUSxUaiTJHMGflMb+MaIQS5CVZOXsNKtWwUMCxAtdoHMmI1cmT/tg3KZSaZFUrbv1rLlWuCCZiCOOZMYByPTmq2IQBhI+I2hqhixQfNAGwHp5w2yvT1p0WqVFCsCASCzBDLAGoQupSWi3kepGJzslZHU273SwLuo5VGIdpEgSVUGWFiTFrgA/fGYbUMnQrAEqG37hqji3zC9+RNvXG8S7VLDbLadWcF1Slp2YkBdQ1cj5SkSfIBk3tvg3M0WZKQpsRKlYNwY3UkGVAkX8czGF4yr1FLNqgIJg7H5YIO5AJafQ8xEwpSmkkuCCdWm5DMVcifmiFn08YmylNKObbm6SHSNEdwAJuDsIkiGAsTp9p4xZ1CuppNTFwsC3CqS/G0tH29cB5GWcovkIDxIIJPiZI9cX5agwJBYqpZjJhjYwmx2BE3gYDWbko3ksbGdNoidRA37RJ7uGaOJLbegweNKKqCWO5aQQBsARu3yn21DAdFgrhQmlhS06mMmE0AX2EHwJkc4j0+HYve0LB5gMdM+O/wDY+RjpZGs8RQfm+xdclZIVKYEGIgsTvHoNyw8YEo0H+avpp1p/0Sx0mr2tpDpErpA7ajAWMXtgjqJJUuk/FHdJmwmdSgC7AQI59zIQFW0jUJ1EktUIaq/6jpiVF2Ftp+YycNCN4lW3Fh9OpUpnS5OqETgxcDc2sf3jfBNLNsSgSIXSdX2Cje4Cgn7e2F//AKgKdOmlXuMQJNw+4YjcjV3Rv48GUml3BtTKAzMpgljJ0i2wFoEmxx2i+6IxtHAZ+IEX4sqNXxdOoTZTMMAbkEtLTezehwor5ZnNVwO6mDUg3YajplYsV1GW2ixjeXfTupNV1grGpVKyAglRAWAZjcER43w06Jl+3W9NUF4olJLapEgAl0kE9rDYiwwnadmrPkBTU20uv9HKdMyavRSoSLs0zJ1GakjuPb2lTHN95nDb4minqWFZrUljYif9Rgbve4DWnSbAHDCr0dKT/D19oEhYA5YFbCCANNzgqstIMR6RuCdMSUgIQRA4YbedxKupPBJVJWs7J7biTp34YqgK/Z8wLVOYJGoltUTAsVJNySVwo6n0cI9TQra2fUWA2DSYUzAXTeTyyjcRjrv4lSFu8sTYyAwkE202kczG9ztiXWFoGiC61EqA6Qwpv3EDUIBU9o1fMLTAvthoVp3yWUIOG5xjUFKpSBHaGaot6jUxaSXACljBss3Mc4RZ/SdJTWxk9umINt/UiDMc+mOh6lVpMpCGFblToZmsIAK6i0ACDa/riHTspSQmppc2sSVgsY+URPyyDA2j1ONcZaVdk39VooTUcs4UM7BSSg0gSQBOkEWVdpgsCSCTJxPNELETqjTDMbg3MBYMD3O+Cs4AxLMbflUAgLNpAgxJteJho3JA6ODDAAjYtUMLYRsBJG/n7Ye98kXZMAoZNnqaCDpBuYjYfKPfYe84ZV8vVqAo9Oov51OkqtraUBswAIjkwNpOLnZbQus9sAKACfSmAbb3J82wZlSrFqNUBGtBXZZ+ZXAsxH2EkG4wJVGsh8kKctkIhXZQZ+SfzCZLQDAHp4ODs3l0eAajCnIYLCy7XltKkssiYBAi2KKqqqvOoaDBsFvCwrLMRJaGDcczYahmqttKn0A+WOZm3+DHZeUShfoM6mXyyqwenUYDukVFQqo40fDZlHMxfzg/oOZy6aqlGi4RAJLEOXcsAgAgG0FyJiE2k4WZ2kfh06iAl0ZrBy0AkRpi/abSByJ9D/8A1apS0U0VTWADOSIVGMEBUW5IBAkWBkecTlmNln3NEHp3HOc6LQc/EqI6kteQQrE6jqbkTczA5mxwv6jSNPS5ULoOwZdzpLRcagVIWSPyXHkvpvV6tSWdDKjUZUqshjIUF4BEFiCDKgi3IvX8urhSp0USrayWEKbNSYGLnSygD+U7C+M6b16ZGpwjKOpIVZzp1KpVapSkKTrZtQ0Ugb2i5vI08/0BzVemUKiYUgoYuCN7zBkR7Xj1bNWpVEFNHhViyAEePiMCBrMCT7GxwhqZcKx1Nvv2gQb8yY5j+nGNMM4fIy1ZSWxlZviMGCywABPsPEmSADvMD2wf0vp2pBoQM2okl7qoAEM8iCZBtcXvO2BsspVWIU6iNIYk25LRybQBtefIJ+Xf/TNOah1nvYESYAldRkUwJM25F8NNu1kTipPc3/GigwKJSZvz1XKmT4UapB95MbDjBdLO/GYmo4OssJEqGdVmNIABTTANt/OFpylNwEKwqGzFje0aZvIO9vBi2LcxQUhaj9o/Sou1yQJuY2km5jCNRfqWS6/t/JfVCqw0i2mCFCspIiHm8yPW1xjMD1eqJRuRqZtyBI9hcbeefpjML2cnyF1RXT9hhlcxV+E2jQCSwBYxuCBo9iRe/OxwXVzIKrJhlJMnumYBCiYAI+GZ/wDlGFeVqLVQUgSlVP8AUUxHxI1BqZNjciBxNsRrqwciBKxte7Atp9baIHqMCUVdhdSpGnFLOMjjp6qG0gsQKR9CZu8Ru3zXnYLtiqt3ahHw3ZgGDOw+XuUsQIbaAIj5dtzQmbp06gVwDqV0DCfmIYeNr/N/bbWVcDS19PwWOoi4Ip1WUG3gyPvhEnuNGV4aVu/jCsuW+IvaGcaLGQCS3J91Yk7b2gYsyegjsERuZIDMdosIkKDzYC2+B6rqiVohAXChm4CC5Km/yNpjksZjGZjqGhEDj5lDJ3EklvlMgXJEkniRwIwFG+xahheLoEZ9Wc9r6XUEhWAKkgxqI9J2JsZMY5tlf+J1VCtkXVfYaUDEE7GWm/ri2v1WqCCi31ABSuqfzAKJ1XI8exvdjlOmBg2azKmoQSNBbtHcV0CbMBvOw0nfi8V2ayGTU3j/AID1VRtDt3L+UKJJIEEjjTuNv98Ek/CT4kEF9RVifySBJj0Kje5PjBXVjUp2X82in2oFBQgNqUReZ2Hy6o3klXm6xK/DZtQUqAoYGwOoywN7CLWB2xP6kiE03J+X3Z1n4eytRUNQvSLKom8FRBIJ339Qu8gyMMcxUUinUZYABYagb3KmbQSWE+YO+OUr9UaoaX+qYOqAezTamIAkcyBPjycPPxJVIFNWmGpDiYGo+m4GkfWOcY6lN6lfdl4zjCDfJEVrmoSC4BZCQAVVgNnAjiOd5H1wgyubNRXhmQadJCQ1gGZhJnYKwgeb2JGLyhXTW0wAw09pPAubbfLew7fW5GcrU5eoSEVgpUKBZWpkiZibVIJt8scYtBJbGFNSWqXy4FXzLFHCtAAmWgmVmSsQf6esWnee621dQvylFC2aGZSO2w4neBG4ngJsySe0GEB+Q/6aybmxLAbAX/fE8rWQMYCkamjtJgxLSxAAG3ECBwIxfs0lcrTlFYRRWWmWU9xFJdLcAsJ53mTHGwxdVrdh0BtR2X5RCC8+DJJJ3uPqNnupagGUFoJUFpaymQ15BMXmLWE2wuzOZZiy62iPlNha+wO/t/1ZQb3DKVthjm6g0FmmZBI4kgX1RBgtYRsTgWlUV31NICiFWIkm2/13wPlzIa0wBbcWIsT7eOMHZDLXD1GCjcC3Fw0cAb/bDNKKZlutTk+Q36UoFPuVmrAxoUiR7HhhIBAtAvuThg+RouS0rShYeTbWBJZ9ItO5i254JwBTzNQnXC06Zgy1i09xLGRG8xERPoCK7HW41GnDaSumV1LIbSRuN9x/TGezbb2NUWox8Sv/AAWZijX+LUB0hWsXU9gEBoB1REGZ978YE+MynTRUtEyYMmJLECNo9MHZPMGjKaD8F1gkQ+oX1MHusgbAyPOBkD0KposQxlRpgDcWbYzMgi4ifph074+M5aW8P3Cul50OB8um4JFoXtYodhuN4sYM4hXfU2hVco0uQtMOagYgGpJIDGSdgNMe+AM4xSShZ1+J88fM1jDsB3N5+/s8zlSkEQEwytqphYLKlSHcH1ClVHELPurVndcxlDVdt4RrKPVCKhAUMVrKwVFUHYU3VYDLEkgQRvjXXqT1AtMiBOogkWJUciQ5HmSAIvOK8xWlAZKyZpqCG0qZkehsp2+gjFGY6gwYB/mIBGvtDDgbbc2EHzMYmtV7o51vDoW7KkqU6C6EBLbkjk+p/tjS6jTJVAHJBA97LJO5Nz7LI4myrkhJepC3HZqJmJgCROkciY44wIc5o1FASxmWmAJ/mjxwPbFIq+VliKDWZsqojTL1GBi2neDuVm8k2EevAwxXOt8M6JUagdCEeStzvMhtuQPN1+RpK7GCC4uqqdN+Qp/fjBNbNpSUSIbhVN7yb8xM4eeXbmDVbKGNKiAJqMIDGNVy7EKJJAkAREcDABzKMGcl3vsO2w2gbkb+MIa+eNVyTaRAAMAeLX8YtymecIYqRALAR5sw1Rz2+l8MqLWWByTWnkPOnVKZQj4S2YxqUtbf8+rk397c4zA+RFTURTAbtkxG9psCAIMixI8Y3hHvv9y0Y42+w4zPRyql6LIXYHXCnXNgVopyCd4N5iYsReoEuV0EozMt4I0nUihjAMaRC/QecWVctSLBmUkAaTDqFO/53gHiyKDMQdsWZ9C5WoH1EQAl7iwlmqNqNuVncWwq5XLSp3Tt+wAHKOKLFA9MmWXUQWBjZoNjAsADfffBtCozBNYOrvU2FxBg2sfnJ9Ji0Yoz+l2LvR0VJ0MZZSDETqEh7RHaL+DEiL1P4clwdTKyjaxCrJ+vaPofOOcdSskZVHTUavhrAH1jPfFYhjI1ggAn80uJgb95Fp2OGdXNFQPirDpR+GAsdqswC24bSxAn9B84TZDJr8MO7QCWICNJACsO5YIuYF7wT5wRmK7CqLFUfSQwB7lIBYiLHc/fjFnFLwrkBTkr2KasU6rKiQQF03JjUs8eh5+uOp6hmXShVmFWaNMKBIRdAeACTMqQs+QTjl800s0iyCAb7K7eLjcmcdd1bLLARgImybTClKYniSBHA34xKq8xv82K8PBtP5uc1mKr1KJqAaWRjJn5k7UFpncnFuVpdsv8xUaX3Ot0YjUDv3Uh9DEYg+XqKpZqYUPIIJsIVSpkn+WQsmBio0XahSWdTVa1SoSCDtpQGOe41Dbg4ruvcm14jqK5XSaX/tZeg5ZWgq2gxB2YXprf9RNyBg7o2dNZUUqSKhNI8AVFTXS57WfuFuZxz2VVauZzYZtIam1IeCyKCPt8Jj42wb046qLujkALTrIV/VR1awqGLgTB2mPbGWpBfx9zTB3k0tl+Bb0/qfwhV+eYZgzMFMyFiSSflJ8yTGDMtnQwqSTCIFXn5lZh7iP2tgL8VZlUrVD8Pub5WqwzKGAqRTTZQpJXXf0vfAGTzDBKdQtZyittJKmos+sKVn3xXslJauplqvTJRXLADmg1yzGQxUnVNuzY+tz9RgRa1i2o6/QbbXB4Mx45wSV1oFsGliJO+kTE+bwPPvhYRuDv/TGyKwQg3bIW1RXEvY37gLEjiBt7jk3xbl8tqT5bloBE/LGpz9O0T/Md8UMZRRF1JkjchoI+oIP3GG3Tq51LTUaSWVIBBADTMsT8159IHjAk7LBVZA6lYKSFksxLGBYbmw9BPFsM+nUwe9xpmCSxkNyFFrb7HxviWa6bpam5TT8Snt4KlqbCNySRq+uKusZjSFWZYDsRSCFHLM35ifS2/EYi3qskJ2V7p+/mXZjqas8VCGUd2lTqA20iDpi1iRP1wdW6YmYX4lByKiIGKs1oMxpi5J8X8bkDHMUX19haZvf5SQDAJ/abYIy1VU7RJaCCG7QAeAx3E8QMdKnb6cMrBLmF5BWWtSFQ9vxEO82Bn8sgb/0wZ1fqhZ3Sois9gCoAOk97CQCD8x8QSY9ael0A7OkQwGoFN53kj82zWH9YxPPdGZX1rdXYGYkqp3IH5xsZAn98I3HVkeNNqLt1Mz2Yeqg0imqkQy6AphQFUkRBMbML+u+BMtUQCJYTIZyfyxGiPWDfxi2oh1PUUgkEB4iWOxIG29jb8wvfBVHIU1qCUkMW2cDQbTMneCDAJIHjHXSVguEnnmW5NSzzUMKT+rTB2uYJg8nGHKy2swpF9RjUotEnmLXv++Iuh1U1dmIVhoESSjQfMKTp2tEzxhzUyRKrrfQWmGF9BUSt+ZXVJ9GIjGeUtLXmUjS3SBD034i6AKaCAylwTrPLMwkjebiwPEnCXqXQMwhhykkjSQ4I52AMgRyVw6yeaddVIopcEqWgEaNiSpnmZuR49YZmg9RNKKFqLKaGA2idJJHaCJIO3sNnpzlFnOnCaut/mBCaRoEBUZnm7FTC/Xk4iM2tfsrAK/5X2ni/g+uxwdWytYUS51KQIdJNwDCtBtMAX8HCrJ9Wp02JbL0q0x8+scQflYTjTFaldZfUhKCi7FFfItSPcJEiGmB9R/b98Ry6uxbSfcgbAbXOwsLcwMOqv4gRghFGhTVWg00VpjcHvZg6+nGDa/X8wjGtQNNUYQy0qaqDHJWI1fvhtUtmgJRW7EeVyr1BpQmfmMIx9LaRttPrjMZV6vXNxULaiWgmIJ3gWAv49MZjrS8jrxOo63kEFc06mqo5AOtmhQBqIVUWCAI5Y4XZzMl2cH5dbqq/lAS4kCNWx388gRjeMxnhsvQ1VsfuMxqNRqcgL20x2ixP5o2O20fXCenTHxjTIBnSFa4KM8EMt7xpWxkG+02zGYEN36Aq/wCospKNKkCBURmK8Bg2mR6TePpfF3VM02tUMEIpVbbD4a/3vjMZjR/t+5j21eiNdOQNWp8B6kMPKuwVl+xI+uOi6pUIrPUkyiU4BJiSrmbR+k++r6HMZiNT6vb8m2j9L+cmULXNTLMjXCZqmFm5AqLVDCTc7czgj8I0B/8Aik3mnUO201gtvpP3xvGYnP6H6/hiU81EzmaOfK1g8SPjFiJ3lhImORbbnDT4xy706dIlf/xtZaQSS6moOLaZge043jMaGkSoPHuyP4gc1Eytd4L1svVDQIHZrCGPIAUf+Iwjy9QiieQlQMB6kX//AIGNYzBh9Pv+WTr/AFfsaqgKTI1AFjEx+ZRY8WGKM65LEH8oAmBJAsJ8kDnfGYzFoiLZ+pvKDtdv0pb3Jif3wc1DVQo1ZIY1HQx4AUqR4Ikj7eMZjMK9/f8AAYczses5YfCqJwPh1LWs6k1E9FYqDbn7Y88aqXYk+/8AQQPAiB9MZjMR4bZmjiFZorQkyJtGGeaqlhSRoJCiGiDpJ0hW/VEWO944EZjMXe5KOwd0ktTalVViGFT4Ri0rAN8O6lfQ1ShE07sqnZGB0kr4BLTHG2xOMxmMlXLNcPoYsys6mEm0wTc22k84rpsVYKTqUsDB8kESTuT643jMHr6EoslRp/DUMp7hDA83IP198NcjmWNWnrIYGkGIiASTpv5MHfG8ZiNTKZWO6KM11EtVVQqqVVULbllcBYPsDY++04hTzJ05d/zlHTVz2NIO25kA+3rjMZh7JJfOQ6eSz8QEoqhTABVx7MSpT1ErInbbjHJ5vLgsT5ON4zFeH+khxX1kqfSwR8x+2G/4eoqFLHUSSQRqt9oxvGYaq3pZibsF1un0xeDe8Ax/TfGYzGYz6mVZ/9k=" />
                         
          </div>
          
        </div>
        
        

    </Box>
    </>
  );
};

export default CropRecommendationHomeView;

