import React,{useEffect} from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import './SearchMenssagem.css'
import { useSelector } from 'react-redux';
import Api from '../../Api';
import BasicPopover from '../../Material_UI/BasicPopover';

export default function SearchMenssagem() {
  const [mensagem,setMensagem] = React.useState('')
  let figuraEmoji = useSelector(state=>state.emoji.figura)
  useEffect(()=>{
    setMensagem(e=> e + figuraEmoji)
    
  },[figuraEmoji])
  const idDoUsuarioLogado = useSelector(state=>state.idEmissor.id)

  const gerReceptorReducer = useSelector(state=>state.funcao.funcao)
    console.log(localStorage.getItem("idDoReceptor"))
  const enviarMensagem = ()=>{
    
     if(mensagem !==" "){
      Api.enviarMensagens( idDoUsuarioLogado,  localStorage.getItem("idDoReceptor"), mensagem)
     // window.location.reload()
     setMensagem(" ")
     
     
     }
     else{
       alert('insira uma mensagem')
     }
     setTimeout(() => {
      gerReceptorReducer(localStorage.getItem("idDoReceptor"))
     }, 300);
  }
  
  const handleKeyPress = (e)=>{
      if(e.charCode === 13){
        enviarMensagem()
        setTimeout(() => {
          gerReceptorReducer(localStorage.getItem("idDoReceptor"))
         }, 300);
      }
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
              
              onKeyPress={e=>handleKeyPress(e)}
            />
            
            <IconButton color="primary" sx={{ p: '0px', m:"10px" }} aria-label="directions"  >
                <BasicPopover/>
            </IconButton>
            
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={enviarMensagem} onKeyUp={handleKeyPress}>
              <NearMeOutlinedIcon />
            </IconButton>
           
      </div>
    </div>
  );
}
