import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Form } from 'react-final-form';


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
      <Form onSubmit={onSubmit}>
        {props => (
          <form onSubmit={props.handleSubmit}>

            ... fields go here...

            <button type="submit">Submit</button>
          </form>
        )}
      </Form>
    </Box>
  )
}

export default Login