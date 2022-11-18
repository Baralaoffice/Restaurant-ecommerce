import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";
import Logo from './topheader/Logo';
import Searchbar from './topheader/Search';
import Cart from './topheader/Cart';

const useStyles = makeStyles({
    Topheader: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems:"center",
    background: '#fff',
    width: "100%",
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '10px 30px',
    "& a":{
      textDecoration: 'none',
    },
  },
  col:{
    // flex:'1',
    // display:'flex',
  }

});

const Topheader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Topheader}>
      <Box className={classes.col}>
       <Logo/>
      </Box>
      <Box className={classes.col}>
       <Searchbar/>
      </Box>
      <Box className={classes.col}>
       <Cart/>
      </Box>
    </Box>
  )
}

export default Topheader
