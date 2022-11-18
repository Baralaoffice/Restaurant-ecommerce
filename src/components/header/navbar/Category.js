import React from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { Box, Link, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  Category:{
    display:'flex',
    color: '#fff',
    alignItems:'center',
    '& p':{
      marginRight: '24px',
      display:'flex',
    "& svg":{
      width: '30px',
      height: '30px',
    }
    }
  }
})

const Category = () => {
  const classes = useStyles();
  return (
    <Box>
      <Link href='#'>
        <Typography className={classes.Category}>
          <Typography><DragIndicatorIcon /></Typography>
          All Categories
          <Typography><KeyboardArrowDownIcon /></Typography>
        </Typography>
      </Link>
    </Box>
  )
}

export default Category
