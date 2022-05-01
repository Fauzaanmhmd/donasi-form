import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';


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
        <Typography variant='h5'>Donasi</Typography>

      </Box>
    )
}

export default Login