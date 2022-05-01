import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';
import image from './assets/ist.png'
import bgImage from './assets/logo.png'
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/material';
import { appStyles } from './style/pages/App'


const Container = styled(Box)({

})

const Content = styled(Box)({
  display: "flex",
  alignItems: "center",
  paddingLeft: "24px",
  paddingRight: "24px"
})

function App() {
  const classes = useLoginStyles();
  return (
    <div>
      <div id='root'>
        <div>
          <header>
            <Content>
              <Button>
                <img src={image} style={{
                  width: "auto",
                  height: "50px",
                  marginRight: "14px"
                }} />
              </Button>
              <Typography variant='h6'>Donasi</Typography>
              <div>
              </div>
            </Con>
          </header>
          <Box className={classes.container}>
            <Login />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
