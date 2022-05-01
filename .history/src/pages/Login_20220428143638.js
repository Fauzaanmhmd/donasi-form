import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Field, useForm } from 'react-final-form';
import Button from '@mui/material/Button';
import { InputLabel } from '@mui/material';
import { Grid, TextField, Card, CardContent } from '@material-ui/core';
import { useState } from "react";


const Login = () => {

  const [focusDonasi, setFocusDonasi] = useState(false)
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const workingEmailValidator = email => !['gmail'].includes(email?.split('@')[1]?.split('.')[0])
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  const handleFocus = () => {
    setFocusDonasi(true)
  }

  const requiredEmail = value => (value ? undefined : 'Email Tidak Boleh Kosong')
  const requiredPassword = value => (value ? undefined : 'Password Tidak Boleh Kosong')
  const requiredDonation = value => (value ? undefined : 'Donasi Tidak Boleh Kosong')

  return (
    <Box
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
                    <TextField {...input} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth onInput={(e) => validateEmail(e.target.value)} style={{
                      margin: "10px"
                    }} />
                    {meta.error && meta.touched && <p style={{
                      marginLeft: "14px",
                      marginRight: "14px",
                      marginTop: "3px",
                      fontSize: "0.75rem"
                    }}>{meta.error}</p>}
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
                    <TextField {...input} type="password" placeholder="Masukkan Password Kamu" label="Password" variant="outlined" fullWidth style={{
                      margin: "10px"
                    }} />
                    {meta.error && meta.touched && <p>{meta.error}</p>}
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
                    <TextField {...input} type="number" placeholder="Masukkan Donasi Kamu Kamu" label="Donasi" variant="outlined" onKeyPress={handleFocus} fullWidth style={{
                      margin: "10px"
                    }} />
                    {meta.error && meta.touched && <p>{meta.error}</p>}
                  </Grid>
                  {
                    focusDonasi && (
                      <div>RP</div>
                    )
                  }
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
                <Button variant='contained' disabled={submitting} fullWidth sx={{
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