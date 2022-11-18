import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from "@mui/styles";
import GroupsIcon from '@mui/icons-material/Groups';


const useStyles = makeStyles({
  Counter: {
    display: 'block',
    width: '100%',
    float: 'left',
    padding: '80px 0',
    backgroundColor: '#1a2428 !important',
    backgroundImage: "url(./img/Group-1610.png) !important",
    backgroundSize:' cover !important',
    color: '#fff'
  },
  row: {
    display: 'flex'
  },
  row_1:{
    display:'flex',
    alignItems:'center',
    justifyContent:'Center',
    
  },
  col_1:{
    marginRight: '20px',
    "& svg":{
      fontSize: '93px',
      color:'#3cb815'
    
    }
  },
   col_2:{
    textAlign: 'left',
    
    "& p":{
      fontSize: '36px',
      fontWeight: 700,
      "& span":{
        fontSize: '36px',
        fontWeight: 700,
        color:'#ff7d09'
      },
    },
    
    "& span":{
      fontSize: '16px',
      fontWeight: 700,
    },
  },

})

const data = [
  {
    "count": "1800",
    "adn":"+",
    "name": "Satisfied Clients"
    
  },
  {
    "count": "362",
    "adn":"+",
    "name": "Active Products",
  },
  {
    "count": "32",
    "adn":"+",
    "name": "Food Categories"
  },
  {
    "count": "1800",
    "adn":"+",
    "name": "Awards Wining"
  },
]
const Counter = () => {
  const classes = useStyles();

  return (
    <Box className={classes.Counter}>
      <Box className={classes.row}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            data.map((item, i) => (
              <Grid item xs={3}>
                <Box className={classes.row_1}>
                  <Box className={classes.col_1}>
                   <GroupsIcon/>
                  </Box>
                  <Box className={classes.col_2}>
                    <Typography>{item.count}<span>{item.adn}</span></Typography>
                    <span>{item.name}</span>
                  </Box>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  )
}

export default Counter
