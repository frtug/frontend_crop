//built in modules
import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import {
  Grid,
  FormControl,
  InputLabel,
  InputAdornment,
  Box,
  Input,
  Button,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import PersonIcon from "@material-ui/icons/Person";
import LandscapeIcon from "@material-ui/icons/Landscape";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";

//component files
import EditProfile from "./components/EditProfile";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
    marginBottom: "10px",
  },
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
    height:"50vh",
    alignContent: "center", /* Set align-content property */
    backgroundImage: "linear-gradient(rgba(25,45,25,0.5),rgba(25,35,25,0.5)),url(aboutbg.jpg)",
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
    marginTop:"1rem",
    fontStyle:"italic",
  },
  line:{
    color:"white",
    width:"70%",
    height:"3px",
    backgroundColor:"white",
    marginTop:"3rem",
  },
  whitePaper: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the alpha value (0.5 for 50% transparency)
    padding:"0.5rem",
    borderRadius:"3px",
    color:"black"
  },
  whiteInk:{
    color:'rgba(255, 255, 255)',
    textAlign:"start"
  },
}));

const ProfileView = ({
  profiledetails,
  handleChange,
  editprofile,
  handleEditProfile,
}) => {
  const classes = useStyles();
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  return (
    <>
      {!editprofile ? (
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
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",alignContent:"start"}}>
          <img
          src="falogo.png"
          alt="logo header"
          style={{ width:"90%", maxWidth:"600px",  marginTop: "1rem" }}

          />
          <img
          src="farmanalyticalogo.png"
          alt="logo header"
          style={{ width:"70px"}}

          />
        </div>
        <div style={{marginTop:"1rem",color:"white"}}>
        
          <Typography variant="h4" component="h4" className={classes.textCentered }  >
            About Us
          </Typography> 
        </div>
          
      </Box>
      <hr className={classes.line} />
      <Box p={2} style={{ textAlign: "right" }}>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                handleEditProfile(true);
              }}
            >
              Edit Profile
            </Button>
        </Box>
      <div style={{color:"white",display:"flex",flexDirection:"column",placeItems:"center",paddingTop:"1.4rem",textAlign:"center"}}>
          <Typography variant="h5" component="h5" style={{fontWeight:700}}>
            MISSION, VISION AND VALUES
          </Typography>
      </div>
            <Box p={1}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Full Name
                  </Typography>
                  <FormControl style={{ width: "100%" }}>
                    <Input
                      id="full_name"
                      name="full_name"
                      readOnly
                      className={classes.whitePaper}
                      value={profiledetails["full_name"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <PersonIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }s
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Mobile
                  </Typography>
                  <FormControl style={{ width: "100%" }}>
                    <Input
                      id="mobile"
                      name="mobile"
                      readOnly
                      className={classes.whitePaper}
                      value={profiledetails["mobile"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <PhoneAndroidIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                {userDetails && !userDetails.profileUrl && (
                  <>
                    <Grid item xs={12} md={6}>
                    <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Username
                  </Typography>
                      <FormControl style={{ width: "100%" }}>
                        <Input
                          id="username"
                          name="username"
                          readOnly
                          className={classes.whitePaper}
                          value={profiledetails["username"]}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <AccountCircleIcon style={{ color: "#777" }} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                  </>
                )}
                <Grid item xs={12} md={6}>
                <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Province
                  </Typography>
                  <FormControl style={{ width: "100%" }}>
                    <Input
                      id="state_name"
                      name="state_name"
                      readOnly
                      className={classes.whitePaper}
                      value={profiledetails["state_name"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <LocationOnIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Municipality
                  </Typography>
                  <FormControl style={{ width: "100%" }}>
                    <Input
                      id="district_name"
                      name="district_name"
                      readOnly
                      className={classes.whitePaper}
                      value={profiledetails["district_name"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <LocationCityIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Area
                  </Typography>
                  <FormControl style={{ width: "100%" }}>
                    <Input
                      id="area"
                      name="area"
                      readOnly
                      className={classes.whitePaper}
                      value={
                        profiledetails["area"] ? profiledetails["area"] : ""
                      }
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <LandscapeIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                <Typography className={classes.whiteInk} variant="h6" component="h6">
                  Soil Type
                  </Typography>
                  <FormControl style={{ width: "100%" }}>
                    <Input
                      id="soil_type"
                      name="soil_type"
                      readOnly
                      className={classes.whitePaper}
                      value={profiledetails["soil_type"]}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <LocalFloristIcon style={{ color: "#777" }} />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            </Box>

        </>
      ) : (
        <EditProfile
          profiledetails={profiledetails}
          handleChange={handleChange}
          handleEditProfile={handleEditProfile}
        />
      )}
    </>
  );
};

export default ProfileView;
