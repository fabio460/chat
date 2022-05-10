import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import './AbasDeMensagens.css'
import corAleatoria from '../../funcoesUteis';
export default function AbasDeMensagens() {
  return (
    <List className='' >
      <ListItem >
        <div className='listaDeMensagensRight'>
            <div className='item'>
                <ListItemText primary={<div className='mensagemBodyEmissor'>
                   Ola Ruth, tudo bem com voce, que horas vc vai para a escola
                </div>} secondary="Jan 7, 12:20" />
                <ListItemAvatar>
                    <Avatar alt={"Fabio"} src="/static/images/avatar/5.jpg" component="span" 
                          sx={{background:corAleatoria(), margin:'0px 0px 0px 14px'}}
                    />
                </ListItemAvatar>
            </div>
        </div>
      </ListItem>
      <ListItem >
        <div className='listaDeMensagemLeft'>
            <div className='item'>
 
                <ListItemAvatar>
                    <Avatar alt={"Rhuth"} src="/static/images/avatar/5.jpg" component="span" 
                          sx={{background:corAleatoria(), margin:'0px 14px 0px 14px'}}
                    />
                </ListItemAvatar>
                <ListItemText primary={<div className='mensagemBodyReceptor'>
                   Ola Fabio, tudo bem, eu irei a escola na parte da manhâ
                </div>} secondary="Jan 7, 12:29" />
            </div>
        </div>
      </ListItem>
      <ListItem >
        <div className='listaDeMensagensRight'>
            <div className='item'>
                <ListItemText primary={<div className='mensagemBodyEmissor'>
                   Ok vou esperar vc chegar, vai com Deus
                </div>} secondary="Jan 7, 12:30" />
                <ListItemAvatar>
                    <Avatar alt={"Fabio"} src="/static/images/avatar/5.jpg" component="span" 
                          sx={{background:corAleatoria(), margin:'0px 0px 0px 14px'}}
                    />
                </ListItemAvatar>
            </div>
        </div>
      </ListItem>
    </List>
  );
}
