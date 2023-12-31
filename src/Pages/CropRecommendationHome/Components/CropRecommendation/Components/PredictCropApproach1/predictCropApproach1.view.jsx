//built in modules
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Typography,
  Button,
  Box,
  CircularProgress,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const PredictCropView = ({
  page,
  location,
  locationval,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
  handleLocationvalChange,
  showspinner,
  setShowSpinner,
  handlePredictCrop,
  handleProgressChange,
}) => {
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("sm"));
  const matchesforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));

  return (
    <>
      <div style={{ height: matchesforxl ? "80%" : "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: matches ? "flex-end" : "center",
            padding: "30px",
            marginTop: !matches && "60px",
          }}
        >
          <div
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
              width: "300px",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              height: "10%",
              padding: "20px",
              marginTop: matches && !matchesforxl && "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography style={{ fontSize: "0.95em", color: "white"}}>LOCATION</Typography>
              <Typography style={{ fontSize: "0.95em", color: "white" }}>
                {locationval.toUpperCase()}
              </Typography>
            </div>
            <Box mt={2} >
              <Button
                style={{color: "white", fontWeight: 700}}
                variant="outlined"
                color="secondary"
                onClick={() => {
                  handlePageChange(2);
                  handleProgressChange(0);
                }}
              >
                CHANGE LOCATION
              </Button>
            </Box>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "56%",
          }}
        >
          <>
            <motion.div
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Typography
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  margin: "10px",
                  padding: "15px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> RAINFALL </Typography>
                <Typography style={{ textAlign: "right" }}>
                  <CountUp
                    end={envfactors.rainfall}
                    duration={5}
                    decimals={3}
                  />
                  {" mm"}
                </Typography>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Typography
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  margin: "10px",
                  padding: "15px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> TEMPERATURE </Typography>
                <Typography style={{ textAlign: "right" }}>
                  <CountUp
                    end={envfactors.temperature}
                    duration={5}
                    decimals={3}
                  />
                  {" ºC"}
                </Typography>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Typography
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  margin: "10px",
                  padding: "15px",
                  width: "300px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> HUMIDITY </Typography>
                <Typography style={{ textAlign: "right" }}>
                  <CountUp
                    end={envfactors.humidity}
                    duration={5}
                    decimals={3}
                  />{" "}
                  g.kg<sup>-1</sup>
                </Typography>
              </Typography>
            </motion.div>

            {crop ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Typography
                  style={{
                    boxShadow:
                      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                    margin: "10px",
                    padding: "15px",
                    width: "300px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography> CROP </Typography>
                  <Typography style={{ textAlign: "right" }}>
                    {crop.toUpperCase()}
                  </Typography>
                </Typography>
              </motion.div>
            ) : (
              envfactors.temperature &&
              envfactors.humidity &&
              envfactors.rainfall &&
              (showspinner ? (
                <Typography style={{ marginTop: "20px" }}>
                  <CircularProgress />
                </Typography>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 5.3,
                      duration: 0.7,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        setShowSpinner(true);
                        setTimeout(handlePredictCrop, 2000);
                      }}
                      style={{ marginTop: "20px" }}
                    >
                      PREDICT CROP
                    </Button>
                  </motion.div>
                </>
              ))
            )}
            {crop && (
              <motion.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.5,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    yoyo: Infinity,
                  },
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginTop: "20px", width: "300px" }}
                  onClick={handleNpkClick}
                >
                  PREDICT NPK
                </Button>
              </motion.div>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default PredictCropView;
