import React, { useState } from 'react';
import moment from 'moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';

import MomentUtils from '@date-io/moment';


export  const MyDatePicker = ({selectedDate,handleDateChange}) => {
    const datePickerStyle = {
        '& .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-input': {
          backgroundColor: 'transparent',
        },
      };
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="YYYY-MM-DD"
        margin="normal"
        id="date-picker"
        label="Start Sowing "
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        style={datePickerStyle}

      />
      </MuiPickersUtilsProvider>
    );
  };
  