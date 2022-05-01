/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';


function App() {
  return (
    <div>
      <div id='root'>
        <div>
          <header>
            <div style={{display:"flex"}}>
              <Button>
                <img src='assets/ist.png'></img>
              </Button>
              <div>Donasi</div>
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
