import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Api from '../Api.js'
import { useSelector } from 'react-redux';
const style = {
  width: '170px',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers({id}) {
  const gerReceptorReducer = useSelector(state=>state.funcao.funcao)
  const deletarMensagem = ()=>{
    Api.deletarMensagem(id)
    setTimeout(() => {
      gerReceptorReducer(localStorage.getItem("idDoReceptor"))
     }, 300);
  }
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Editar" />{id}
        <ModeEditIcon/>
      </ListItem>
      
      <ListItem button divider>
        <ListItemText primary="Replicar" />
        <KeyboardReturnIcon/>
      </ListItem>

      <Divider light />
      <ListItem button onClick={deletarMensagem}>
        <ListItemText primary="Deletar" sx={{color:"red"}} />
        <DeleteIcon sx={{color:"red"}}/>
      </ListItem>
    </List>
  );
}
