import React from 'react'
import { Cube } from '../../Components/svg/Icons'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        width:"100%",
        flexDirection:"column",
        placeItems:"center", 
        alignContent:"center",
        fill:"#ffffff",
        paddingBottom:"5rem",
    },
    
    line:{
        color:"white",
        width:"400px",
        height:"3px",
        backgroundColor:"white",
        marginTop:"1rem",
      },

}))
export default function Application() {
    const classes = useStyles();
    const history = useHistory();
  return (
        <Box className={classes.container} >
            <Box style={{display:"flex",marginTop:"2rem",flexDirection:"column",placeItems:"center"}}>
                <img src='./cube.svg' alt="cube" width="100px" height="100px"/>
                <p>This is Farm Analytica Application Page</p>
            </Box>
            <Box style={{width:"400px",display:"flex",marginTop:"2rem",justifyContent:"space-around",alignItems:"start"}}>
                <Box>
                <FileCopyIcon fontSize='large' style={{color:"green"}}/>
                </Box>
                <Box>
                    <h4 style={{padding:0,margin:0}}>Prediction Approaches </h4>
                    <p>Predict crop yield with and without fertilizer</p>
                    <Box style={{display:"flex",marginTop:"1rem",justifyContent:"end"}}>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/app/cropRecommendation")}
                    style={{
                      border: "2px solid white",
                      width:"200px"

                    }}
                  >
                Predict
                  </Button>
                    </Box>
                </Box>
            </Box>
            <hr className={classes.line}/>
            

            <Box style={{width:"400px",display:"flex",marginTop:"2rem",justifyContent:"space-around",alignItems:"start"}}>
                <Box>
                <CalendarTodayIcon fontSize='large' style={{color:"green"}}/>
                </Box>
                <Box>
                    <h4 style={{padding:0,margin:0}}>Schedule Crop</h4>
                    <p>Schedule your crops and you</p>
                    <Box style={{display:"flex",marginTop:"1rem",justifyContent:"end"}}>
                        <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/app/scheduler")}
                    style={{
                      border: "2px solid white",
                      width:"200px"
                    }}
                  >
                    Schedule Now
                  </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
  )
}
