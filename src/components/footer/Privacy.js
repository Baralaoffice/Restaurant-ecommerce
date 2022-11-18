import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'left',
        color: '#717080',
        fontFamily: 'montserrat,Sans-serif',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '1.6em',
        '& a':{
            color: '#717080',
        padding: '30px',

        }
    },
})

const Privacy = () => {
    const classes = useStyles()
    return (
        <Box className={classes.row}>
            <Box>
                <Typography>© 2022 Delicacy Store</Typography>
            </Box>
            <Box>
                <Link href='#'>Privacy Policy</Link>
                <Link href='#'> Privacy Policy</Link>
                <Link href='#'>Cookies/Ad Choices</Link>
            </Box>
            <Box>
                <img src='./img/payment_1.png.webp' alt='sd' />
            </Box>
        </Box>
    )
}

export default Privacy
