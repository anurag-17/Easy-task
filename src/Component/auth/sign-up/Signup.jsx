import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';
import LeftSection from '../LeftSection';
import RightSection from './RightSection';
import "./signup.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

const Signup = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ padding: '20px' }} >
        <Grid item xs={12} md={6} sx={{p:0}}>
          <LeftSection />
        </Grid>
        <Grid item xs={12} md={6} sx={{p:0}}>
          <RightSection  />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;