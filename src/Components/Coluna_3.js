import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AbaDeMensagens2 from '../Material_UI/AbasDeMensagens/AbaDeMensagens2'
import AbasDeMensagens from '../Material_UI/AbasDeMensagens/AbasDeMensagens'
import ListDividersMensagemHeader from '../Material_UI/ListDividersMensagemHeader'


import SearchMenssagem from './SearchMensage/SearchMenssagem'
import './SearchMensage/SearchMenssagem.css'
export default function Coluna_3() {
  let mensagensReducerDados = useSelector(state=>state.mensagensApi.mensagens)
useEffect(()=>{
  //  console.log(mensagensReducerDados.mensagens)
},[mensagensReducerDados])
  
  return (
    <div class="col " id='col3'> 
        <div className=''>
        </div>
        <div class="row">
          <div class="col-md-12" >
          <ListDividersMensagemHeader/> 
             <div class="card example-1 square scrollbar-dusty-grass square thin" id="messages">
                 <div className='sub'>
                    <AbasDeMensagens />
                 </div>
             </div>
          </div>
        
          
          {mensagensReducerDados.mensagens ? <div className='inputMensagens'><SearchMenssagem/></div>: <div className='inputMensagens'></div> }
        </div>
        
    </div>
  )
}
