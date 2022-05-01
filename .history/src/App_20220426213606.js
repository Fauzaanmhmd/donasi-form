/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const useStyles = styled({
    marginLeft: "16px",
    display: "flex",
    alignItems: "center"
})

function App() {
  return (
    <Box
    sx={{
      width: {
        xs: 100, // theme.breakpoints.up('xs')
        sm: 200, // theme.breakpoints.up('sm')
        md: 300, // theme.breakpoints.up('md')
        lg: 400, // theme.breakpoints.up('lg')
        xl: 500, // theme.breakpoints.up('xl')
      },
    }}
  >
    This box has a responsive width.
  </Box>
  );
}

export default App;
