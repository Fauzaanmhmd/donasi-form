/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


function App() {
  return (
    <div>
      <div id='root'>
        <div>
          <header>
            <div style={{display:"flex"}}>
              <Button>
                <img src='data:image/png;base64,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'></img>
                {/* <img src='./assets/ist.png'></img> */}
              </Button>
              <div>
                <Typography className='MuiTypography-root MuiTypography-h6 css-fyhhyl'>Donasi</Typography>
              </div>
            </div>
          </header>
          <div>
      <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
