import * as React from 'react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import DirectionsIcon from '@mui/icons-material/Directions';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
export default function SearchMenssagem() {
  return (
    <div className='SearchMenssagem'>
      <div
      component="form"
      style={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '95%',height:"48px",margin:"auto",border:"none" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <AttachFileRoundedIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="envie sua mensagem"
        inputProps={{ 'aria-label': 'envie sua mensagem' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <EmojiEmotionsOutlinedIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <NearMeOutlinedIcon />
      </IconButton>
    </div>
    </div>
    // <input className='SearchMenssagem' type={'text'}/>
  );
}
