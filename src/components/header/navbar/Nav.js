import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Link } from '@mui/material';

const useStyles = makeStyles({
  nav:{
    width:'100%',
    float:'left'
  },
  item:{
    margin: '0 3px !important',
    position: 'relative !important',
    padding: '11px !important',
    fontSize:' 16px !important',
    fontFamily: "montserrat, Sans-serif !important",
    fontWeight: '600 !important',
    color:'#fff !important',
    "&.active": {
      color:'#f0c05a',
    },
  }
});

const pages = ['Home', 'About', 'Store','Pages','Blogs','Contact'];
const Nav = () => {
  const classes = useStyles()
  return (
    <Box className={classes.nav}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
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
  );
};
export default Nav;