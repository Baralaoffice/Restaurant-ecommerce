import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    row: {
        width: '100%',
        float: 'left',
        marginTop:'30px'

    },
    col: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        padding: '10px',
        "&>:nth-child(1)": {
            background: '#fef4ea',
        },
        "&>:nth-child(2)": {
            background: '#eeeef9',
        },
        "&>:nth-child(3)": {
            background: '#faeaea',
        },
        "&>:nth-child(4)": {
            background: '#f7f6d7',
        },
    },
    col_box: {
        width: '100%',
        borderRadius: '5px',
        padding:'45px 0',

        '& a': {
            color: '#000',

        }
    },
    col_con: {
        '& p': {
            margin: '20px 0 0',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700,
            color: ' #000',
        },
        '& h3': {
            margin: '20px 0 0',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 700,
            color: ' #000',
        },

    }

})

const Modal = () => {
    const data = [
        {
            "img": "./img/Group_1611-removebg-preview-2.png.webp",
            "name": 'Fruits ',
            "namber": "6"
        },
        {
            "img": "./img/Group_1615-removebg-preview-1.png.webp",
            "name": 'Fresh Nuts  ',
            "namber": "5"
        },
        {
            "img": "./img/Group_1610-removebg-preview-2.png.webp",
            "name": 'Vegetables',
            "namber": "4"
        },
        {
            "img": "./img/Group_1616-removebg-preview-1.png.webp",
            "name": 'Spices ',
            "namber": "4"
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
                                <Box>
                                    <img src={item.img} alt='aa' />
                                </Box>
                                <Box className={classes.col_con}>
                                    <Typography variant='h3'>{item.name}</Typography>
                                    <Typography>({item.namber})</Typography>
                                </Box>
                            </Link>
                        </Box>

                    ))
                }
            </Box>
        </Box>
    )
}

export default Modal
