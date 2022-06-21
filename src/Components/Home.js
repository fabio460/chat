import React, { useEffect } from 'react'
import Coluna3 from '../Components/Coluna_3';
import Coluna2 from '../Components/Coluna_2';
import Coluna1 from '../Components/Coluna_1';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Home() {
    const h = useHistory()
  useEffect(()=>{
      // let logado = localStorage.getItem('usuarioLogado')
      // if(logado === null){
      //   alert("não logado")
      //    h.push('/')
      // }
     
  },[])  
  return (
    <div>
        <div className="App">
            <div class=" p-1 m-2">
                <div class="row">
                    <Coluna1/>
                    <Coluna2/>
                    <Coluna3/>
                </div>
            </div>
        </div>  
    
    </div>
  )
}
