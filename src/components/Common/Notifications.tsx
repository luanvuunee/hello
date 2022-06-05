import { Alert, Button, IconButton, Snackbar, Stack } from "@mui/material"
import React, { FC } from "react";

export interface NotificationProp {
  severity ?: "error"| "warning" |"info" |"success"
  
}


const Notifications: FC<NotificationProp> = (props) => {
  const {severity ,children} = props
  
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert severity={severity}></Alert>
    </Stack>
  );
}
export default Notifications