import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import { grey } from '@material-ui/core/colors';


const bstyles = {
  


  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:'#FFD700'

  
};





const useStyles = makeStyles({
  root: {
    maxWidth: 345,

    
    

       
    

  },  cbox: {
    

    paddingLeft:'30px'
      
         
      
  
    }, root1: {
    



  display:'flex',


    flexDirecton: 'row',
    border:'15px',
    
       
    

  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (


<div className={classes.cbox}  >
     
    <Card className={classes.root}  style={{
        width: '50rem', height: '25rem' ,background: '#333333'
      }} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent  >

          <Typography gutterBottom variant="h5" component="h2"  >
            <Box style={bstyles} >
           {props.Service}
           </Box>
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p" >
          <Box style={bstyles} >
            {props.Text}
            </Box>
          </Typography>


        </CardContent>


      </CardActionArea>
      <CardActions>
        
      </CardActions>

    </Card>

    </div>

   
    









    
    
  
  );
}