import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from "@mui/styles";
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';


const useStyles = makeStyles({
    Newscart: {
        width: '100%',
        float: 'left',
        clear: 'both',
        marginBottom: '150px'
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '50px',
        paddingBottom: '70px',
    },
    col: {
        width: '100%',
        position: 'relative',
        boxShadow: '0 8px 25px 0 rgba(0,55,119,.15) !important',
    },
    con_h: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#717080'
    },
    pra_link: {
        "&:hover a":{
            color:'#ff7d09'
        },
        "& a": {
            color: '#1a2428',
            fontSize: '24px',
            fontWeight: '700',
            lineWeight: ' 1.4em',
            padding: '24px 0',
            textAlign: 'initial',
            display: 'block',
        }
    },
    col_img: {
        borderRadius: '10px',
        overflow: 'hidden',
        '& a': {
            display: 'block',
            '& img': {
                width: '100%',
                display: 'block'
            }
        }
    },
    col_con: {
        position: ' absolute',
        padding: '17px 39px',
        bottom: '-120px',
        left: '18px',
        background: 'white',
        width: '375px',
        borderRadius: '10px',
        boxShadow: '0 8px 25px 0 rgba(0,55,119,.15)!important',
    }

})


const data = [
    {
        'img': './img/close-up-box-with-vegetables-hands-mature-man-1-1.png.webp',
        'name': 'Admin',
        'date': 'September 5, 2021',
        'mess': '0',
        'pra': '5 Reasons You Must Eat Greens Everyday'
    },
    {
        'img': './img/close-up-box-with-vegetables-hands-mature-man-1-1.png.webp',
        'name': 'Admin',
        'date': 'September 5, 2021',
        'mess': '0',
        'pra': '5 Reasons You Must Eat Greens Everyday'
    },
    {
        'img': './img/close-up-box-with-vegetables-hands-mature-man-1-1.png.webp',
        'name': 'Admin',
        'date': 'September 5, 2021',
        'mess': '0',
        'pra': '5 Reasons You Must Eat Greens Everyday'
    }


]
const Newscart = () => {
    const classes = useStyles();
    return (
        <Box className={classes.Newscart}>
            <Box className={classes.row}>
                {
                    data.map((item, i) => (
                        <Box key={i} className={classes.col}>
                            <Box className={classes.col_img}>
                                <Link href=''>
                                    <img src={item.img} alt="sd" />
                                </Link>
                            </Box>
                            <Box className={classes.col_con}>
                                <Box className={classes.con_h}>
                                    <Typography>{item.name}</Typography>
                                    <Typography>{item.date}</Typography>
                                    <Typography><span><MarkChatUnreadOutlinedIcon /></span>0</Typography>
                                </Box>
                                <Box className={classes.pra_link}>
                                    <Link href="">{item.pra}</Link>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Newscart
