

import { Box, Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import Notifications from 'components/Common/Notifications';
import { authAction } from '../authSlice';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {

  const dispatch = useAppDispatch()
  const handleLogin = () => {
    dispatch(authAction.login({
      username :'admin', password :'admin',
    }
      
    ))
  }
  const handleLogout = () => {
    dispatch(authAction.logOut())
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      
        
    
      <Paper elevation={1} sx={{p:'1rem' ,width:'20vw',"& .MuiTypography-root":{
        textAlign:"center"
      }}}>
        <Typography variant="h5" component="h1" >
          Quản lý học sinh
        </Typography>
        <Box mt={4} >
          <Button variant="contained" fullWidth color="primary" onClick={handleLogin} sx={{mb:"4px"}}>
            Login Fake
          </Button>

          <Button variant="contained" fullWidth color="primary" onClick={handleLogout}>
            Logout Fake
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
