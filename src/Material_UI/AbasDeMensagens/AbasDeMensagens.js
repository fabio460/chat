import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useSelector} from 'react-redux'
import './AbasDeMensagens.css'
import corAleatoria from '../../funcoesUteis';

export default function AbasDeMensagens() {
  const mensagem = useSelector(state=>state.mensagem).mensagem
  console.log(mensagem)
  return (
    <div>
    <List className='listAbasDeMensagem' >
      {mensagem.map((item)=>{
        const tipo = item.id
        let classe = 'listaDeMensagemLeft'
        let cor = "mensagemBodyEmissor"
        let display1 = "flex"
        let display2 = "none"
        let margin1 = "0px 0px 0px 14px"
        let margin2 = "0px 14px 0px 14px"
        if(tipo === 1){
           classe = "listaDeMensagensRight"
           cor = "mensagemBodyReceptor"
           margin1 = "0px 14px 0px 14px"
           margin2 = "0px 0px 0px 14px"
           display1 = "none"
           display2 = "flex"
        }
        return(
          <ListItem >
          <div className={classe}>
              <div className='item'>
                  <ListItemAvatar>
                      <Avatar alt={item.usuario} src="/static/images/avatar/5.jpg" component="span" 
                            style={{background:corAleatoria(), margin:`${margin2}`, display:`${display1}`}}
                      />
                  </ListItemAvatar>
                  <ListItemText 
                       primary={<div className={cor}>{item.mensagem}</div>}
                       secondary={item.horaDaMensagem} />
                  <ListItemAvatar>
                      <Avatar alt={item.usuario} src="/static/images/avatar/5.jpg" component="span" 
                            sx={{background:corAleatoria(), margin:`${margin1}`, display:`${display2}`}}
                      />
                  </ListItemAvatar>
              </div>
          </div>
          
        </ListItem>
        )
      })}
      {/* <ListItem >
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
      </ListItem> */}
      {/* <ListItem >
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
      </ListItem> */}
    </List>
    <div style={{margin:"200px "}}></div>
    </div>
  );
}
