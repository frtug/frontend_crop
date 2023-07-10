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
import { useTheme } from "@material-ui/core/styles";


//framer motion constants
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

const CropRecommendationHomeView = () => {
  const mediatheme = useTheme();
  const matches = useMediaQuery(mediatheme.breakpoints.up("md"));
  const history = useHistory();
  return (
    <>
      <div style={{ backgroundImage: "linear-gradient(rgba(25,45,25,0.5),rgba(25,35,25,0.5)),url(mainbg.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", height: "100%" }}>
      <img
        variants={titleVariants}
        src="falogo.png"
        alt="FarmAnalyticaLogo"
        style={{ width: "600px", height: "155px", marginTop: "40px" }}
      />
        <Box ml={matches && 4} style={{marginTop: "80px"}}>
          <Grid container alignItems="center">
            {matches && (
              <Grid item xs={12} md={6} style={{ padding: "0 0 0 70px" }}>
                <Box py={3}>
                  <Typography
                    style={{
                      color: "white",
                      textAlign: "justify",
                    }}
                  >
                    In the Philippines, agriculture is a vital sector that supports the 
                    economy and provides employment opportunities. Many farmers face 
                    challenges in choosing the right crops for their soil, leading to
                    lower productivity. To address this, we propose a system that uses 
                    machine learning to suggest suitable crops based on soil analysis. 
                    By providing this information, the system helps inexperienced farmers
                    make informed decisions and improve their productivity. This approach,
                    known as precision agriculture, optimizes crop selection and contributes 
                    to the sustainable development of the Philippine agricultural sector.
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
                    onClick={() => history.push("/cropRecommendation")}
                    style={{
                      border: "2px solid white",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    PREDICT NOW
                  </Button>
                </motion.div>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <motion.img
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                src="Farmer.png"
                alt="crops"
                style={{
                  width: matches ? "700px" : "450px",
                  height: matches ? "450px" : "365px",
                  border: "2px solid white",
                  boxShadow: "rgba(1, 1, 1, 0.2) 0px 20px 30px",
                  cursor: "grab"
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
                    onClick={() => history.push("/cropRecommendation")}
                    style={{ margin: "30px" }}
                  >
                    CHOOSE CROP
                  </Button>
                </motion.div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default CropRecommendationHomeView;