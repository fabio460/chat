import React,{useEffect, useState} from 'react';
import {useSelector} from "react-redux"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import corAleatoria from '../funcoesUteis';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Divider } from '@mui/material';
import Api from '../Api';

export default function ListDividersMensagemHeader({open_2}) {
    let mensagensReducerDados = useSelector(state=>state.mensagensApi.mensagens)
    let receptor = mensagensReducerDados.receptor || " "
    if(receptor[0]){
      receptor = receptor[0].nome
    }  
  let idDoUsuarioLogado = localStorage.getItem("usuarioLogado")
  const [usuario,setUsuario]=useState({})
  useEffect(()=>{
     async function getUsuario(){
        let usuario =await Api.listarUsuariosPorId(idDoUsuarioLogado)
        setUsuario(usuario[0])
    }
    getUsuario()
  },[idDoUsuarioLogado])
 
  const voltar = ()=>{
    // document.getElementById('col2').classList.remove("colunaVisivel")
    // document.getElementById('col3').classList.add("colunaInvisivel")
    open_2()
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'white', color:"black", width:"100%", boxShadow:"0px 0px 0px"}}>
        <Toolbar>
            <ListItem>
                
                <div className='ArrowBackIosNewIcon'><ArrowBackIosNewIcon onClick={voltar} /></div>
                <ListItemAvatar>
                <Avatar alt={usuario.nome} src="/static/images/avatar/5.jpg" component="span" 
                              style={{background:corAleatoria()}}
                        />
                </ListItemAvatar>
                <ListItemText primary={usuario.nome} secondary="Jan 9, 2014" />
            </ListItem>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit">Login</Button>
          <AvatarGroup max={4}>
                <Avatar alt={usuario.nome} src="/static/images/avatar/5.jpg" component="span" style={{background:corAleatoria()}}/>
                <Avatar alt={receptor} src="/static/images/avatar/2.jpg"  style={{background:corAleatoria()}}/>
          </AvatarGroup>
        </Toolbar>
      </AppBar>
      <Divider light />
    </Box>
  );
}
