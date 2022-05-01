import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Field, useForm } from 'react-final-form';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@material-ui/core';
import { useState } from "react";
import { createTheme } from '@mui/material/styles';



const Login = () => {


  const [focusDonasi, setFocusDonasi] = useState(false)
  // const [inputText, setInputText] = useState(false)
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };


  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  const handleFocus = () => {
    setFocusDonasi(true)
  }

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const requiredEmail = value => (value ? undefined : 'Email Tidak Boleh Kosong')
  const requiredPassword = value => (value ? undefined : 'Password Tidak Boleh Kosong')
  const requiredDonation = value => (value ? undefined : 'Donasi Tidak Boleh Kosong')

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <Box
      theme={{ light }}
      sx={{
        margin: "20px 40px",
        padding: "40px",
        display: "flex",
        borderRadius: "25px",
        minWidth: "500px",
        height: "470px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        placeContent: "center start"
      }}
    >
      <Typography variant='h5' sx={{
        marginBottom: "20px"
      }}>Mari Donasi</Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={requiredEmail}>
              {({ input, meta }) => (
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "20px",
                  paddingRight: "20px"
                }}>
                  <Grid item xs={12} style={{
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}>
                    <TextField {...input} value={email} onChange={emailValidation} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth style={{
                      margin: "10px"
                    }} />
                    {meta.error && meta.touched && <p style={{
                      marginLeft: "28px",
                      marginRight: "14px",
                      marginTop: "-5px",
                      fontSize: "0.75rem",
                      color: "red"
                    }}>{meta.error}</p>}
                    <p className="message">{message}</p>
                  </Grid>
                </div>
              )}
            </Field>

            <Field name="lastName" validate={requiredPassword}>
              {({ input, meta }) => (
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "20px",
                  paddingRight: "20px"
                }}>
                  <Grid item xs={12} style={{
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}>
                    <TextField {...input} type="password" placeholder="Masukkan Password Kamu" label="Password" onKeyPress={handleFocus} variant="outlined" fullWidth style={{
                      margin: "10px"
                      // borderColor: inputText == true ? 'yellow' : 'black'
                    }} />
                    {meta.error && meta.touched && <p style={{
                      marginLeft: "28px",
                      marginRight: "14px",
                      marginTop: "-5px",
                      fontSize: "0.75rem",
                      color: "red"
                    }}>{meta.error}</p>}
                  </Grid>
                </div>
              )}
            </Field>
            <Field
              name="donasi"
              validate={requiredDonation}
            >
              {({ input, meta }) => (
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "20px",
                  paddingRight: "20px"
                }}>
                  <Grid item xs={12} style={{
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}>
                    {
                      focusDonasi && (
                        <div style={{
                          position: "absolute",
                          marginLeft: "20px",
                          marginTop: "28px"
                        }}>RP</div>
                      )
                    }
                    <TextField {...input} type="number" placeholder="Masukkan Donasi Kamu Kamu" label="Donasi" variant="outlined" onKeyPress={handleFocus} fullWidth style={{
                      margin: "10px",
                      position: "relative",
                      "&input": { paddingLeft: "40px" }
                    }} />
                    {meta.error && meta.touched && <p style={{
                      marginLeft: "28px",
                      marginRight: "14px",
                      marginTop: "-5px",
                      fontSize: "0.75rem",
                      color: "red"
                    }}>{meta.error}</p>}
                  </Grid>
                </div>
              )}
            </Field>

            <div style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
              paddingRight: "20px"
            }}>
              <Grid item xs={12} style={{
                paddingLeft: "20px",
                paddingRight: "20px"
              }}>
                <Button variant='contained' disabled={submitting} onClick={handleSubmit} fullWidth sx={{
                  margin: "10px"
                }}>
                  Submit
                </Button>
              </Grid>
            </div>
          </form>
        )}
      />
    </Box>
  )
}

export default Login