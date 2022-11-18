import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        marginTop: '30px'

    },
    col: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        padding: '10px',
        "&>:nth-child(1)": {
            background: '#3cb815',
        },
        "&>:nth-child(2)": {
            background: '#c0eb7b',
        },
        "&>:nth-child(3)": {
            background: '#ff7d09',
        },

    },
    col_box: {
        width: '100%',
        borderRadius: '15px',
        '& a': {
            color: '#000',
            display: 'flex',
            alignItems: 'center',
        }
    },
    col_con: {
        width: '50%',
        textAlign: ' start',
        padding: '0 20px',
        color: ' #fff',
        fontWeight: 700,

        '& p': {
            marginBottom: '12px',
            display: 'block',
            fontSize: '15px',
            fontWeight: 600,

        },
        '& h3': {
            fontSize: '26px',
            fontWeight: 600,

        },
        '& a': {
            backgroundColor: '#FFFFFF',
            padding: ' 12px 40px 12px 40px',
            borderRadius: ' 50px',
            display: 'inline-block',
            marginTop: '25px',
        },

    },
    col_img: {
        width: '50%',
        margin: '-7px 0px -39px 0',
        '& img': {
            width: '100%',
            display: 'block',
            maxWidth: '100%',
            padding: '14px 0',
            objectFit: 'cover',
        }
    }

})

const Categorydetail = () => {
    const data = [
        {
            "img": "./img/pngwing.com_.png.webp",
            "name": 'UPTO 20% OFF ',
            "head": "Collected From Gardens",
            "btn": "SEE ALL"
        },
        {
            "img": "./img/Group-1560.png.webp",
            "name": 'UPTO 20% OFF ',
            "head": "Change Your Diet Plan",
            "btn": "SEE ALL"
        },
        {
            "img": "./img/pngkit_juices-png_2831122.png.webp",
            "name": 'UPTO 20% OFF ',
            "head": "Vegetable 100% Organic",
            "btn": "SEE ALL"
        },
    ]
    const classes = useStyles();

    return (
        <Box className={classes.row}>
            <Box className={classes.col}>
                {
                    data.map((item, i) => (
                        <Box key={i} className={classes.col_box}>
                            <Link href='#'>
                                <Box className={classes.col_con}>
                                    <Typography>{item.name}</Typography>
                                    <Typography variant='h3'>{item.head}</Typography>
                                    <Link href="">{item.btn}</Link>
                                </Box>
                                <Box className={classes.col_img}>
                                    <img src={item.img} alt='aa' />
                                </Box>
                            </Link>
                        </Box>

                    ))
                }
            </Box>
        </Box>
    )
}

export default Categorydetail
