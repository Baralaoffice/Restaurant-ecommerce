import { Box, Typography } from '@mui/material'
import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    row:{
        width:'100%',
        float:'left'

    },
    side:{
        display:'flex',
        marginBottom:'20px',
        padding:'40px 0',
        alignItems:'center',
        width:'25%',
        borderBottom:'3px solid #f1f1f1',
        '&:hover':{
            borderBottom:'3px solid #3cb815',
        },

        '& span':{
            marginRight: '30px',
            color: '#3cb815',
            paddingLeft:'10px'
        },
        '& p':{
            fontFamily: 'lora,Sans-serif',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '1.4em',
            color: '#717080',
            width:"170px"
        }
    },
    col:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
    }
})


const Promotion = () => {
  const classes = useStyles();

    const data = [
        {
            'name':'Product from organic farm',
        },
        {
            'name':'Free home delivery',
        },
        {
            'name':'Promotion of the week',
        },
        {
            'name':'-20% discount on all vegetables',
        },
        
    ]
  return (
    <Box className={classes.row} >
       <Box className={classes.col}>
    {
        data.map((item, i)=>(
            <Box key={i} className={classes.side}>
                <span><ShoppingBagIcon/></span>
                <Typography>{item.name}</Typography>
            </Box>

        ))
    }
    </Box>
    </Box>
  )
}

export default Promotion
