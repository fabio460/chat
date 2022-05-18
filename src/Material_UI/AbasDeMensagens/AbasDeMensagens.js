import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useSelector} from 'react-redux'
import './AbasDeMensagens.css'
import corAleatoria, { horaTratada } from '../../funcoesUteis';
import PopoverMensagensLeft from '../popoverMensagensLeft';
import PopoverMensagensRight from '../popoverMensagensRight';

export default function AbasDeMensagens() {
  // const mensagem = useSelector(state=>state.mensagem).mensagem
  // console.log(mensagem)

  let mensagensReducerDados = useSelector(state=>state.mensagensApi.mensagens)
  let idDoUsuarioLogado = localStorage.getItem('idDoUsuarioLogado')
  let emissor = mensagensReducerDados.emissor || " "
  emissor = emissor[0].nome
  let receptor = mensagensReducerDados.receptor || " "
  receptor = receptor[0].nome
  
  let mensagensReducer = mensagensReducerDados.mensagens || []
    
  return (
    <div>
     
    <List className='listAbasDeMensagem' >
      {mensagensReducer.map((item)=>{

        const tipo = parseInt(item.receptor)
        let classe = 'listaDeMensagemLeft'
        let cor = "mensagemBodyEmissor"
        let display1 = "flex"
        let display2 = "none"
        let margin1 = "0px 0px 0px 14px"
        let margin2 = "0px 14px 0px 14px"
        if(tipo === parseInt(idDoUsuarioLogado)){
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
                        <Avatar alt={emissor.toUpperCase()} src="/static/images/avatar/5.jpg" component="span" 
                              style={{background:corAleatoria(), margin:`${margin2}`, display:`${display1}`}}
                        />
                        
                    </ListItemAvatar>
                
                    {tipo === parseInt(idDoUsuarioLogado) ? 
                            <div style={{display:"flex",alignItems:"center",width:"100%"}}>
                                <div style={{background:"",display:"flex",alignItems:"center",height:'60px',marginBottom:'20px'}}>
                                  <PopoverMensagensRight idDaMensagem={item.id} />
                                </div>
                                  <ListItemText 
                                      primary={<div className={cor}>{item.body}</div>}
                                      secondary={horaTratada(item.createdAt)} 
                                      
                                  />
                            </div>  
                      : 
                            <div style={{display:"flex",alignItems:"center",width:"100%"}}>
                                <ListItemText 
                                    primary={<div className={cor}>{item.body}</div>}
                                    secondary={horaTratada(item.createdAt)} 
                                />
                                <div style={{background:"",display:"flex",alignItems:"center",height:'60px',marginBottom:'20px'}}>
                                  <PopoverMensagensLeft idDaMensagem={item.id} />
                                </div>
                            </div>  
                        }
                    <ListItemAvatar>
                        <Avatar alt={receptor.toUpperCase()} src="/static/images/avatar/5.jpg" component="span" 
                              sx={{background:corAleatoria(), margin:`${margin1}`, display:`${display2}`}}
                        />
                        
                    </ListItemAvatar>
                </div>
            </div>
            
          </ListItem>
          )
      
      }
      
      )}
     
    </List>
    </div>
  );
}
