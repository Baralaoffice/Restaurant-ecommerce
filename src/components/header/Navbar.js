import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import Category from './navbar/Category';
import Nav from './navbar/Nav';
import { Link } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const useStyles = makeStyles({
  Navbar: {
    background: "#77ba3a !important",
    "& a": {
      textDecoration: 'none',
    },
  },
  col1: {
    flex: '1'
  },

  col2: {
    flex: '2'
  },
  col3: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    textAlign: 'end',
    '& button': {
      padding: '10px 52px',
      background: '#ff7d09',
    }
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    "& span":{
      color: "#ff7d09",
      marginRight:'15px',
      display:'flex'
    }
  },
  rowlink:{
    '& a':{
      color:'#fff',
    fontSize:" 16px",
    fontWeight: '600',
    marginRight:'15px',


    fontFamily: "montserrat,Sans-serif"
    }
  }

});
export default function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.Navbar}>
        <Toolbar>
          <Box className={classes.col1}>
            <Category />
          </Box>
          <Box className={classes.col2}>
            <Nav />
          </Box>
          <Box className={classes.col3}>
            <Box className={classes.row}>
              <span><HeadphonesIcon /></span>
              <Box className={classes.rowlink}>
                <Link href="tel:8107180136">
                  (123) 8800-555
                </Link>
              </Box>
            </Box>
            <Button color="inherit">Log in</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
