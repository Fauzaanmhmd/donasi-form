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
      backgroundColor: "red",
      width: "100%",
      height: {
        xl: 1000
      }
    }}
  >
    This box has a responsive width.
  </Box>
  );
}

export default App;
