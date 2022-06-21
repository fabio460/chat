import  React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
export default function InputHome({socket}) {
  const h = useHistory()
    const [mensagem,setMensagem]=useState("")
    const dados = useSelector(state=>state.socketReducer.dados) || ""
    const enviarMensagem = (e)=>{
        e.preventDefault()
        //console.log(dados)
        if (dados !== "") {
          
          socket.emit('mensagem',{
            mensagem,
            sala:dados.sala,
            nome:dados.nome
        })
        socket.on('mensagem',data=>{
          console.log(data)
        })
        } else {
          h.push('/')
        }
       
        setMensagem(" ")
    }
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="envie sua mensagem"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={mensagem}
        onChange={e=>setMensagem(e.target.value)}
      />
      {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={e=>enviarMensagem(e)}>
        <SearchIcon />
      </IconButton> */}
      <Fab  sx={{width:"35px" ,height:"30px"}} color="secondary" type="submit" aria-label="edit" onClick={e=>enviarMensagem(e)}>
        <EditIcon sx={{width:"22px"}} />
      </Fab>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    
    </Paper>
  );
}
