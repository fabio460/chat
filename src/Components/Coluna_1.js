import React from 'react'
import ColorToggleButton from '../Material_UI/ColorToggleButton';
import logo from '../Imagens/logoChat.jpg'
// import SimpleBottomNavigation from '../Material_UI/SimpleBottomNavigation';
export default function Coluna_1() {
  return (
                     
    <div class="col p-2 col-md-1 " id='coluna_1'>
    <div style={{ margin:"0px 0 100px 10px"}}>
      <img src={logo} alt='' style={{width: "50px", cursor:"pointer"}} />
    </div>
    <ColorToggleButton orientacao="vertical"/>
    {/* <SimpleBottomNavigation direcao={'column'}/> */}
  </div>
  )
}
