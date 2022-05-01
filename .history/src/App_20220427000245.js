/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';
import image from './assets/ist.png'
import bgImage from './assets/logo.png'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


function App() {
  return (
    <div>
      <div id='root'>
        <div>
          <header>
            <div style={{display:"flex",
          alignItems:"center"
          }}>
              <Button>
                <img src={image}/>
              </Button>
              <Typography>Donasi</Typography>
              <div>
              </div>
            </div>
          </header>
          <Box
          sx={{backgroundColor:"rgb(244, 247, 251)",
          backgroundImage:"url(https://frosty-bohr-0b24fe.netlify.app/static/media/logo.82f62bca.png)",
          backgroundImage:{bgImage},
          backgroundRepeat:"no-repeat"
        }}>
      <Login />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
