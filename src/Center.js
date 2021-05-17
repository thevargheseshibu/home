import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Cards/Cards'
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';


const bstyles = {
  
  background: "#000000",
  color: "#FFFFFF",
};


const useStyles = makeStyles({
  cbox: {
    


    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"90vh",
    
   
      
         
      
  
    },
   
});


function Center()  {

  const classes = useStyles();

    return (
  
      <div  >

        <Box  className={classes.cbox} style={bstyles}>
        

            <Cards Service= "Web Developer" Text= "Full stack web development using MEAN / MERN "/>

            

            <Cards Service= "App Developer" Text= " Python,C# " />


            <Cards Service= "Blockchain Developer" Text= " Blockchain Associate And Ethereum Developer " />


        </Box>
       

          
     </div>
    
    );
  
}

export default Center;
