import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import SelectLogin from './selectLogin';
import InputLogin from './inputLogin';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
export default function Login({socket}) {
  const dispatch = useDispatch() 
  const h = useHistory()
  const [sala,setSala]=useState("")
  const [nome,setNome]=useState("")
  
  const entrar = ()=>{
     if (nome !== "" && sala !== "") {
       socket.emit('join',{
          sala,nome
       })
       dispatch({
          type:"socket",
          payload:{dados:{sala,nome}}
       })
       
       
       h.push('/home')
     }
  }
  return (
    <div className='loginContainer'>
       <div className='loginBody'>
          <InputLogin setNome={setNome}/>
          <SelectLogin setSala={setSala}/>
          <Button 
             variant="contained"
             sx={{width: '45ch',marginTop:"20px"}}
             onClick={entrar}
          >
             Entrar
          </Button>
       </div>
    </div>
  )
}
