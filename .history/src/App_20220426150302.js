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
        <div className='MuiBox-root css-i9gxme'>
          <header className='MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-1xt78rp'>
            <div className='MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-191lty2'>
              <Button className='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-sizeMedium css-pio6kb'>
                <img src='./assets/ist.png'></img>
              </Button>
              <div className='MuiTypography-root MuiTypography-h6 css-fyhhyl'>Donasi</div>

            </div>
          </header>
      <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
