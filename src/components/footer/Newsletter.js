import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Link, Typography } from '@mui/material';

const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        marginTop: '20px'

    },
    content: {
        "& a":{
            margin: '0 3px !important',
            padding: '11px !important',
            fontSize: ' 16px !important',
            fontFamily: "montserrat, Sans-serif !important",
            fontWeight: '500 !important',
            color: '#717080 !important',
            display: 'block'
        }

    },
    col: {
        width: '100%',
        display: 'block',
        margin: 'auto',
        textAlign: 'initial',
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


const Newsletter = () => {
    const classes = useStyles()
    return (
        <Box className={classes.row}>
            <Box className={classes.col}>
                <Typography>Get now free 20% discount for all products on your first order</Typography>
                <Box className={classes.content}>
                    <Link href="tel:+8107180136">T:+(123) 8800-555</Link>
                    <Link href="mailto:example@delicacy.com">E :example@delicacy.com</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Newsletter