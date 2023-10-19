import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
  Grid,
  Container,
  Button,
  Box,
} from '@material-ui/core';
import { List, ListItem, ListItemText,ListItemIcon } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {images} from "../../utils/constants"

const useStyles = makeStyles((theme) => ({
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
    paddingBottom:"4rem"
  },
  line:{
    color:"white",
    width:"70%",
    height:"3px",
    backgroundColor:"white",
    marginTop:"3rem",
  },
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
    textAlign:"center",
    marginBottom: theme.spacing(4),
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 240,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(13, 16, 23,1)',
    color: 'white',
    padding: theme.spacing(2),
    outline: 'none',
    borderRadius: '4px',
    maxWidth: 400,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: 'White',
  },
  white:{
    color:"white"
  },
  gridClass:{
    overflowY: 'auto',
  }
}));
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

const ListHandler = ({ name,list }) => {
  const classes = useStyles();

  return (
    <List >
      <Typography variant="body1" className={classes.modalContent}>
        {name}
      </Typography>
      {list.map((element, index) => (
        <ListItem key={index}>
          <ListItemIcon className={classes.white}>{`*`}</ListItemIcon>
          <ListItemText primary={element} />
        </ListItem>
      ))}
    </List>
  );
};

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const history = useHistory();

  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };
 

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
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
            Crops
          </Typography> 
        </div>
          
      </Box>
      <hr className={classes.line} /> 
      
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h5" component="h5" className={classes.title}>
          CROPS LIST
        </Typography>
        <div style={{color:"white"}}>
          <Typography className={classes.paragraph} >
            Information about various crops can be found here. chossing a crop to plant allows
            you to consider a few things. You can choose a crop based on the environment they grow
            in maturity, best regions to plant them and the time to which fertilizer can be applied.
          </Typography> 
        </div>

        <Grid container spacing={2} className={classes.gridClass}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card className={classes.card}>
                <CardActionArea onClick={() => handleOpen(image)}>
                  <CardMedia
                    className={classes.media}
                    image={image.imageUrl}
                    title={image.crop}
                  />
                  <CardContent>
                    <Typography variant="h5" color="text" >
                      {image.crop}
                    </Typography>
                  </CardContent>
                  <CardContent style={{backgroundColor:"rgba(13, 16, 23,0.9)",margin:"10px"}}>
                    <Typography variant="h6" color="secondary" >
                      Learn More
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
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
                    onClick={() => history.push("/app/scheduler")}
                    style={{
                      border: "2px solid white",
                      width: "100%",
                      height: "100%",
                      padding:'1rem'
                    }}
                  >
                Set Schedule
                  </Button>
              </motion.div>

      </Container>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <div className={classes.modalContent}>
         
          {currentImage && (
            <div>
              <Typography variant="body1" gutterBottom>
                Crop: {currentImage.crop}
              </Typography>
              <Typography variant="body1">
                Environment: {currentImage.environment}
              </Typography>
              <Typography variant="body1">
                <ListHandler name="Suitable Regions:" list={currentImage.suitableRegions}/> 
              </Typography>
              <Typography variant="body1">
                Maturity: {currentImage.maturity}
              </Typography>
              <Typography variant="body1">
                <ListHandler name="FertilizerApplicationSchedule" list= {currentImage.fertilizerApplicationSchedule}/>
              </Typography>
              <Typography variant="body1">
                Description: {currentImage.description}
              </Typography>
            </div>
          )}
        </div>
      </Modal>
    </div>
    </Box>
  );
};

export default App;
