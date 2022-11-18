import { Link, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

})

const Logo = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
            variant="h6"
            noWrap
            component="div"
          >
            <Link href="#" className={classes.logolink}>
                <img src="./img/Group-1607.svg" alt='aa'/>
            </Link>
          </Typography>
    </div>
  )
}

export default Logo
