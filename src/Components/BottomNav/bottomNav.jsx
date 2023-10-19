import React, { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { Crop } from '../svg/Icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function BottomNav() {
    const [value, setValue] = React.useState(0);
    const history = useHistory();
    const handleClick = (event, newValue) => {
        // setValue(newValue);
        // console.log(newValue);

        history.push(`/${newValue}`)
      };
      const handleChange = (event,newVal) =>{
        setValue(newVal);
      }
  return (
    <div style={{height:"60px",position:"fixed",bottom:"-5px",width:"100%",zIndex:"1000"}}>
          <BottomNavigation
      showLabels
      onChange={handleChange}
      value={value}
    >
      <BottomNavigationAction label="Home" onClick={(e) => handleClick(e, "home")} icon={<HomeRoundedIcon />} />
      <BottomNavigationAction label="Application" onClick={(e) => handleClick(e, "app")} icon={<AppsRoundedIcon />} />
      <BottomNavigationAction label="Crop" onClick={(e) => handleClick(e, "crop")} icon={<Crop/>}/>
      <BottomNavigationAction label="Profile" onClick={(e) => handleClick(e, "profile")} icon={<AccountCircleRoundedIcon />} />
      <BottomNavigationAction label="About"   onClick={(e) => handleClick(e, "about")} icon={<InfoRoundedIcon />} />
      </BottomNavigation>
      </div>
  )
}
