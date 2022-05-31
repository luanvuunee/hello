

import { Box, Button, Paper, Typography } from '@mui/material';
import * as React from 'react';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
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
        <Box mt={4}>
          <Button variant="contained" fullWidth color="primary">
            Login Fake
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
