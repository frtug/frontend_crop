import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import { Cloud } from '../svg/Icons';

const useStyles = makeStyles((theme) => ({
    background:{
        backgroundColor:"rgba(255,255,255,0.2)",
        padding:"1rem",
        width:"100%",
        maxWidth:"600px",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        margin:"1.4rem 0 1.4rem 0",
        borderRadius:"10px",
    },
    whiteCard:{
        backgroundColor:"white",
        color:"black",
        width:"25%",
        textAlign:"center",
        borderRadius:"10px",
    },
    des:{
        width:"60%"
    }
}));
export function SoilCard({}){
    const classes = useStyles()
    return(
        <>soil</>
    )
}

export  function ChemicalCard({value,symbol,description}) {
    const classes = useStyles()
  return (
    <>
     <Box className={classes.background}>
        <Box className={classes.whiteCard}>
            {/* white bg flex*/}
            <h1>{symbol}</h1>
            <h5>{value}</h5>
        </Box>
        <Box className={classes.des}>
            <p>{description}</p>
        </Box>
     </Box>
    </>
  ) 
}
export function TempCard({image,temp,status,icon}){
    const classes = useStyles()
        return(
            <>
            <Box className={classes.background} style={{flexDirection:"column"}}>
                <Box >
                    {temp ==="WARM" ? 
                    image
                    :
                    image
                    }
                </Box>
                <Box style={{width:"100%",display:"flex",justifyContent:"space-around",textAlign:"center"}}>
                    <Box style={{width:"50%",paddingTop:"15px"}}>
                        <p style={{fontSize:"13px",padding:0,margin:0}}>SOME CROPS THRIVE IN</p>
                        <p style={{fontSize:"26px",padding:0,margin:0}}>{temp}</p>
                        <p style={{fontSize:"13px",padding:0,margin:0}}>ENVIRONMENTS</p>
                    </Box>
                    <Box style={{width:"50%",paddingTop:"15px",textAlign:"center"}}>
                        <p style={{fontSize:"13px",padding:0,margin:0}}>WITH {status} HUMIDITY</p>
                        {icon}
                    </Box>
                </Box>
            </Box>
            </>
        )
    
} 
