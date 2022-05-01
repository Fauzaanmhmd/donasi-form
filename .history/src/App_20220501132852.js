import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';
import image from './assets/ist.png'
import bgImage from './assets/logo.png'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { appStyles } from './style/pages/App'


const App = () => {
  const classes = appStyles();
  return (
    <div>
      <div id='root'>
        <div>
          <header>
            <Box className={classes.container}>
              <Button>
                <img src={image} style={{
                  width: "auto",
                  height: "50px",
                  marginRight: "14px"
                }} />
              </Button>
              <Grid className={classes.title}>
                <Typography variant='h6'>Donasi</Typography>
              </Grid>
              <div>
              </div>
            </Box>
          </header>
          <Box className={classes.content}>
            <Login />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
