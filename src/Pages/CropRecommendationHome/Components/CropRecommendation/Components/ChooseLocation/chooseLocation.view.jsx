//built in modules
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { motion } from "framer-motion";
import {
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

//common components
import Dropdown from "../../../../../../Components/Dropdown";

const ChooseLocationView = ({
  page,
  location,
  locationval,
  disablebutton,
  handlePageChange,
  envfactors,
  handleCropChange,
  crop,
  handleLocationChange,
  handleNpkClick,
  handleEnvFactorsChange,
  handleLocationvalChange,
  allstates,
  alldistricts,
  handleStatesAPI,
  handleDistrictsAPI,
  chosenstate,
  handleStateChange,
  setChosenState,
  approach,
  handleWeatherUpdate,
}) => {
  const mediatheme2 = useTheme();
  const matches = useMediaQuery(mediatheme2.breakpoints.up("sm"));
  const matchesforxl = useMediaQuery(mediatheme2.breakpoints.up("lg"));

  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: matchesforxl ? "80%" : "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box pb={3}>
          <Typography style={{ textAlign: "right"}}>
            CHOOSE LOCATION
          </Typography>
        </Box>
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="location"
                  checked={location === 1}
                  disabled={
                    userDetails && !userDetails["state_name"] &&
                    !userDetails["district_name"] &&
                    true
                  }
                  onChange={() => {
                    setChosenState("");
                    handleLocationChange(1);
                  }}
                />
              }
              label="Use Location in Profile"
            />
            {userDetails && !userDetails["state_name"] && !userDetails["district_name"] && (
              <Link to="/profile">Update profile to enable this option</Link>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="location"
                  checked={location === 2}
                  onChange={() => {
                    setChosenState("");
                    handleLocationChange(2);
                    handleStatesAPI();
                  }}
                />
              }
              label="Choose Location Manually"
            />
            {location === 2 && (
              <Box mt={4}>
                <FormControl
                  style={{ width: matches ? "700px" : "300px" }}
                  variant="outlined"
                  size="small"
                >
                  <FormGroup style={{ color: 'white' }}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: !matches && "column",
                        gap: !matches && "20px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box style={{ width: "300px"}}>
                        <Dropdown
                          label="Province"
                          options={allstates}
                          value={chosenstate}
                          handleChange={handleStateChange}
                          id="state_name"
                          name="state_name"
                        />
                      </Box>
                      <Box style={{ width: "300px"}}>
                        <Dropdown
                          label="Municipality" 
                          value={locationval}
                          handleChange={handleLocationvalChange}
                          options={alldistricts}
                          id="district_name"
                          name="district_name"
                        />
                      </Box>
                    </Box>
                  </FormGroup>
                </FormControl>
              </Box>
            )}
          </FormGroup>
        </FormControl>
        {((location === 0 && locationval) ||
          location === 1 ||
          (location === 2 && locationval)) && (
          <Box pt={4}>
            <Box pb={2}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Typography>
                  FARMER LOCATION - {locationval}
                </Typography>
              </motion.div>
            </Box>
            <motion.div
              style={{ textAlign: "center" }}
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                transition: {
                  yoyo: Infinity,
                },
              }}
            >
              <Button
                onClick={() => {
                  handleWeatherUpdate();
                  if (approach === 1) handlePageChange(3);
                  else handlePageChange(6);
                }}
                color="primary"
                variant="contained"
                disabled={disablebutton}
              >
                NEXT
              </Button>
            </motion.div>
          </Box>
        )}
      </div>
    </>
  );
};


export default ChooseLocationView;
