import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useDispatch, useSelector} from 'react-redux'
import './AbasDeMensagens.css'
import corAleatoria, { horaTratada } from '../../funcoesUteis';
import PopoverMensagensLeft from '../popoverMensagensLeft';
import PopoverMensagensRight from '../popoverMensagensRight';

export default function AbasDeMensagens({getIdRecebidor}) {
  // const mensagem = useSelector(state=>state.mensagem).mensagem
  const gerReceptorReducer = useSelector(state=>state.funcao.funcao)
  // setInterval(() => {
  //   gerReceptorReducer(localStorage.getItem("idDoReceptor"))
  //  }, 5500);
  let mensagensReducerDados = useSelector(state=>state.mensagensApi).mensagens

  const idDoUsuarioLogado = useSelector(state=>state.idEmissor.id)
  let emissor = mensagensReducerDados.emissor || " "
  emissor = emissor[0].nome
  let receptor = mensagensReducerDados.receptor || " "
  const dispatch = useDispatch()

  if(receptor[0]){
    receptor = receptor[0].nome
  }
  // console.log(idDoUsuarioLogado)
  
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
        let margin1 = "0px 0px 0px 1px"
        let margin2 = "0px 1px 0px 1px"
        if(tipo === parseInt(idDoUsuarioLogado)){
           classe = "listaDeMensagensRight"
           cor = "mensagemBodyReceptor"
           margin1 = "0px 1px 0px 10px"
           margin2 = "0px 0px 0px 1px"
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
                                  {tipo}
                            </div>  
                      : 
                            <div style={{display:"flex",alignItems:"center",width:"100%"}}>
                                <ListItemText 
                                    primary={<div className={cor}>{item.body}</div>}
                                    secondary={horaTratada(item.createdAt)} 
                                />
                                {tipo}
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
