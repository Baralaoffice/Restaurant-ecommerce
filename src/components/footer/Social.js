import React from 'react';
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  social: {
    display: 'flex',
    marginTop: '20px',
    '& a': {
      minWidth: 'auto !important',
      background: '#fff',
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      color: '#3cb815 !important',
      marginRight:' 10px',

    },
    '& a:hover': {
      background: '#3cb815',
      color: '#fff !important',
    }
  },
})

const Social = () => {
  const classes = useStyles()
  return (
    <div className={classes.social}>
      <Button href="https://twitter.com/login" className={classes.facebook}>
        <FacebookIcon />
      </Button>
      <Button href="https://www.instagram.com" className={classes.Instagram}>
        <InstagramIcon />
      </Button>
      <Button href="https://www.youtube.com" className={classes.YouTube}>
        <YouTubeIcon />
      </Button>
      <Button href="https://www.linkedin.com" className={classes.Telegram}>
        <TwitterIcon />
      </Button>


    </div>
  )
}

export default Social