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
            O Bot sempre tem atualizações, 
            recebendo cada vez mais novidades,
            e sempre olhando as sugestões do usuários
            que utilizam o Bot!
          </Typography>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.subtitle}>
            Qualidade
          </Typography>
          <Divider />
          <Typography variant="h6" className={classes.text}>
            O Bot possui uma qualidade extremamente boa,
            não demora para responder, possuí ótimos sistemas
            para ajudar na segurança do seu servidor, e 
            comandos para divertir o servidor!
          </Typography>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h5" className={classes.subtitle}>
            Comunidade
          </Typography>
          <Divider />
          <Typography variant="h6" className={classes.text}>
             Possuímos um servidor de suporte,
             onde olhamos as sugestões, dicas,
             bugs, para melhorar o Bot, seja resolvendo
             bugs ou até mesmo adicionando novas funções!
          </Typography>
        </Paper>
      </Grid> 
    </div>
  )
}

export default ReasonPage;