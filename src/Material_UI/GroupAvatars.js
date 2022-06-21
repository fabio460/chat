import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import corAleatoria from '../funcoesUteis';
import ModalLogout from './ModalLogout';

export default function GroupAvatars() {
  return (
     <div style={{display:'flex', alignItems:'center',justifyContent:"space-between"}}>
       <div style={{display:'flex', alignItems:'center',justifyContent:"space-between"}}>
          
          <ModalLogout/>
       </div>

        <AvatarGroup max={4}>
          <Avatar alt="Fabio da Silva" src="/static/images/avatar/1.jpg" sx={{background:corAleatoria()}}/>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{background:corAleatoria()}}/>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{background:corAleatoria()}}/>
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{background:corAleatoria()}}/>
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" sx={{background:corAleatoria()}}/>
        </AvatarGroup>
     </div>
  );
}
