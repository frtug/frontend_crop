import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { motion } from "framer-motion";
import './scheduler.css'; // Import custom CSS file
import {MyDatePicker} from '../../Components/DatePicker/date'
import Dropdown from '../../Components/Dropdown';
import {images} from '../../utils/constants'
import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { setScheduler } from '../../utils/requests';
import { addFailureAlert, addSuccessAlert } from '../../redux/ActionCreators/alert.action';
import { useDispatch } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
// const GOOGLE_CLIENT_SECRET = 'YOUR_GOOGLE_CLIENT_SECRET';
// const CALENDAR_ID = 'primary';

const EventScheduler = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);   
  const allCrops  = images.map((item)=> item.crop);
  const [email,setEmail] = useState("")
  const [data,setData] = useState();
  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    let filteredData = images.filter((element) => element.crop === event.target.value);
    setData(filteredData[0])
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDetails = (e)=>{
    setEmail(e.target.value)
  }

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


  const handleScheduleEvent = () => {
    const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    
    const sendedData = {
        data,
        date: formattedDate,
        email
    }
    console.log(sendedData)

    setScheduler(sendedData).then((res) =>{
        dispatch(addSuccessAlert(res.message));
    })
    .catch((error) => {
        dispatch(addFailureAlert(error?.response?.data?.message))
    })
    

  }
  return (
    <div className="container">
    <motion.h1 variants={titleVariants} initial="hidden" animate="visible" className="title">
      Create Your Schedule
    </motion.h1>
    <div className="form-container">
      
      <Dropdown
            label="Select crop"
            options={allCrops}
            value={selectedOption}
            handleChange={handleOptionChange}
            id="crop_name"
            name="crop_name"
        />
         <form>
              <Box my={2}>
                <FormControl
                  style={{ width: "300px" }}
                  variant="outlined"
                  size="small"
                >
                  <InputLabel>Email </InputLabel>
                  <OutlinedInput
                    value={email}
                    id="email"
                    name="email"
                    onChange={handleDetails}
                    labelWidth={85}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountCircleIcon style={{ color: "#777" }} />
                      </InputAdornment>
                    }
                  />
                  {/* <FormHelperText>{loginDetailsErrors.username}</FormHelperText> */}
                </FormControl>
              </Box>
                </form>
        <MyDatePicker  selectedDate={selectedDate} handleDateChange={handleDateChange} />
        
      <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  style={{ marginTop:"1.5rem",width: "200px", height: "40px", margin: "auto" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleScheduleEvent}
                    style={{
                      border: "2px solid rgba(0, 255, 0, 0.1)",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    Schedule Now
                  </Button>
                </motion.div>
    </div>
  </div>
  );
};

export default EventScheduler;