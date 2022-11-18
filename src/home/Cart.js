import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Datacart from '../api/Datacart.json';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    cart: {
        display: 'flex',
        width: '100%',
        gap: '20px',
        marginTop:'50px',
        // flexWrap:'wrap'
      },
      cart_main: {
        width: '25%',
        transition: 'all .4s ease-in-out',
        border: 'solid 2px #e9e9e9',
        background: '#fff',
        padding: '35px 10px 50px 15px',
        borderRadius: '20px',
      },
      cart_con: {
        fontSize: '21px',
        fontWeight: '600',
        "& h5": {
          color: '#1a2428',
          fontSize: '21px',
        },
        '& p': {
          color: '#ff7d09',
          display: 'block'
        }
      },
      cart_btn:{
        "& Button": {
            color: '#fff',
            backgroundColor: '#3cb815',
            borderRadius: '30px',
            padding: '10px 30px',
            fontSize: '12px',
            fontWeight: 600,
            transition: 'all .5s ease 0s',
            position: 'absolute',
            marginTop: '20px',
          },
      }
})


const Cart = () => {
  const classes = useStyles();
  console.log(Datacart);
    return (
        <Box className={classes.cart}>
            {
                Datacart.map((item, i) => (
                    <Card  key={i} className={classes.cart_main}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.img}
                                alt="green iguana"
                            />
                            <CardContent className={classes.cart_con}>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography>
                                    ${item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cart_btn}>
                            <Button size="small" color="primary">
                                {item.btn}
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </Box>
    );
}

export default Cart