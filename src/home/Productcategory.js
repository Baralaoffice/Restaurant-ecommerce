import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Link } from '@mui/material';

const useStyles = makeStyles({
  row: {
    width: '100%',
    float: 'left',
    paddingBottom:'50px'
  },
  item:{
    margin: '0 3px !important',
    position: 'relative !important',
    padding: '11px !important',
    fontSize:' 16px !important',
    fontFamily: "montserrat, Sans-serif !important",
    fontWeight: '600 !important',
    color:'#000 !important',
  },
  col:{
    width:'100%',
    display:'block',
    margin:'auto'
  }
})

const pages = ['All Products','Fruits', 'Fresh Meat', 'Vegetables', 'Spices', 'Fresh Nuts', 'Frozen Foods', 'Food', 'Drinks'];
const Productcategory = () => {
  const classes = useStyles()
  return (
    <Box className={classes.row}>
      <Box className={classes.col}>
        {pages.map((page) => (
          <Link
            href="/"
            underline="none"
            focusVisible
            key={page}
            className={classes.item}
          >
            {page}
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default Productcategory
