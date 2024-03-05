import React from 'react'
import { Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const styles = {
    Card: {
        backgroundColor: '#111111',
        borderRadius: '16px',
        padding: '32px',
        height: '100vh',
    },
    Text: {
        color: '#212529',
        fontSize: '48px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        letterSpacing: '-1px',
        lineHeight: '56px',
        paddingBottom:"15px",
        textAlign:"left"
    },
    Para: {
        color: '#444444',
        fontSize: '16px',
        fontFamily: 'Lexend Deca',
        lineHeight: '24px',
        paddingBottom:"24px"
    },
    Bottomtext: {
        color: '#444444',
        fontSize: '16px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '24px',
        textAlign: 'center',
        paddingTop:"20px"
    },
    BoxItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    rightCard: {
        backgroundColor: 'rgba(250,250,250,0)',
        borderRadius: '16px',
        border: '1px solid #ebebeb',
        boxSizing: 'border-box',
        height: '100vh',
        padding: '32px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingX:"100px"
    },

};

const Button = styled(Paper)(({ theme }) => ({
    cursor: 'pointer',
    maxWidth: '482px',
    width:"100%",
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    backgroundColor: '#e60d1a',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    fontWeight: 600,
    lineHeight: '24px',
    outline: 'none',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform:"capitalize"
}));


const RightSection = () => {
    return (
        <Box  className="right-card ">
            <Typography variant="p" className='text'>
                Easy Task
            </Typography>
            <Typography variant="p" className='para'>
            With only the features you need, Easy Task is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.
            </Typography>
            <Box className="box-item">
            <Button variant="contained">Get started</Button>
            <Typography variant="p" className="bottom-text">
                Already have an account? Sign in
            </Typography>
            </Box>
        </Box>
    )
}

export default RightSection