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
          ✉️ Suporte em nosso servidor de suporte

🔔 Anúncios

💡 Sistema de Sugestões

🎉 Giveaways / Sorteios

🤑 Sistema de Tickets

🇫🇷 Multiplos idiomas (Português e Inglês)

⚙️ Moderação (slowmode, ban, kick, softban, limpar, warn, warns, warn config)

💁 **Anti Spam, Anti Flood**, Anti Emoji Spam, Anti Mass Mentions, **Anti Mass Ban** e **Anti Mass Kick**.

😍 Prefixo alterável

🔧 Reaction Roles, Auto Role & Auto Mod (auto moderação)

😎 Anti convites e Anti Links

🎮 Informações sobre jogos

🎉 Utilidades, denuncias

⏰ Lembretes / timers

😲 Edição de Texto
        </Typography>
      </div>
    </div>
  )
}

export default AboutPage;
