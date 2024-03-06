import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography, Box, FormControl, InputLabel, Input, FormControlLabel, Checkbox } from '@mui/material';
import { User } from '../../../Assets/svg/User';
import Idcard from '../../../Assets/svg/Idcard';
import Envelope from '../../../Assets/svg/Envelope';
import Key from '../../../Assets/svg/Key';
import Lock from '../../../Assets/svg/Lock';

const Button = styled('button')(({ theme }) => ({
    ...theme.typography.button,
    cursor: 'pointer',
    // maxWidth: '482px',
    width: "100%",
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
    textTransform: "initial",
}));

const styles = {
    label: {
        color: '#030303',
        fontSize: '14px',
        fontFamily: 'Lexend Deca',
        fontWeight: 500,
        lineHeight: '16px',
    },
    inputbox: {
        width: "100%",
        padding: '0px 16px  0px  8px ',
        border: '1px solid #dddddd',
        boxSizing: 'border-box',
        borderRadius: '8px',
        backgroundColor: 'rgba(235,235,235,0)',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: '20px'
    },
    input: {
        height: '44px',
        color: '#212529',
        fontSize: '14px',
        fontFamily: 'Lexend Deca',
        fontWeight: 500,
        lineHeight: '18px',
        outline: 'none',
        border: "none",
        width: "100%",
        textIndent: "10px"
    },
    inputWithoutBorder: {
        borderBottom: 'none' // Add this line to remove the bottom border
    },
    Container: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '20px',
        height: '20px',
        color: 'rgba(124, 124, 124, 0)',

        backgroundColor: 'rgba(235, 235, 235, 0)',
        borderRadius: '4px',
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(221, 221, 221, 1)',
    },
    Check: {
        display: 'none',
        transition: 'left 0.3s ease',
        zIndex: 1,
    },
    checkInput: {
        position: 'absolute',
        opacity: 0,
        visibility: 'hidden',
        width: '1px',
        height: '1px',
        pointerEvents: 'none',
    },
};

const RightSection = () => {
    const naviate = useNavigate()
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <Box className="right-card signup">
            <Box className="login-card-inner ">
                <Box className="signup_head">
                    <Typography variant="p" className='text'>
                        Sign up
                    </Typography>
                    <Typography variant="p" className='para'>
                        Set up your account to start tracking,
                    </Typography>
                </Box>

                {/* ----------- form start ----------- */}
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="name" sx={styles.label}>
                        Your full name
                    </InputLabel>
                    <Box sx={styles.inputbox}>
                        <input type="text" style={styles.input} placeholder='First Last' />
                        <Idcard />
                    </Box>
                </FormControl>

                <FormControl variant="standard" sx={{ mt: 2.3 }}>
                    <InputLabel shrink htmlFor="name" sx={styles.label}>
                        Email
                    </InputLabel>
                    <Box sx={styles.inputbox}>
                        <input type="text" style={styles.input} placeholder='Your email address' />
                        <Envelope />
                    </Box>
                </FormControl>

                <FormControl variant="standard" sx={{ mt: 2.3 }}>
                    <InputLabel shrink htmlFor="name" sx={styles.label}>
                        Username
                    </InputLabel>
                    <Box sx={styles.inputbox}>
                        <input type="text" style={styles.input} placeholder='Choose a username' />
                        <User />
                    </Box>
                </FormControl>

                <FormControl variant="standard" sx={{ mt: 2.3 }}>
                    <InputLabel shrink htmlFor="name" sx={styles.label}>
                        Set your password
                    </InputLabel>
                    <Box sx={styles.inputbox}>
                        <input type="text" style={styles.input} placeholder='************' />
                        <Key />
                    </Box>
                </FormControl>

                <FormControl variant="standard" sx={{ mt: 2.3 }}>
                    <InputLabel shrink htmlFor="name" sx={styles.label}>
                        Confirm your password
                    </InputLabel>
                    <Box sx={styles.inputbox}>
                        <input type="text" style={styles.input} placeholder='************' />
                        <Lock />
                    </Box>
                </FormControl>

                <Box sx={{py:2}} >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isChecked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'checkbox' }}
                                //    style={styles.Container}
                                sx={{
                                    border: '1px solid rgba(221, 221, 221, 1)',
                                    color: 'rgba(124, 124, 124, 0)',
                                    backgroundColor: 'rgba(235, 235, 235, 0)',
                                    borderRadius: '4px',
                                    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.08)',
                                    width: '20px',
                                    height: '20px',
                                    marginX: 2,
                                    '&.Mui-checked': {
                                        color: 'black',
                                    },
                                }}
                            />
                        }
                        label="By signing up, you agree to our Terms and Privacy Policy."
                        sx={{
                            '& .MuiTypography-root': {
                                // Global CSS to style the label
                                fontSize: '14px',
                                fontFamily: 'Lexend Deca',
                                fontWeight: 500,
                                lineHeight: '18px',
                            }
                        }}
                    />
                </Box>

                <Button variant="contained" onClick={() => naviate("/sign-in")}>get started</Button>
                {/* ----------- form ens ----------- */}

                <Box className="box-item" >

                    <Typography variant="p" className="bottom-text" >
                        <span className='left'>Already a member? </span>
                        <span className='right' onClick={() => naviate("/sign-in")}>Log in</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RightSection