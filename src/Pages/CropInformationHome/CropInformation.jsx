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
} from '@material-ui/core';
import { List, ListItem, ListItemText,ListItemIcon } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {images} from "../../utils/constants"

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
    marginBottom: theme.spacing(4),
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 140,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#388e3c', // Transparent green color (RGBA)
    color: 'white',
    padding: theme.spacing(2),
    outline: 'none',
    borderRadius: '4px',
    maxWidth: 400,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: 'green',
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
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h3" className={classes.title}>
          Crop Information
        </Typography>

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
                    <Typography variant="body2" color="textSecondary">
                      {image.crop}
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
                    onClick={() => history.push("/scheduler")}
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
  );
};

export default App;
