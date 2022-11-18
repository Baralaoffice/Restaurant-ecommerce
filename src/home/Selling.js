import { Box, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";
import Cart from './Cart';

const useStyles = makeStyles({
  row: {
    width: '100%',
    float: 'left',
    clear: 'both',
    display: 'flex',
    marginTop: '50px',
    flexWrap: 'wrap',
    padding: '10px'
  },
  col: {
    width: '100%',
    textAlign: 'left'
  },
  col_h: {
    '& p': {
      color: '#000',
      fontFamily: "Lora, Sans-serif",
      fontSize: '42px',
      fontWeight: 700,
      lineHeight: '1.4em',
    }
  },



});

const Selling = () => {
  const classes = useStyles();

  return (
    <Box className={classes.row}>
      <Box className={`${classes.col} ${classes.col_h} `}>
        <Typography>Best Selling Products</Typography>
      </Box>
      <Box className={classes.col}>
        <Cart/>
      </Box>
    </Box>
  )
}

export default Selling

