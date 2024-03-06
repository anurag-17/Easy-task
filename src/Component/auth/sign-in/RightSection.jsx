import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography, Box, Paper, TextField, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';

const Divider = styled('div')(({ theme }) => ({
    height: '1px',
    backgroundColor: '#dddddd',
    borderRadius: '12px',
    width: "100%",
    margin: "30px 0"
}));
const HorizontalDivider = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "20px",
    rowGap: "15px"
}));

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
    textTransform: "initial"
}));
const OauthButton = styled('button')(({ theme }) => ({
    cursor: 'pointer',
    // width: '212px',
    width: "100%",
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    backgroundColor: '#ebebeb',
    color: '#212529',
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    fontWeight: 600,
    lineHeight: '24px',
    outline: 'none',
}));


const styles = {
    Input: {
        top: '235px',
        left: '846px',
        width: '468px',
        height: '48px',
        padding: '0px 8px',
        border: '1px solid #dddddd',
        boxSizing: 'border-box',
        borderRadius: '8px',
        backgroundColor: 'rgba(235,235,235,0)',
        color: '#212529',
        fontSize: '14px',
        fontFamily: 'Lexend Deca',
        fontWeight: 500,
        lineHeight: '18px',
        outline: 'none',
    },
    or: {
        color: '#7c7c7c',
        fontSize: '16px',
        fontFamily: 'Lexend Deca',
        lineHeight: '24px',
        textAlign: 'center',
    },
    input: {
        height: '48px',
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
};

const RightSection = () => {
    const naviate = useNavigate()
    const theme = useTheme();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    return (
        <Box className="right-card ">
            <Box className="login-card-inner ">
                <Typography variant="p" className='text'>
                    Sign in
                </Typography>

                <FormControl variant="standard">
                    <Box sx={styles.inputbox}>
                        <input type="email" style={styles.input} placeholder='Email' />
                        {/* <Idcard /> */}
                    </Box>
                </FormControl>

                <FormControl variant="standard">
                    <Box sx={styles.inputbox}>
                        <input type="text" style={styles.input} placeholder='First Last' />
                        <Visibility sx={{cursor:'pointer'}} />
                    </Box>
                </FormControl>

                {/* <FormControl sx={{ py: 1 }}>
                    <TextField label="Email" variant="outlined" className='login_input' sx={{ width: "100%" }} />
                </FormControl> */}
                {/* <FormControl variant="outlined" className='login_input' sx={{ my: 2 }} >
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ border: 'none', outline: "none" }}>Password</InputLabel >
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl> */}
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => naviate("/home")}>Sign in</Button>
                <HorizontalDivider>
                    <Divider />
                    <Typography variant="p" style={styles.or}>
                        or
                    </Typography>
                    <Divider />
                </HorizontalDivider>
                <Box className="box-item" >
                    <HorizontalDivider sx={{
                        width: '100%',
                        [theme.breakpoints.down('sm')]: {
                            flexWrap: 'wrap',
                        },
                    }}>
                        <OauthButton> Google </OauthButton>
                        <OauthButton> Facebook</OauthButton>
                    </HorizontalDivider>

                    <Typography variant="p" className="bottom-text" >
                        <span className='left'> Don't have an account?</span>
                        <span className='right' onClick={() => naviate("/sign-up")}> Sign up</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RightSection