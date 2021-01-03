import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import { 
  CssBaseline, 
  Divider, 
  Grid, 
  Paper, 
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '50%',
    width: '80%',
    margin: '0 auto',
    padding: '300px 0',
    flexGrow: 1,
    paddingBottom: '100px',
  },
  title: {
    color: theme.palette.primary.main,
    paddingBottom: '70px',
    textAlign: 'center'
  },
  subtitle: {
    color: theme.palette.primary.main,
    paddingBottom: '10px'
  },
  paper: {
    minHeight: 340,
    width: 320,
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  text: {
    paddingTop: '10px'
  }
}))

function ReasonPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Typography variant="h3" className={classes.title}>
        Por que escolher o Denky?
      </Typography>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.subtitle}>
            Atualizações
          </Typography>
          <Divider />
          <Typography variant="h6" className={classes.text}>
            Denky sempre recebe atualizações, 
            com cada vez mais novidades,
            sempre estamos vendo sugestões dos usuários
            que utilizam o bot diariamente!
          </Typography>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.subtitle}>
            Qualidade
          </Typography>
          <Divider />
          <Typography variant="h6" className={classes.text}>
            Denky possui uma ótima qualidade extremamente,
            diferentemente de outros bots.
            Respostas rápidas, diversos sistemas
            úteis, para ajudar na segurança e automação do seu servidor, além 
            de mais de <strong>100 comandos</strong> para usar gratuitamente!
          </Typography>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.subtitle}>
            Comunidade
          </Typography>
          <Divider />
          <Typography variant="h6" className={classes.text}>
             Possuímos um servidor de suporte,
             onde olhamos todas as sugestões, dicas,
             denuncias bugs, sempre com o intuito de melhorar o Bot.
          </Typography>
        </Paper>
      </Grid> 
    </div>
  )
}

export default ReasonPage;
