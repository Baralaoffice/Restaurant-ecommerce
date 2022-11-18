import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Newscart from './Newscart';


const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        clear: 'both',
        padding: '0 10px'
    },
    col_arrow: {
        textAlign: 'end',
        '& a': {
            background: '#3cb815',
            padding: '6px 14px',
            paddingLeft: '37px',
            borderRadius: '28px',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: 500,
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
    },
    col_h: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom:'30px',
        '& h3': {
            fontFamily: 'lora,Sans-serif',
            fontSize: '42px',
            fontWeight: '700',
            lineHeight: '1.4em',
        }
    }

})

const News = () => {
    const classes = useStyles();
    return (
        <Box className={classes.row}>
            <Box className={classes.col}>
                <Box className={classes.col_h}>
                    <Box>
                        <Typography variant='h3'>Latest News & Blogs</Typography>
                    </Box>
                    <Box className={`${classes.col_arrow}`}>
                        <Link href='#'>SEE ALL<span><ArrowForwardIcon /></span></Link>
                    </Box>
                </Box>
                <Newscart />
            </Box>
        </Box>
    )
}

export default News
