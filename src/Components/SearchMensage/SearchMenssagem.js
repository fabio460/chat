import * as React from 'react';
// import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
// import DirectionsIcon from '@mui/icons-material/Directions';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import Emoji from './Emoji';
import EmojiEmotionsOutlined from '@mui/icons-material/EmojiEmotionsOutlined';
import './SearchMenssagem.css'
export default function SearchMenssagem() {
  const [emojiVisible,setEmojiVisible] = React.useState(false)
  const [emoji,setEmoji] = React.useState(null)
  const [mensagem,setMensagem] = React.useState()
  
  const mostrarEmoji = ()=>{
    setEmojiVisible(!emojiVisible)
  }
  const GetEmoji = (figura)=>{
    
    if(figura){
      setEmoji(figura.emoji)
    
    }
  }
  if(emoji){
    console.log(emoji)
   // setMensagem(mensagem + emoji)
  }
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
        value={mensagem}
        onChange={e=>setMensagem(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      {emojiVisible ? <div className='emoji'><Emoji getEmoji={GetEmoji}/></div> : <div></div>}
        <div onClick={mostrarEmoji} style={{cursor:"pointer"}}><EmojiEmotionsOutlined/></div>
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
