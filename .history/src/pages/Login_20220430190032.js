import React from 'react';
import { Box, styled, Button, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Field, useForm } from 'react-final-form';
import { useState, useEffect } from "react";
import root from "../service"


const BoxContainer = styled(Box)({
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
})

const ErrorMessage = styled(Typography)({
  marginLeft: "28px",
  marginRight: "14px",
  marginTop: "-5px",
  fontSize: "0.75rem",
  color: "red",
})

const Content = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "20px",
  paddingRight: "20px",
  startIcon: "none",
})

// const Donasi = styled(TextField)({
//   margin: "10px",
//   "& .MuiInputBase-input": {
//     paddingLeft: "40px",
//   }
// })


const Login = () => {
  const [focusDonasi, setFocusDonasi] = useState(false)
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [quote, setQuote] = useState("")
  const [donasi, setDonasi] = useState(0);


  const getQodDatas = async (e) => {
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
    console.log(e.target.value);
    emailValidation(e.target.value)
  };

  const handleOnChangeDonasi = (e) => {
    console.log(e.target.value, "mantap")
    setDonasi(e.target.value)
  }

  const requiredEmail = value => (value ? undefined : 'Email Tidak Boleh Kosong')
  const requiredPassword = value => (value ? undefined : 'Password Tidak Boleh Kosong')
  const requiredDonation = value => (value ? undefined : 'Donasi Tidak Boleh Kosong')


  return (
    <BoxContainer>
      <Typography variant='h5' sx={{
        marginBottom: "20px"
      }}>Mari Donasi</Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={requiredEmail}>
              {({ input, meta }) => (
                <Content>
                  <Grid item xs={12} style={{
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}>
                    {console.log(meta.error)}
                    {console.log(meta.touched)}
                    {/* {console.log(meta.error !== undefined)} */}
                    <TextField {...input} onChange={handleOnChange} value={email} error={meta.error && meta.touched} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth sx={{
                      margin: "10px",
                    }} />
                    {meta.error && meta.touched && !email && <ErrorMessage>{meta.error}</ErrorMessage>}
                    {isErrorEmail && email && <p>tidak valid</p>}

                  </Grid>
                </Content>
              )}
            </Field>

            <Field name="lastName" validate={requiredPassword}>
              {({ input, meta }) => (
                <Content>
                  <Grid item xs={12} style={{
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}>
                    <TextField {...input} type="password" placeholder="Masukkan Password Kamu" label="Password" onKeyPress={handleFocus} variant="outlined" fullWidth sx={{
                      margin: "10px"
                    }} />
                    {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}

                  </Grid>
                </Content>
              )}
            </Field>
            <Field
              name="donasi"
              validate={requiredDonation}
            >
              {({ input, meta }) => (
                <Content>
                  <Grid item xs={12} style={{
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}>
                    {console.log(donasi)}
                    {
                      focusDonasi && (
                        <div style={{
                          position: "absolute",
                          marginLeft: "20px",
                          marginTop: "28px"
                        }}>RP</div>
                      )
                    }
                    <TextField {...input} onChange={handleOnChangeDonasi} value={email} error={meta.error && meta.touched} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth sx={{
                      margin: "10px",
                    }} />
                    <TextField onChange={(e) => handleOnChangeDonasi(e)} {...input} type="number" placeholder="Masukkan Donasi Kamu Kamu" label="Donasi" variant="outlined" onKeyPress={handleFocus} fullWidth />
                    {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
                  </Grid>
                </Content>
              )}
            </Field>

            <Content>
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
              {quote}
            </Content>
          </form>
        )}
      />
    </BoxContainer>

  )
}

export default Login