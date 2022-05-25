
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
export default function AbaDeMensagens2() {
    
    const [usuarios,setListUsuarios]=useState([])
    
    const usedispath = useDispatch()
    const link = 'http://localhost:4001/'
    const mensagensLink = 'listarMensagem'
    let idDoUsuarioLogado = localStorage.getItem('idDoUsuarioLogado')
 
    let mensagens = useSelector(state=>state.lista.mensagens) || []
    let receptor = useSelector(state=>state.lista.receptor) || []

    useMemo(()=>{
        const formdata = new FormData()
        formdata.append('emissor',idDoUsuarioLogado)
        formdata.append('receptor',2)
        fetch(link + mensagensLink,{
            method:"POST",
            body:formdata
            }).then(res=>res.json()).then(
                res=>{
                    usedispath({
                    type:'lista',
                    payload:{lista:res}
                    })
                
                  }
            )
    },[])

    
    // useEffect(()=>{
    //     const formdata = new FormData()
    //     formdata.append('emissor',idDoUsuarioLogado)
    //     const ids = fetch(link + 'getUsuariosDasMensagens',{
    //       method:"POST",
    //       body:formdata
    //     }).then(res=>res.json()).then(
    //         res=>{
    //             setListUsuarios(res)
    //             // console.log(res[0].nomeDoReceptor)
    //         }
    //     )
    // },[])
    
  return (
    <div>
        {mensagens.map(item=>{
            return <div>
                <div>{item.body}{item.nome}</div>
                {/* <div>{usuarios[0].nome}</div> */}
            </div>
        })}
    </div>
  )
}
