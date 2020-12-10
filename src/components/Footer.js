import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Divider,
  Grid, 
  Typography,
  Link
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    minHeight: '230px',
    position: 'relative',
    marginTop: '700px',
    borderTop: '1px solid' + theme.palette.primary.main,
  },
  "@media(max-width: 1380px)": {
    root: {
      marginTop: '1100px'
    }
  },
  "@media(max-width: 991px)": {
    root: {
      marginTop: '1100px'
    }
  },
  "@media(max-width: 923px)": {
    root: {
      marginTop: '1300px'
    }
  },
  "@media(max-width: 800px)": {
    root: {
      marginTop: '1400px'
    }
  },
  grid: {
    minHeight: '230px',
    padding: '40px',
  },
  title: {
    color: theme.palette.primary.main,
    paddingBottom: '10px'
  },
  subtitle: {
    paddingTop: '10px'
  },
  button: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    margin: '10px 10px 10px 0'
  },
  link: {
    fontSize: '22px',
    color: theme.palette.secondary.main
  }
}))

function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item sm={12} lg={3} className={classes.grid}>
          <Typography variant="h4" className={classes.title}>
            Sobre
          </Typography>
          <Divider />
          <Typography variant="h5" className={classes.subtitle}>
            Denky, um Bot multifuncional para
            seu servidor Discord.
          </Typography>
          <Button variant="outlined" className={classes.button} href="https://denkybot.ga/add">
            Adicionar
          </Button>
        </Grid>
        <Grid item sm={12} lg={3} className={classes.grid}>
          <Typography variant="h4" className={classes.title}>
              Links
          </Typography>
          <Divider />
          <Typography className={classes.subtitle}>
            <Link href="https://denkybot.ga/add" className={classes.link}>
              Adicionar
            </Link> <br />
            <Link href="https://discord.gg/bVWdscg" className={classes.link}>
              Suporte
            </Link> <br />
            <Link href="https://top.gg/bot/704517722100465746" className={classes.link}>
              Votar
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={12} lg={3} className={classes.grid}>
          <Typography variant="h4" className={classes.title}>
              Créditos
          </Typography>
          <Divider />
          <Typography variant="h5" className={classes.subtitle}>
            Bot by Davi Patricio#0001 <br />
            &lt;/&gt; by patek#0001
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;