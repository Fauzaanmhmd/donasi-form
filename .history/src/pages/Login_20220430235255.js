import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Field } from 'react-final-form';
import { useState, useEffect } from "react";
import root from "../service"
import { useLoginStyles } from '../style/pages/Login'




const Login = () => {
  const classes = useLoginStyles();
  const [focusDonasi, setFocusDonasi] = useState(false)
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [quote, setQuote] = useState("")
  const [donasi, setDonasi] = useState("");


  const getQodDatas = async () => {
    try {
      const response = await root.get('qod?language=en')
      setQuote(response.data.contents.quotes[0].quote)
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    getQodDatas()
  }, [])


  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setIsErrorEmail(false);
    } else {
      setIsErrorEmail(true);
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
    emailValidation(e.target.value)
  };

  const handleOnChangeDonasi = (e) => {
    setDonasi(e.target.value)
  }

  const requiredEmail = value => (value ? undefined : 'Email Tidak Boleh Kosong')
  const requiredPassword = value => (value ? undefined : 'Password Tidak Boleh Kosong')
  const requiredDonation = value => (value ? undefined : 'Donasi Tidak Boleh Kosong')


  return (
    <Box className={classes.boxContainer}>
      <Typography variant='h5' className={classes.header}>Mari Donasi</Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={requiredEmail}>
              {({ input, meta }) => (
                <Box className={classes.content}>
                  <Grid item xs={12} className={classes.contentForm}>
                    <TextField
                      {...input}
                      onChange={handleOnChange}
                      value={email}
                      error={meta.error && meta.touched}
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      className={classes.textField}
                    />
                    {meta.error && meta.touched && <Typography className={classes.errorMessage}>{meta.error}</Typography>}
                    {isErrorEmail && email && <p>tidak valid</p>}
                  </Grid>
                </Box>
              )}
            </Field>

            <Field name="lastName" validate={requiredPassword}>
              {({ input, meta }) => (
                <Box className={classes.content}>
                  <Grid
                    item xs={12}
                    className={classes.contentForm}>
                    <TextField
                      {...input}
                      type="password"
                      placeholder="Masukkan Password Kamu"
                      label="Password"
                      onKeyPress={handleFocus}
                      variant="outlined"
                      fullWidth
                      className={classes.textField}
                    />
                    {meta.error && meta.touched && <Typography className={classes.errorMessage}>{meta.error}</Typography>}
                  </Grid>
                </Box >
              )}
            </Field>
            <Field
              name="donasi"
              validate={requiredDonation}
            >
              {({ input, meta }) => (
                <Box className={classes.content}>
                  <Grid className={classes.donasiContainer} item xs={12}>
                    {console.log(donasi)}
                    {
                      (focusDonasi && donasi) && (
                        <Typography className={classes.valueDonasi}>RP</Typography>
                      )
                    }
                    <TextField
                      className={classes.donasi}
                      {...input}
                      onKeyPress={handleFocus}
                      onChange={handleOnChangeDonasi}
                      value={donasi}
                      type="number"
                      placeholder="Masukkan Donasi Kamu Kamu"
                      label="Donasi"
                      variant="outlined"
                      fullWidth />
                    {meta.error && meta.touched && <Typography className={classes.errorMessage}>{meta.error}</Typography>}
                  </Grid>
                </Box>
              )}
            </Field>

            <Box className={classes.content}>
              <Grid item xs={12} className={classes.contentForm}>
                <Button variant='contained' onClick={handleSubmit} className={classes.btnSubmit} fullWidth>
                  Submit
                </Button>
              </Grid>
              <Grid className={classes.containerQuotes}>
                <Typography variant='h4'>Quotes of the day:</Typography>
                <Typography>{quote}</Typography>

              </Grid>
            </Box>
          </form>
        )}
      />
    </Box>

  )
}

export default Login