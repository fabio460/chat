import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import "./FolderList.css"
import { useSelector } from 'react-redux';
import  AvatarGroup  from '../GroupAvatars';
import corAleatoria, {} from '../../funcoesUteis'

export default function FolderList() {
  const usuarios = useSelector(state=>state.usuario).array
  const mensagemRecebida = useSelector(state=>state.mensagem).mensagem
  var ultimaMensagem = mensagemRecebida[mensagemRecebida.length - 1]

  // const shapeStyles = { bgcolor: corAleatoria(), width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: '50%' };
  
  // const circle = (
  //   <Avatar component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} alt='fabio' src="/static/images/avatar/5.jpg"/>
  // );
  return (
    <List sx={{ width: '93%', bgcolor: 'light', margin:"auto" }}>
      <AvatarGroup/>

      {/* <Stack spacing={4} direction="column" sx={{ color: 'action.active',width:"35px" }}>
      <Badge color="secondary" badgeContent={0}>
        <Avatar />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero={true}>
        <Avatar />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero={true}>
        <Avatar />
      </Badge>
    </Stack> */}
      
      {usuarios.map((item)=>{
        return(
          <ListItem className='itemList'  >
          <ListItemAvatar>


          <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
              <Avatar alt={item.nome} src="/static/images/avatar/5.jpg" component="span" 
                  sx={{background:corAleatoria(), ...shapeCircleStyles}}
              />
          </Badge>
          </ListItemAvatar>
          <ListItemText 
              primary={
                <div className='FolderListItemTittle'>
                  <div>{item.nome}</div>
                  <div style={{fontSize:"10px",color:"grey"}}>{ultimaMensagem.horaDaMensagem}</div>
                </div>
              } 
              secondary={
                 <div className='FolderListItemTittle'>
                     <div class='text-truncate'>
                        {ultimaMensagem.mensagem}
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

      {/* <ListItem className='itemList'>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
            primary={
              <div className='FolderListItemTittle'>
                <div>Ruth</div>
                <div style={{fontSize:"10px",color:"grey"}}>12:35 PM</div>
              </div>
            } 
            secondary={
               <div className='FolderListItemTittle'>
                   <div class='text-truncate'>
                      texto que compoem a mensagem
                      aqui vc coloca sua mnsagem que compoem o corpo da mensagem
                      texto que compoem a mensagem
                      aqui vc coloca sua mnsagem que compoem o corpo da mensagem 
                    </div>
                   <div>
                     <Badge badgeContent={3} color="success" sx={{margin:"17px"}}></Badge>
                   </div>
               </div>
            } 
        />
      </ListItem> */}
    </List>
  );
}
