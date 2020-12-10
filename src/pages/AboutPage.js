import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    borderBottom: '1px solid' + theme.palette.primary.main,
    borderTop: '1px solid' + theme.palette.primary.main,
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: theme.palette.primary.main,
    paddingBottom: '20px'
  },
}))

function AboutPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <Typography variant="h3" className={classes.title} >
          Recursos
        </Typography>
        <Typography variant="h5">
          ✉️ Suporte em nosso servidor de suporte <br />
          🎉 Sorteios (Giveaways) <br />
          🇫🇷 Vários idiomas (português, inglês) <br />
          💁 Anti Spam, Anti Flood, Anti Emoji Spam & Anti Menções em Massa <br />
          ⚙️ Configuração do Servidor (comandos ignorados, anti-convites, etc ...) <br />
          ❌ Prefixo personalizável <br />
          🔧 Auto Crosspost, Reaction Roles, Auto Role & Auto Moderação <br />
          🐶 Fotos de Animais <br />
          🎮 Estatísticas de Jogos <br />
          🎉 Utilitades <br />
          😂 Diversão <br />
          ⏰ Lembretes <br />
          😲 Edição de Texto <br />
        </Typography>
      </div>
    </div>
  )
}

export default AboutPage;