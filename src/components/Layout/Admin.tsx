import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/material';
import { Sidebar } from 'components/Common';
import Header from 'components/Common/Header';
import Dashboard from 'features/dashboard';
import StudentFeature from 'features/students';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '230px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,
    minHeight: '100vh',
    bgcolor: theme.palette.background.paper,

  },
  header: {
    gridArea: 'header',

  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    bgcolor: theme.palette.background.paper,
  },

  main: {
    gridArea: 'main',
    bgcolor: theme.palette.background.paper,
    padding: theme.spacing(2, 3)
  }
}))

export function AdminLayout() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Switch>
          <Route path="/admin/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/admin/students">
            <StudentFeature/>
          </Route>
        </Switch>
      </Box>
    </Box>

  );
}
