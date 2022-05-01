import React from 'react';
import './App.css';
import Login from './pages/Login'
import Button from '@mui/material/Button';
import image from './assets/ist.png'
import bgImage from './assets/logo.png'
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/material';


const Container = styled (Box) ({
  backgroundColor: "rgb(244, 247, 251)",
  backgroundImage: "url(https://frosty-bohr-0b24fe.netlify.app/static/media/logo.82f62bca.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100% 100px",
  padding: "64px 24px",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  boxSizing: "border-box",
  placeContent: "center start"
})

function App() {
  return (
    <div>
      <div id='root'>
        <div>
          <header>
            <div style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "24px",
              paddingRight: "24px"
            }}>
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
            </div>
          </header>
          <Container>
            <Login />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
