import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  Grid,
  Typography,
  Button
} from '@material-ui/core'

import DenkyImage from '../images/Denky.png'

import AboutPage from './AboutPage'
import ReasonPage from './ReasonPage'
import Footer from '../components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  content: {
    width: '80%'
  },
  image: {
    maxWidth: '270px',
    width: '50%',
    minWidth: '80px',
    borderRadius: '300px'
  },
  title: {
    color: theme.palette.primary.main
  },
  buttons: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    fontSize: '20px',
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(3),
    "&:hover": {
      background: theme.palette.primary.main
    },
  },
  "@media(max-width: 560px)": {
    buttons: {
      width: '100%'
    },
  },
  "@media(max-width: 1280px)": {
    image: {
      display: 'none'
    },
  }
}))

function HomePage() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.content}>
          <Grid container>
            <Grid item sm={12} lg={6} style={{ textAlign: 'left' }}>
              <Typography variant="h2" className={classes.title}>
                Denky
              </Typography>
              <Typography variant="h5" style={{ paddingTop: '10px' }}>
                Olá, sou Denky, o Bot do Discord multifuncional<br />
                com o único objetivo de moderar seu servidor e <br />
                trazer a alegria a todos!
              </Typography>
              <Button
                variant="contained"
                className={classes.buttons}
                href="https://denkybot.ga/add"
              >
                Adicionar
              </Button>
              <Button
                variant="contained"
                className={classes.buttons}
                href="https://discord.gg/bVWdscg"
              >
                Suporte
              </Button>
            </Grid>
            <Grid item sm={12} lg={6} style={{ textAlign: 'right' }}>
              <img
                src={DenkyImage}
                className={classes.image}
                alt="Denky Bot"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <AboutPage />
      <ReasonPage />
    </>
  )
}

export default HomePage;