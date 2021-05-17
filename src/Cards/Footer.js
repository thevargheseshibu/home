import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';


const styles = {
  
  background: "#000000",
  color: "#FFFFFF",
};


const useStyles = makeStyles((theme) => ({
  
  foot: {
    position:'absolute',
    bottom:'0',
    display:'block',
    width:'100%',

   
  },

}));



export const Footer = () => {


  const classes = useStyles();


    return (

       
   
    
        <AppBar  className={classes.foot} position="static"  color="#000000" style={styles}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" style={styles} >
              © 2021 All Right Reserved To Varghese Shibu
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
     
    )
}
export default Footer