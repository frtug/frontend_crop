

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
export function SoilCard({url,name,desc}){
    const classes = useStyles()
    return(
    <Box className={classes.background} style={{flexDirection:"column",textAlign:"center"}}>
        <Box >
            <img alt="name" src={url} width="100px" height="100px" style={{borderRadius:"50%"}} />
        </Box>
        <Box style={{width:"50%",paddingTop:"15px"}}>
            <h3 style={{padding:0,margin:0}}>{name}</h3>
        </Box>
        <Box style={{padding:"15px"}}>
            <p style={{fontSize:"13px",padding:0,margin:0}}>{desc}</p>
        </Box>
    </Box>
    )
}
export function ImageCard({title,url}){
    const classes = useStyles()
    return(
    <Box className={classes.background} style={{flexDirection:"column"}}>
            <h3 style={{padding:0,margin:0}}>{title}</h3>
            <img alt="name" src={url} width="400px" height="300px" style={{padding:"2rem"}} />
    </Box>
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
