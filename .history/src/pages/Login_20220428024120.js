import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Field } from 'react-final-form';
import Button from '@mui/material/Button';
import { InputLabel } from '@mui/material';
import { Grid, TextField, Card, CardContent } from '@material-ui/core';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const requiredEmail = value => (value ? undefined : 'Email Tidak Boleh Kosong')
const requiredPassword = value => (value ? undefined : 'Password Tidak Boleh Kosong')
const requiredDonation = value => (value ? undefined : 'Donasi Tidak Boleh Kosong')
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)


const Login = () => {

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
      <Typography variant='h5'>Mari Donasi</Typography>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={requiredEmail}>
              {({ input, meta }) => (
                <div style={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <input {...input} type="text" placeholder="Email" />
                  <TextField {...input} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="lastName" validate={requiredPassword}>
              {({ input, meta }) => (
                <div style={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <input {...input} type="text" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="age"
              validate={composeValidators(requiredDonation, minValue(18))}
            >
              {({ input, meta }) => (
                <div style={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <input {...input} type="text" placeholder="Donasi" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <Button variant='contained' disabled={submitting}>
                Submit
              </Button>
            </div>
            <InputLabel variant='outlined' color='primary' disableAnimation={true} error={true}>tester</InputLabel>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Box>
  )
}

export default Login