import React, { useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Coluna_3 from './Coluna_3_responsivo';
import Coluna_2 from './Coluna_2_responsivo';
import Coluna_1 from './Coluna_1';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
export default function Responsivo() {
  const [margin,setMargin]=useState('0vw')  
  const [display,seDisplay] = useState('none')
  const open_2 = ()=>{
     setMargin('0%')
     seDisplay('none')
  }
  const open_3 = ()=>{
    setMargin('-100%')
    seDisplay("block")
  }
  return (
     <BrowserRouter>
        <div style={{display:"flex"}}>
            <div style={{background:"",marginLeft:margin,width:"100%", transition:"0.5s"}}>
                <Coluna_2 open_3={open_3} open_2={open_2}/>
            </div>
            <div style={{background:"",width:"100%",marginRight:"",display:display,transition:"0.5s"}}>
                <Coluna_3 open_2={open_2} />
            </div>
        </div>
     </BrowserRouter>
  )
}
