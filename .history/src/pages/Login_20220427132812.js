import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form, Field } from 'react-final-form';
import { render } from 'react-dom'
import Button from '@mui/material/Button';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
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
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <div style={{
                  display: "flex",
                  flexDirection: "row"
                }}>
                  <input {...input} type="text" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} type="text" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="age"
              validate={composeValidators(required, mustBeNumber, minValue(18))}
            >
              {({ input, meta }) => (
                <div>
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
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Box>
  )
}

export default Login