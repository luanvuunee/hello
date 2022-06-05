
import { makeStyles } from '@material-ui/core';
import { Dashboard, PersonTwoTone } from '@material-ui/icons';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
export interface SidebarProps {
}


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%', maxWidth: 360, bgcolor: theme.palette.background.paper
  },
  navlinks: {
    color:'inherit',
    textDecoration:'none',

    '&.active > div': {
      backgroundColor: '#A9A9A9'
    }
  }
  
}))

export function Sidebar(props: SidebarProps) {
const classes =useStyles()
  return (
    <Box className={classes.root}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to="/admin/dashboard" className={classes.navlinks} >
            <ListItem disablePadding button>
              <ListItemButton>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/admin/students" className={classes.navlinks}>
            <ListItem disablePadding button>
              <ListItemButton>
                <ListItemIcon>
                  <PersonTwoTone />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </nav>

    </Box>
  );
}
