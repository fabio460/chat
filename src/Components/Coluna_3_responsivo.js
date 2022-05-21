import React from 'react'
import AbasDeMensagens from '../Material_UI/AbasDeMensagens/AbasDeMensagens'
import ListDividersMensagemHeader from '../Material_UI/ListDividersMensagemHeaderResponsivo'


import SearchMenssagem from './SearchMensage/SearchMenssagem'
import './SearchMensage/SearchMenssagem.css'
export default function Coluna_3({open_2}) {

  
  return (
    <div class="col " id='col3'> 
        <div className=''>
        </div>
        <div class="row">
          <div class="col-md-12" >
          <ListDividersMensagemHeader open_2={open_2}/> 
             <div class="card example-1 square scrollbar-dusty-grass square thin" id="messages">
                 <div className='sub'>
                    <AbasDeMensagens/>
                 </div>
             </div>
          </div>
        
          <div className='inputMensagens'><SearchMenssagem/></div>
        </div>
        
    </div>
  )
}
