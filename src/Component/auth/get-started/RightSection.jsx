import React from 'react'
import { Typography, Box, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

// const Button = styled(Paper)(({ theme }) => ({
//     cursor: 'pointer',
//     maxWidth: '482px',
//     width: "100%",
//     height: '48px',
//     padding: '0px 8px',
//     border: '0',
//     boxSizing: 'border-box',
//     borderRadius: '8px',
//     backgroundColor: '#e60d1a',
//     color: '#ffffff',
//     fontSize: '16px',
//     fontFamily: 'Lexend Deca',
//     fontWeight: 600,
//     lineHeight: '24px',
//     outline: 'none',
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     textTransform: "capitalize"
// }));

export const styles = {
    button: {
        cursor: 'pointer',
        maxWidth: '482px',
        width: "100%",
        height: '48px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '8px',
        // backgroundColor: '#e60d1a',
        color: '#ffffff',
        fontSize: '16px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '24px',
        outline: 'none',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize"
    },
};


const RightSection = () => {
    const naviate = useNavigate()

    return (
        <Box className="right-card ">
            <Box className="right-card-inner ">
                <Typography variant="p" className='text'>
                    Easy Task
                </Typography>
                <Typography variant="p" className='para'>
                    With only the features you need, Easy Task is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.
                </Typography>
                <Box className="box-item">
                    <Button variant="contained" onClick={() => naviate("/sign-in")} color="primary" style={styles.button}>Get started</Button>
                    <Typography variant="p" className="bottom-text" >
                        <span className='left'> Already have an account?</span>
                        <span className='right' onClick={() => naviate("/sign-in")}> Sign in</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RightSection