import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  CssBaseline
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import DenkyImage from '../images/Denky.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main
  },
  topBar: {
    background: theme.palette.background.paper,
    boxShadow: 'none',
    borderBottom: '1px solid' + theme.palette.primary.main,
  },
  button: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    marginLeft: theme.spacing(1)
  },
  image: {
    maxWidth: '40px',
    borderRadius: '30px',
    marginRight: theme.spacing(1.5)
  }
}));

function TopBar({ setDarkMode, darkMode }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.topBar}>
        <Toolbar>
          <img src={DenkyImage} className={classes.image} alt="Denky Bot" />
          <Typography variant="h6" className={classes.title}>
            Denky
          </Typography>
          <IconButton>
            {darkMode ?
              <Brightness7Icon
                onClick={() => setDarkMode(!darkMode)}
              />
              :
              <Brightness4Icon
                onClick={() => setDarkMode(!darkMode)}
              />
            }
          </IconButton>
          <Button
            className={classes.button}
            variant="outlined"
            href="https://denkybot.ga/add"
          >
            Adicionar
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar;