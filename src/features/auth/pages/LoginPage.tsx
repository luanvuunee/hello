

import { Box, Button, CircularProgress, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import Notifications from 'components/Common/Notifications';
import { useSelector } from 'react-redux';
import { authAction, selectedIsLogging } from '../authSlice';

export interface LoginPageProps { }

export default function LoginPage(props: LoginPageProps) {

  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(selectedIsLogging)
  const handleLogin = () => {
    dispatch(authAction.login({
      username: 'admin', password: 'admin',
    }

    ))
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
      <Paper elevation={1} sx={{
        p: '1rem', width: '20vw', "& .MuiTypography-root": {
          textAlign: "center"
        }
      }}>
        <Typography variant="h5" component="h1" >
          Quản lý học sinh
        </Typography>
        <Box mt={4} >
          <Button variant="contained" fullWidth color="primary" onClick={handleLogin} sx={{ mb: "4px" }}>

            {isLoggedIn && <CircularProgress size={20} color="warning" />}
            &nbsp;
            Login Fake
          </Button>


        </Box>
      </Paper>
    </Box>
  );
}
