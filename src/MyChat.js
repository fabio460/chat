import React, { useEffect, useState } from 'react'
import BarraDeMensagens from 'react-scroll-to-bottom'
export default function MyChat({user,sala,socket}) {
  const [mensagem,setMensagem]=useState("")  
  const [mensagens,setMensagens]=useState([])
  const [messageList, setMessageList] = useState([]);
  const enviarMensagem = (e)=>{
      
      if (mensagem !== "" && e.code === "Enter") {
         setMessageList((list) => [...list, {mensagem,sala,user}]);
          socket.emit("setMensagem",{mensagem,sala,user})
         setMensagem("")
      }
  }
//   socket.on("setMensagem",data=>{
//     console.log("mensagem: "+data)  
//     setMensagens(data=>[...mensagens,data])
//   })


  useEffect(()=>{
      socket.on("getMensagens", data=>{
         setMessageList((list) => [...list, data]);
         setMensagens(data=>[...data,data.mensagem])
         
      })
  },[socket])
  return (
    <div>
        <h1>Bem vindo {user}  </h1>
        <BarraDeMensagens>
            {messageList.map((item,key)=>{
                 
                return <div>
                    <span style={{fontStyle:'italic',fontWeight:'bolder'}}>de {user}  para {item.user}</span>
                    <div>{item.mensagem}</div>
                </div>
            })}
            
        </BarraDeMensagens>
        <input value={mensagem} onChange={e=>setMensagem(e.target.value)} placeholder='mensagem' onKeyUp={e=> enviarMensagem(e)}/>
        <button onClick={enviarMensagem}>enviar</button>
    </div>
  )
}
