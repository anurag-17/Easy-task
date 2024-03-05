import React from 'react'
import { Typography, Box } from '@mui/material';
import bgImg from "../../Assets/svg/leftImg.svg"

const styles = {
    Card: {
        backgroundColor: '#111111',
        borderRadius: '16px',
        padding: '32px',
        height: '100vh',
        width: '100%',
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    Text: {
        color: '#f4f4f4',
        fontSize: '40px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        letterSpacing: '-1px',
        lineHeight: '44px',
        position:"absolute",
        top:'32px',
        left:'32px',
    },
    Image: {
       width:"100%",
       height:"auto"
    },

};


const LeftSection = () => {
    return (
        <Box className="left-card">
            <Typography variant="h1" gutterBottom className="text">
                Easy Task
            </Typography>
            <Box  className="image">
                <img src={bgImg} alt="bg-img" style={{height:"100%",width:"100%"}} loading="lazy"/>
            </Box>
        </Box>
    )
}

export default LeftSection