import React, { useEffect, useState } from 'react'
import InputHome from './imputHome'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Home({socket}) {
  const dados = useSelector(state=>state.socketReducer.dados)
  const [mensagens,setMensagens]=useState([])
  const h = useHistory()
  useEffect(()=>{
   
    if (!dados.sala) {
        h.push('/')
    }else{
      socket.emit('mensagem'," usuario "+dados.nome+" entrou na sala "+dados.sala)
    }
    socket.on('mensagemArray',data=>{
      setMensagens(data)
      console.log(data)
  })
  },[socket])
 
  return (
    <div className='homeContainer'>
       <div className='homeBody'>
           <div>
              {mensagens.map(item=>{
                return <div>{item}</div>
              })}
           </div>
           <InputHome socket={socket}/>
       </div>
    </div>
  )
}
