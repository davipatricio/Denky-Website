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
          ✉️ Suporte em nosso servidor<br/>
🔔 Sistema de anúncios<br/>
💡 Sistema de sugestões<br/>
🎉 Giveaways / Sorteios<br/>
🤑 Sistema de Tickets<br/>
🇫🇷 Multiplos idiomas (Português e Inglês) <br/>
⚙️ Moderação (slowmode, ban, kick, softban, limpar, warn, warns, warn config) <br/>
💁 **Anti Spam, Anti Flood**, Anti Emoji Spam, Anti Mass Mentions, **Anti Mass Ban** e **Anti Mass Kick**. <br/> 
😍 Prefixo alterável <br/>
🔧 Reaction Roles, Auto Role & Auto Mod (auto moderação) <br/>
😎 Proteção, anti convites e Anti Links <br/>
🎮 Informações sobre jogos <br/>
🎉 Utilidades, denuncias <br/>
⏰ Lembretes / timers <br/>
😲 Edição de Texto <br/>
        </Typography>
      </div>
    </div>
  )
}

export default AboutPage;
