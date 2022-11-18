import { Avatar, Box, Typography} from '@mui/material';
import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Rating from '@mui/material/Rating';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Testimonialcart: {
    width: '100%',
    float: 'left',
    clear: 'both',
    padding: '90px 10px 130px 10px'
  },
  col: {
    boxShadow: '0 50px 99px 0 rgb(31 72 93 / 6%)',
    padding: '40px !important',
    background: '#fff'
  },
  rating: {
    textAlign: 'start',
    '& >svg': {
      transform: 'rotate(181deg)',
      color: '#82c341',
      fontSize: '50px',
      fontWeight: '700',
    },
    "& span": {
      fontSize: '22px'
    }
  },
  desc: {
    textAlign: 'justify',
    '& p': {
      fontFamily: 'montserrat,Sans-serif',
      fontSize: '16px',
      fontWeight: 300,
      paddingTop: '20px',
      paddingBottom: '20px',
      marginTop: 0,
      color: '#717080',
    }
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  avatar: {
    width: '64px !important',
    height: '64px !important',
    '& img': {
      width: '100%'
    }
  },
  username: {
    paddingLeft: '19px',
    "& p": {
      fontFamily: 'lora,Sans-serif',
      fontSize: '20px',
      fontWeight: 700,
      color: '#1a2428'
    },
    "& span": {
      color: '#717080',
      fontFamily: " fira sans,Sans-serif",
      fontSize: '15px',
      fontWeight: '300',
    }
  },
  row: {
    width: '100%',
    display:'flex',
    gap:'30px',
    "& > div":{
      width:'100% !important',
      zIndex:'1'
    }
  }

})

const data = [
  {
    "img": "./img/logan-weaver-IVXoVHXqVCY-unsplash.jpg.webp",
    "name": "Michele Mash",
    "middel": "CEO at SoftwareGix",
    "desc": "This plugin is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all "
  },
  {
    "img": "./img/christian-buehner-DItYlc26zVI-unsplash.jpg.webp",
    "name": "Andersin",
    "middel": "CDO at Amazon.com",
    "desc": "This plugin is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all "
  },
  {
    "img": "./img/stephan-louis-L3s5QySz5UM-unsplash.jpg.webp",
    "name": "David Andersin,",
    "middel": "CEO at SoftwareGix",
    "desc": "This plugin is amazing with the current version, I cant imagine it, how cool will it be when you finish the all "

  }

]


const Testimonialcart = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Testimonialcart}>
      <Box spacing={2} className={classes.row} >
        {
          data.map((item, i) => (
            <Box key={i} className={classes.col} >
              <Box className={classes.rating}>
                <FormatQuoteIcon />
                <Typography>
                  <span><Rating name="half-rating" defaultValue={2.5} precision={0.5} /></span>
                </Typography>
              </Box>
              <Box className={classes.desc}>
                <Typography>"{item.desc}"</Typography>
              </Box>
              <Box className={classes.user}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src={item.img} />
                <Box className={classes.username}>
                  <Typography>{item.name}</Typography>
                  <span>{item.middel}</span>
                </Box>
              </Box>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
}

export default Testimonialcart
