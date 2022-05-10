import React from 'react'
import AbasDeMensagens from '../Material_UI/AbasDeMensagens/AbasDeMensagens'
import SearchMenssagem from './SearchMensage/SearchMenssagem'
import './SearchMensage/SearchMenssagem.css'
export default function Coluna_3() {
  return (
    <div class="col  p-2 " id='coluna_2'>
        <AbasDeMensagens/>
        <div className='SearchMenssagem'><SearchMenssagem/></div>
    </div>
  )
}
