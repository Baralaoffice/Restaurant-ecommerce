import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Link, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const useStyles = makeStyles({
    about: {
        display: 'block',
        width: '100%',
        float: 'left',
        padding:'60px 0'
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',

    },
    col: {
        width: '50%',
        '& img': {
            width: '100%',
            display: 'block'
        }
    },
    col_con: {
        width: '100%',
        textAlign: 'start',
        fontFamily: 'montserrat,Sans-serif',
        "& span": {
            fontSize: '18px',
            fontWeight: '500',
            color: '#3cb815'
        },
        "& p": {
            fontSize: '16px',
            fontWeight: '500',
            color: '#717080',
            lineHeight: '1.9em',
            fontFamily: 'montserrat,Sans-serif',
        },
        "& h3": {
            fontSize: '42px',
            fontWeight: '700',
            lineHeight: '1.4em',
            color: '#000',
        }
    },
    col_arrow: {
        textAlign: 'justify',
        marginTop:'40px',
        '& a': {
            background: '#3cb815',
            padding: '6px 16px',
            paddingLeft: '37px',
            borderRadius: '28px',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: 600,
            transition: 'all .3s ease-out',
            color: '#fff',
            "&:hover": {
                background: '#ff7d09',
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

const About = () => {
    const classes = useStyles();

    return (
        <Box className={classes.about}>
            <Box className={classes.row}>
                <Box className={classes.col}>
                    <img src='./img/Group-30.png.webp' alt='as' />
                </Box>
                <Box className={classes.col}>
                    <Box className={`${classes.col_1} ${classes.col_con}`}>
                        <span>About</span>
                        <Typography variant='h3'>We Believe In Working With Accredited Farmers</Typography>
                        <Typography >Organic Foods And Café Is A Family Run Company That Runs Organic Super Markets And Cafés Selling Fresh Organic And Biodynamic Food, Supplers, Skincare, Cosmetics, Baby Items And Household Cleaning Products. We Have 5 Shops In Dubai – On Sheikh Zayed Road.</Typography>
                        <Box className={classes.col_arrow}>
                            <Link href='#'>LEARN MORE<span><ArrowForwardIcon /></span></Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default About
