import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";


const bstyles = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:'#FFD700'
};

const useStyles = makeStyles({
  cbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
  },
});

function Contactme() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.cbox} style={bstyles}>
        <Card
          className={classes.root}
          style={{
            width: "50rem",
            height: "25rem",
            background: "#333333",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <Box style={bstyles}>Contact Me</Box>
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                <Box style={bstyles}>Mobile : 9496229341</Box>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default Contactme;
