import { Box } from '@mui/material'
import React from 'react'
import Topheader from './header/Topheader';
import { makeStyles } from "@mui/styles";
import Navbar from './header/Navbar';

const useStyles = makeStyles({
  header: {
    "& a":{
      textDecoration: 'none',
    },
  },

});


const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
        <Topheader/>
        <Navbar/>
    </Box>
  )
}

export default Header
