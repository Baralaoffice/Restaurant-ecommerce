import { Link, Typography } from '@mui/material'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box } from '@mui/system'
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    Cart: {
        fontFamily: "Montserrat , sans-serif ",
        padding: '12px 18px 6px 10px',
        borderRadius: "6px !important",
        backgroundColor: '#f1f1f1',
    },
    Cartlink: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    Cartprice: {
        fontSize: "18px!important",
        fontWeight: "500!important",
        color: '#ff7d09',
        display: 'flex',
        alignItems: ' center',
        "& span": {
            display: "flex"
        }
    },
    Carticon: {
        marginLeft: '5px !important',
        position: 'relative',
        color: '#3cb815',
        "& span": {
            position: " absolute",
            top: '-2px',
            right: '-9px',
            color: '#fff',
            background: '#3cb815',
            width: '17px',
            height: '17px',
            borderRadius: "50%",
            fontSize: '12px',
        }
    }
})

const Cart = () => {
    const classes = useStyles();
    return (
        <Box className={classes.Cart}>
            <Link className={classes.Cartlink}>
                <Typography className={classes.Cartprice}>
                    <span><KeyboardArrowDownIcon /></span>$0.00
                </Typography>
                <Typography className={classes.Carticon}><LocalMallIcon /><span>0</span></Typography>
            </Link>
        </Box>
    )
}

export default Cart
