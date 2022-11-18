import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles({
  row: {
    width: '100%',
    float: 'left',
    display: 'flex',
  },
  col: {
    width: '50%',
    padding:'20px'
  },
  col_con: {
    fontFamily: ' lora,Sans-serif',
    "& h2": {
      fontSize: '42px',
      textAlign: 'left',
    },
    fontWeight: 700,
    lineHeight: '1.4em',
    color: '#000'
  },
  col_arrow: {
    textAlign: 'end',
    '& a': {
      background: '#3cb815',
      padding: '6px 14px',
      paddingLeft: '37px',
      borderRadius: '28px',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: 500,
      color: '#fff',
      "&:hover":{
        background:'#ff7d09',
      },
      '& span': {
        padding: ' 9px',
        background: '#fff',
        color: ' #000',
        borderRadius: '50%',
        marginLeft: '12px',
      }
    }
  }
})


const Homecategory = () => {
  const classes = useStyles();

  return (
    <Box className={classes.row}>
      <Box className={`${classes.col} ${classes.col_con}`}>
        <Typography variant='h2'>Browser Our Hottest <br></br><span style={{ color: '#77BA3A' }}>Categories</span></Typography>
      </Box>
      <Box className={`${classes.col} ${classes.col_arrow}`}>
        <Link href='#'>SEE ALL<span><ArrowForwardIcon /></span></Link>
      </Box>
    </Box>
  )
}

export default Homecategory
