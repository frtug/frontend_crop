import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { Box } from '@material-ui/core';


import {
  Popper,
  Paper,
  DialogTitle,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    fontWeight: "bold",
  },
  paper: {
    maxWidth: 400,
    overflow: "auto",
    marginRight: 20
  },
  popper: {
    zIndex: 1,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.9em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
      },
    },
  },
  arrow: {
    position: "absolute",
    fontSize: 7,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
    },
  },
}));

const NavbarView = ({
  profileOpen,
  anchorRef,
  handleProfileOpen,
  handleLogout,
}) => {
  //constants
  const userDetails = useSelector(
    ({ userDetails }) => userDetails.userDetails,
    shallowEqual
  );
  const history = useHistory();
  const classes = useStyles();
  const [arrowRef, setArrowRef] = useState(null);
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#124713" }}>
          <Toolbar>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Box>
          <NavLink to="/home" className={classes.logoLink}>
            <img
              src="innovatron_industries.png"
              alt="Farm Analytica Logo"
              className={classes.logo}
              style={{ paddingTop: '15px', height: '60px' }}
            />
          </NavLink>
          </Box>
          <Box>
              {userDetails && (
                <Button
                  color="inherit"
                  ref={anchorRef}
                  onClick={() => handleProfileOpen()}
                  disableRipple
                >
                  <Avatar src={userDetails.profileUrl} />
                </Button>
              )}
              <Popper
                className={classes.popper}
                open={profileOpen}
                anchorEl={anchorRef.current}
                placement="bottom"
                disablePortal={false}
                modifiers={{
                  flip: {
                    enabled: true,
                  },
                  preventOverflow: {
                    enabled: true,
                    boundariesElement: "scrollParent",
                  },
                  arrow: {
                    enabled: true,
                    element: arrowRef,
                  },
                }}
              >
                <span className={classes.arrow} ref={setArrowRef} />
                <Paper className={classes.paper}>
                  <DialogTitle>
                    {userDetails ? userDetails.username : "Anonymous"}
                  </DialogTitle>
                  <List>
                    <ListItem
                      dense
                      component={Button}
                      color="primary"
                      onClick={() => {
                        history.push("/profile");
                        handleProfileOpen();
                      }}
                    >
                      <ListItemIcon>
                        <PersonIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Profile"
                        style={{ textTransform: "none" }}
                      />
                    </ListItem>
                    <ListItem
                      dense
                      component={Button}
                      color="primary"
                      onClick={() => handleLogout()}
                    >
                      <ListItemIcon>
                        <ExitToAppIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Logout"
                        style={{ textTransform: "none" }}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Popper>
              </Box>
              </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavbarView;
