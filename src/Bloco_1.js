import React from 'react'
import { useSelector } from 'react-redux'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
export default function Bloco_1() {
  const array = useSelector(state => state.usuario.array)
  const [nome,setNome] = useState()  
  const [avatar, setAvatar]=useState()
  const [email,setEmail] = useState()
  const [role, setRole] = useState()
  const usedispatch = useDispatch()
  var aux = []
  const inserir = ()=>{
      let dados = {nome, email, avatar, role}
      aux = [...array,dados]
  
      usedispatch({
          type:"user",
          payload:{array:aux}
      })
      console.log(avatar)
  }
  return (
    <div className='blocos'>
        <input onChange={e=>setNome(e.target.value)}/>
        {/* <input type="file" onChange={e=>setAvatar(e.target.files[0])} /> */}
        <input onChange={e=>setEmail(e.target.value)}/>
        <input onChange={e=>setRole(e.target.value)}/>
        <button onClick={inserir}>inserir</button>
    </div>
  )
}
