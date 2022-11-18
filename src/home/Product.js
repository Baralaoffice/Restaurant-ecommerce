import { Box, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';
import Productcategory from './Productcategory';
import Cart from './Cart'

const useStyles = makeStyles({
    Product:{
        display:'block',
        width:'100%',
        background:'#f3f3f3 !important',
        float:'left',
        padding: '85px 0 111px',
    },
    row:{

    },
    col_h:{
        width:'100%',
        paddingBottom:'50px',
        '& h3':{
          fontFamily: 'lora,Sans-serif',
          fontSize: '42px',
          fontWeight: 700,
          lineHeight: '1.4em',
            '& span':{
              color:'#77ba3a'
            }
        }
    }
})

const Product = () => {
    const classes = useStyles();
  return (
    <Box className={classes.Product}>
      <Box className={classes.row}>
        <Box className={classes.col_h}>
            <Typography variant='h3'>Most Popular <span>Products</span></Typography>
        </Box>
        <Box>
          <Productcategory/>
          <Cart/>
        </Box> 
      </Box>
    </Box>
  )
}

export default Product
