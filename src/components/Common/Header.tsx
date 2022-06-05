import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from 'app/hooks';
import { authAction } from 'features/auth/authSlice';


export default function Header() {
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(authAction.logOut())
  }
  return (
    <Box sx={{ flexGrow: 1 ,}}>
      <AppBar position="static" sx={{boxShadow:'unset'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Management
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
