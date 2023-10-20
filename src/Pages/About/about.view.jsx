//built in modules
import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: { duration: 0.3, type: "spring", stiffness: 100 },
  },
  visible: {
    opacity: 1,
    x: "0",
  },
  hover: {
    scale: 1.1,
    originX: 0,
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1, duration: 0.8 },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 100,
    },
  },
};
const useStyles = makeStyles(theme=>({
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
  curved:{
    borderRadius:"0 0 1rem 1rem",
  }
}))

const AboutView = () => {
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
      <div style={{color:"white",display:"flex",flexDirection:"column",placeItems:"center",paddingTop:"1.4rem",textAlign:"center"}}>
          <Typography variant="h5" component="h5" style={{fontWeight:700}}>
            MISSION, VISION AND VALUES
          </Typography>
          <div style={{width:"400px",backgroundColor:"#12330b",marginTop:"2rem",padding:"2rem"}}>
            <Typography variant="h5" component="h5" style={{fontWeight:700}}>
              OUR MISSION
            </Typography>
            <Typography variant="p" component="p" className={classes.paragraph}>
            <b>Our Mission</b> is to transform the agriculture business by providing cutting-edge crop recommendation services that harness
            the most recent technological, data analysis, and machine learning developments. We want to assist farmers make more 
            educated crop decisions, increase yields, minimize waste, and improve sustainability. And is to provide farmers with 
            precise and tailored crop suggestions using innovative technology and data analytics. We hope to assist farmers raise crop yields,
            cut input costs, and promote sustainable farming practices by leveraging the power of machine learning and agronomic expertise.
            </Typography>
          </div>
          <div style={{width:"400px",backgroundColor:"#70756f",marginTop:"2rem",padding:"2rem"}}>
            <Typography variant="h5" component="h5" style={{fontWeight:700}}>
              OUR VISION
            </Typography>
            <Typography variant="p" component="p" className={classes.paragraph}>
              <b>Our Vision</b> is for every farmer to have access to individualized, data-driven crop recommendations that are suited to their own 
              requirements and circumstances. We foresee a future in which precision agriculture is the norm and farmers are empowered to make 
              the best decisions possible for their crops, land, and communities. We think that by using our application , we can help create a 
              more sustainable, equitable, and successful agriculture sector for future generations. And aims to transform crop decision-making 
              by providing farmers with the knowledge and tools they need to optimize crop yield, increase profitability, and promote a more 
              sustainable and resilient food system.
            </Typography>
          </div>
          <div style={{width:"400px",backgroundColor:"#12330b",marginTop:"2rem",padding:"2rem"}}>
            <Typography variant="h5" component="h5" style={{fontWeight:700}}>
              OUR VALUES
            </Typography>
            <Typography variant="p" component="p" className={classes.paragraph}>
            <b>Innovatron Industries</b> was formed last 2022 as an original team of 4 members. Another member has 
                      since joined in the early part of the year. Tackling and understanding machine learning, we take on Farm Analytica, 
                      our first project that caters to land owners in order to help their endeavors in empowering farmers with useful data and 
                      for the pursuit of efficient farming. Farm Analytica marks the first time that our team will be creating both web and mobile applications. 
                      As we navigate the technological landscape with these developments, we hope that this application can help our target audience achieve their goals. 
                      With us at the development process, we know that our app can help Philippine farming as it improves and adapts in the future.
            </Typography>
          </div>
          <hr className={classes.line} />
          <Typography variant="h5" component="h5" style={{fontWeight:700}}>
            MEET THE TEAM
          </Typography>
          <div style={{padding:"2rem",display:"flex",flexDirection:"column", gap:50}}>
            <img src="./team1.png" alt="pamela" width="300px" height="350px" className={classes.curved}/>
            <img src="./team2.png" alt="crag" width="300px" height="350px" className={classes.curved}/>
            <img src="./team3.png" alt="jermiah" width="300px" height="350px" className={classes.curved}/>
            <img src="./team4.png" alt="Eisen" width="300px" height="350px" className={classes.curved}/>
            <img src="./team5.png" alt="Andrei" width="300px" height="350px" className={classes.curved}/>
          </div>
          <hr className={classes.line} />
          <div style={{marginTop:"2rem",width:"400px"}}>
            <Typography variant="h5" component="h5" style={{fontWeight:700}}>
              WHO ARE WE 
            </Typography>
            <Typography variant="p" component="p" className={classes.paragraph}>
              <b>Innovatron Industries</b> was formed last 2022 as an original team of 4 members. Another member has 
              since joined in the early part of the year. Tackling and understanding machine learning, we take on Farm Analytica, 
              our first project that caters to land owners in order to help their endeavors in empowering farmers with useful data and 
              for the pursuit of efficient farming. Farm Analytica marks the first time that our team will be creating both web and mobile applications. 
              As we navigate the technological landscape with these developments, we hope that this application can help our target audience achieve their goals. 
              With us at the development process, we know that our app can help Philippine farming as it improves and adapts in the future.
              </Typography>
          </div>
          <hr className={classes.line} />
          <div style={{marginTop:"2rem",width:"400px"}}>
            <Typography variant="h5" component="h5" style={{fontWeight:700}}>
              CONTACT US THROUGH
            </Typography>
            <div style={{backgroundColor:"white",padding:"1rem", display:"flex",marginBottom:"1rem",marginTop:"2rem", color:"black", borderRadius:"1rem",gap:50}}>
              <div>
                <EmailIcon fontSize="large" style={{color:"#12330b"}}/>
              </div>
              <div style={{display:"flex",flexDirection:"column",textAlign:"start"}}>
                  <Typography variant="h6" component="h6" style={{fontWeight:600}}>
                    Email
                  </Typography>

                  <Typography variant="p" component="p">
                    theinnovatrionindustries@gmail.com
                  </Typography>

              </div>
            </div>
            <div style={{backgroundColor:"white", display:"flex", color:"black",padding:"1rem",marginBottom:"2rem",borderRadius:"1rem",gap:50}}>
              <div>
                <CallIcon fontSize="large" style={{color:"#12330b"}}/>
              </div>
              <div style={{display:"flex",flexDirection:"column",textAlign:"start"}}>
                  <Typography variant="h6" component="h6" style={{fontWeight:600}}>
                    Phone
                  </Typography>

                  <Typography variant="p" component="p">
                    +63 9190675619
                  </Typography>

              </div>
            </div>
          </div>
          
      </div>
    </Box>
      {/* <div style={{ backgroundImage: "linear-gradient(rgba(65,25,25,0.2),rgba(25,25,25,0.9)),url(aboutbg.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", height: "100%"}}>
        <motion.h4 variants={titleVariants} initial="hidden" animate="visible" style={{ color: 'white' }}>
          ABOUT US
        </motion.h4>
        <Box ml={matches && 4}>
          <Grid container alignItems="center" style={{ color: 'white' }}>
            {matches && (
              <Grid item xs={12} md={6} style={{ padding: "0 0 0 80px"}}>
                <Box py={3}>
                  <Typography
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "5px", marginLeft: "16px" }}>
                      <b>Our Mission</b> is to transform the agriculture business by providing cutting-edge crop recommendation services that harness
                      the most recent technological, data analysis, and machine learning developments. We want to assist farmers make more 
                      educated crop decisions, increase yields, minimize waste, and improve sustainability. And is to provide farmers with 
                      precise and tailored crop suggestions using innovative technology and data analytics. We hope to assist farmers raise crop yields,
                      cut input costs, and promote sustainable farming practices by leveraging the power of machine learning and agronomic expertise.
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "5px", marginLeft: "16px" }}>
                      <b>Our Vision</b> is for every farmer to have access to individualized, data-driven crop recommendations that are suited to their own 
                      requirements and circumstances. We foresee a future in which precision agriculture is the norm and farmers are empowered to make 
                      the best decisions possible for their crops, land, and communities. We think that by using our application , we can help create a 
                      more sustainable, equitable, and successful agriculture sector for future generations. And aims to transform crop decision-making 
                      by providing farmers with the knowledge and tools they need to optimize crop yield, increase profitability, and promote a more 
                      sustainable and resilient food system.
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "5px", marginLeft: "16px" }}>
                      <b>Respect:</b> We value everyone and treat people with dignity and professionalism.<br></br>
                      <b>Teamwork:</b> We achieve more when we collaborate and all work together.<br></br>
                      <b>Integrity:</b> We build trust through responsible actions and honest relationships.<br></br>
                      <b>Accountability:</b> Each of us is responsible for our words, our actions, and our results.<br></br>
                      </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      ❖
                      <p style={{ marginTop: "5px", marginLeft: "16px" }}>
                      <b>Innovatron Industries</b> was formed last 2022 as an original team of 4 members. Another member has 
                      since joined in the early part of the year. Tackling and understanding machine learning, we take on Farm Analytica, 
                      our first project that caters to land owners in order to help their endeavors in empowering farmers with useful data and 
                      for the pursuit of efficient farming. Farm Analytica marks the first time that our team will be creating both web and mobile applications. 
                      As we navigate the technological landscape with these developments, we hope that this application can help our target audience achieve their goals. 
                      With us at the development process, we know that our app can help Philippine farming as it improves and adapts in the future.
                      </p>
                    </div>
                  </Typography>
                </Box>

                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  style={{ width: "200px", height: "40px", margin: "auto" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/profile")}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "2px solid #eee",
                    }}
                  >
                    VIEW PROFILE
                  </Button>
                </motion.div>
              </Grid>
            )}
            <Box>
            <Grid item xs={12} md={6}>
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                src="team.png"
                alt="crops"
                style={{
                  width: matches ? "920px" : "670px",
                  height: matches ? "300px" : "215px",
                  border: "none",
                  margin: "-145px 0 0 5px",
                  boxShadow: "rgba(1, 1, 1, 0.2) 0px 20px 30px",
                  cursor: "grab",
                }}
              />
              
              {!matches && (
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/profile")}
                    style={{ margin: "30px" }}
                  >
                    VIEW PROFILE
                  </Button>
                </motion.div>
              )}
            </Grid>
            </Box>
          </Grid>
        </Box>
      </div> */}
    </>
  );
};

export default AboutView;
