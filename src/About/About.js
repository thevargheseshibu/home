import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import Box from "@material-ui/core/Box";
import "./About.css";
import vsavatar from "../images/avatar/1.jpeg";

const styles = {
  background: "#000000",
  color: "#FFFFFF",
};

const aavatarc = {
  marginTop: "3.25rem",
  marginLeft: "13.25rem",
};

const acard = {
  marginTop: "3.25rem",
  marginLeft: "0.25rem",
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  cbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  cbox1: {
    display: "flex",
    justifyContent: "center",
  },
  pictureLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "14em",
  },


  title: {
    fontSize: 14,
  },
  
  about: {
    marginLeft: "7.25rem",
  },
  about: {
    marginTop: "18.25rem",
  },
  atitle: {
    marginTop: "2.25rem",
    display: "flex",
    justifyContent: "center",
  },
  atitle1: {
    marginTop: "1.25rem",
    display: "flex",
    justifyContent: "center",
  },
  atitle2: {
    marginTop: "1.25rem",
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div style={styles} >
      <Box style={styles}> 
      <Box className={classes.cbox} style={styles}>
        <h1 className={classes.about}>Hi , I am Varghese Shibu </h1>
      </Box>

      <Box className={classes.cbox1} style={styles} >

 
          <Typed className="try"
           
            strings={[
              "Certified Ethereum Developer",
              "Certfied Blockchain Associate",
              "Certified FullStack Developer",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />


  
      </Box>

      <Box className={classes.pictureLogo } style={styles} >
        <Avatar
          alt="Remy Sharp"
          src={vsavatar}
          style={aavatarc}
          className={classes.large}
        />
      </Box>

      </Box>
    </div>
  );
};

export default About;
