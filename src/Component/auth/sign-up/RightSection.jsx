import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography, Box, Paper, TextField, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


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
    columnGap: "20px"
}));

const Button = styled('button')(({ theme }) => ({
    ...theme.typography.button,
    cursor: 'pointer',
    maxWidth: '482px',
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
    top: '562px',
    left: '851px',
    width: '212px',
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


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },

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
    
  }));

  
const RightSection = () => {
    const naviate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const styles = {
        or: {
            color: '#7c7c7c',
            fontSize: '16px',
            fontFamily: 'Lexend Deca',
            lineHeight: '24px',
            textAlign: 'center',
        },
    };

    return (
        <Box className="right-card ">
            <Box className="right-card-inner ">
                <Typography variant="p" className='text' sx={{ textAlign: "center" }}>
                    Sign up
                </Typography>
                <Typography variant="p" className='para'>
                    Set up your account to start tracking',
                </Typography>
                <TextField
            label="Custom Input"
            style={{ backgroundColor: 'lightblue', borderRadius: '5px' }}
        />


                <FormControl variant="standard" >
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Bootstrap
                    </InputLabel>
                    <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
                </FormControl>

                <FormControl variant="outlined" className='login_input' sx={{ my: 2 }}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                </FormControl>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => naviate("/sign-in")}>Sign in</Button>
                <HorizontalDivider>
                    <Divider />
                    <Typography variant="p" style={styles.or}>
                        or
                    </Typography>
                    <Divider />
                </HorizontalDivider>
                <Box className="box-item" >
                    <HorizontalDivider>
                        <OauthButton> Google </OauthButton>
                        <OauthButton> Facebook</OauthButton>
                    </HorizontalDivider>
                    <Typography variant="p" className="bottom-text" onClick={() => naviate("/sign-in")}>
                        Don't have an account? Sign up
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RightSection