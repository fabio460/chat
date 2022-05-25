import React,{useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import "./FolderList.css"
import  AvatarGroup  from '../GroupAvatars';
import corAleatoria, { dataToHoras } from '../../funcoesUteis'
import Api from '../../Api';
import {useState} from 'react'
import { useDispatch } from 'react-redux';

export default function FolderList() {

  const [idDoUsuarioLogado]= useState(3)


  const shapeCircleStyles = { borderRadius: '50%' };
  
  const [receptores,setReceptores] = useState([])
  const dispath = useDispatch()
  
  useEffect(()=>{
    async function usuariosDasMensagens(){
      const listaReceptoresId = await Api.listarUsuariosDasMensagens(idDoUsuarioLogado)
      setReceptores(listaReceptoresId)
    }
    localStorage.setItem('idDoUsuarioLogado',idDoUsuarioLogado)
    dispath({
      type:'usuarioLogado',
      payload:{id:idDoUsuarioLogado}
    })
    usuariosDasMensagens();
  },[idDoUsuarioLogado])

  const pegarReceptor =async (id)=>{
    const mensagens =await Api.listarMensagens(idDoUsuarioLogado,id)
    localStorage.setItem('idDoReceptor',id)
    dispath({
      type:"mensagensApi",
      payload:{mensagens}
    })
  }
  dispath({
    type:'receptor',
    payload:{funcao:pegarReceptor}
  })
  return (
   <div>
    
      <List sx={{ width: '93%', bgcolor: 'light', margin:"auto" }}>
            <AvatarGroup/>      
            {receptores.map((item)=>{
              let horaTratada = dataToHoras(item.hora)
              
              let iniciais = item.nomeDoReceptor
              
              return(
                <ListItem className='itemList' onClick={()=>pegarReceptor(item.id)} >
                <ListItemAvatar>
                <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
                    <Avatar alt={iniciais.toUpperCase()} src="/static/images/avatar/5.jpg" component="span" 
                        sx={{background:corAleatoria(), ...shapeCircleStyles}}
                    />
                </Badge>
                </ListItemAvatar>
                <ListItemText 
                    primary={
                      <div className='FolderListItemTittle'>
                        <div>{item.nomeDoReceptor}</div>
                        <div style={{fontSize:"10px",color:"grey"}}>{horaTratada[0]}:{horaTratada[1]}</div>
                      </div>
                    } 
                    secondary={
                      <div className='FolderListItemTittle'>
                          <div class='text-truncate'>
                              {item.ulmimaMensagem}
                            </div>
                          <div>
                            <Badge badgeContent={item.quantidadeDeMensagem} color="success" sx={{margin:"17px"}}></Badge>
                          </div>
                      </div>
                    } 
                />
              </ListItem>
              )
            })}
          </List>
   </div>
  );
}
