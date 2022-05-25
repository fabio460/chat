import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bloco_2() {
  // const array = useSelector(state => state.usuario.array)
//   const user = useSelector(state => state.usuario.array)
//  console.log(user)
  const [usuario,setUsuario]=useState([])
  const[nome,setNome]=useState()
  const[email,setEmail]=useState()
  const[senha,setSenha]=useState()
  const usedispath = useDispatch()
  fetch("http://localhost:4001/usuarios").then(res=>res.json()).then(
    res=>{
      setUsuario(res)
      usedispath({
      type:'lista',
      payload:{lista:res}
      })
    })
  let lista = useSelector(state=>state.lista.lista)
  useEffect(()=>{

    
  },[])
  
  
  const inserirUsuario = ()=>{
    const formdata = new FormData()
    formdata.append('nome',nome)
    formdata.append('email',email)
    formdata.append('senha',senha)
    fetch('http://localhost:4001/inserirUsuarios',{
      method:"POST",
      body:formdata
    })
    alert('usuario:'+nome+" cadastrado com sucesso")
  }
  return (
    <div>
       <div>
          <input onChange={e=>setNome(e.target.value)} placeholder='nome'/>
          <input onChange={e=>setEmail(e.target.value)} placeholder='email'/>
          <input onChange={e=>setSenha(e.target.value)} placeholder='senha'/>
          <button onClick={inserirUsuario}>cadastrar</button>
       </div>
       {lista.map(item => {
           return(
              <div>
                {item.nome}

              </div>
           )
       })}
      {/* {user.nome} */}

    </div>
    
  )
}
