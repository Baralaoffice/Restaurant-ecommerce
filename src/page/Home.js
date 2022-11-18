import React from 'react';
import { makeStyles } from "@mui/styles";
import Promotion from '../home/Promotion';
import { Box } from '@mui/material';
import Homecategory from '../home/Homecategory';
import Modal from '../home/Modal';
import Categorydetail from '../home/Categorydetail';
import Selling from '../home/Selling';
import About from '../home/About';
import Product from '../home/Product';
import Counter from '../home/Counter';
import Testimonial from '../home/Testimonial';
import News from '../home/News';


const useStyles = makeStyles({
  home:{
    width:'100%',
    float:'left',
    background:'#fff',
    '& a':{
      textDecoration:'none'
    },
    '& >div':{
    background:'#fff',

    }
  }
})

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.home}>
      <Promotion/>
      <Homecategory/>
      <Modal/>
      <Categorydetail/>
      <Selling/>
      <About/>
      <Product/>
      <Counter/>
      <Testimonial/>
      <News/>
    </Box>
  )
}

export default Home
