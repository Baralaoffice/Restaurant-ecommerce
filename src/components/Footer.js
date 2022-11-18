import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from './header/topheader/Logo';
import { makeStyles } from "@mui/styles";
import Social from './footer/Social';
import FooterCategory from './footer/FooterCategory';
import FooterLinks from './footer/FooterLinks';
import Newsletter from './footer/Newsletter';
import Privacy from './footer/Privacy';

const useStyles = makeStyles({
    mainfooter: {
        width: '100%',
        float: 'left',
        padding: '0px 30px',
        '& a':{
            textDecoration: 'none',
        }
    },
    footer: {
        width: '100%',
        float: 'left',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fdf5ec',
        padding: '40px 90px',
        borderRadius: '10px',
        backgroundImage: 'url(./img/Group-1609.png)',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        "& h4": {
            color: '#000',
            fontFamily: 'lora,Sans-serif',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '20px'
        }
    },
    footer1: {
        width: '100%',
        textAlign: 'justify',
        "& p":{
            margin: '0 3px !important',
            padding: '11px !important',
            fontSize: ' 16px !important',
            fontFamily: "montserrat, Sans-serif !important",
            fontWeight: '500 !important',
            color: '#717080 !important',
            display: 'block'
        }
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.mainfooter}>
            <Box className={classes.footer}>
                <Box className={classes.footer1}>
                    <Logo />
                    <Box>
                        <Typography>986 Fieldstone Avenue<br></br> New York, NY 10032</Typography>
                    </Box>
                    <Social />
                </Box>
                <Box className={classes.footer1}>
                    <Typography variant='h4'>Categories</Typography>
                    <FooterCategory />
                </Box>
                <Box className={classes.footer1}>
                    <Typography variant='h4'>Userful Links</Typography>
                    <FooterLinks />
                </Box>
                <Box className={classes.footer1}>
                    <Typography variant='h4'>Newsletter</Typography>
                    <Newsletter />
                </Box>
            </Box>
            <Box>
                <Privacy/>
            </Box>
        </Box>
    )
}

export default Footer
