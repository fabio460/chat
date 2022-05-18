import React from 'react'
import AbasDeMensagens from '../Material_UI/AbasDeMensagens/AbasDeMensagens'
import ListDividersMensagemHeader from '../Material_UI/ListDividersMensagemHeader'


import SearchMenssagem from './SearchMensage/SearchMenssagem'
import './SearchMensage/SearchMenssagem.css'
export default function Coluna_3() {

  
  return (
    <div class="col  p-3 " id='coluna_2'>
        <div className='SearchMensagemContainer'>
        </div>
        <div class="row">
          <div class="col-md-12" >
          <ListDividersMensagemHeader/> 
             <div class="card example-1 square scrollbar-dusty-grass square thin" id="messages">
                 <div className='sub'>
                    <AbasDeMensagens/>
                 </div>
             </div>
          </div>
          <div  
              className='SearchMenssagem'><SearchMenssagem/>
          </div>
        </div>
        
    </div>
  )
}
