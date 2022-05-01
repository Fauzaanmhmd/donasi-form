/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';
import image from './assets/ist.png'
import Typography from '@mui/material';


function App() {
  return (
    <div>
      <div id='root'>
        <div>
          <header>
            <div style={{display:"flex",
          alignItems:"center",
          backgroundColor:"rgb(244, 247, 251)"}}>
              <Button>
                <img src={image}/>
              </Button>
              <Typography>Donasi</Typography>
              <div>
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
