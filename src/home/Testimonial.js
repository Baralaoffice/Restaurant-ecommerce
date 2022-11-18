import { Box, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from "@mui/styles";
import Testimonialcart from './Testimonialcart';

const useStyles = makeStyles({
  row:{
    width:'100%',
    float:'left',
    clear:'both'
  },
  col:{
    marginTop: '97px',
    "& h3":{
      color: '#000',
    fontSize:' 42px',
    fontWeight: '700',
    lineHeight: '1.4em',
    }
  },
  col_1:{
    // background:'#000',
    padding:'0 20px',
    width: '100%',
    float: 'left',
    position:'relative',
    overflow: 'hidden',
  },
  img_1:{
    position: 'absolute',
    zIndex: 0,
    top: '-56px',
    left: "-114px",
  },
  img_2:{
    position: 'absolute',
    zIndex: 0,
    bottom: '56px',
    right: "426px",
  },
  img_3:{
    position: 'absolute',
    zIndex: 2,
    top: '-56px',
    right: "-114px",
  }
});



const Testimonial = () => {
  const classes = useStyles();
  return (
    <Box className={classes.row}>
      <Box className={classes.col}>
        <Typography variant='h3'> Why Customer Love Us ?</Typography>
      </Box>
      <Box className={classes.col_1}>
        <Testimonialcart/>
        <Box className={classes.img_1}><img src='./img/Daco_1137698.png.webp' alt='as'/></Box>
        <Box className={classes.img_2}><img src='./img/img1-13.png.webp' alt='as'/></Box>
        <Box className={classes.img_3}><img src='./img/h4_leaf-3.png.webp' alt='as'/></Box>
      </Box>
    </Box>
  )
}

export default Testimonial
