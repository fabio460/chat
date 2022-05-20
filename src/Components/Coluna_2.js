import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Search from '../Components/Search/Search';
import ColorToggleButton from '../Material_UI/ColorToggleButton';
// import FixedBottomNavigation from '../Material_UI/FixedBottomNavigation';
import FolderList from '../Material_UI/FolderList/FolderList';
// import SimpleBottomNavigation from '../Material_UI/SimpleBottomNavigation';
export default function Coluna_2() {
  return (
      <div class="col bg-light p-2 col-md-4" id='col2'>
         <div className='navBarColuna2   scrollbar-dusty-grass thin'>
         <Switch>
            <Route exact path={'/'}>
                  <h2 style={{marginBottom:"50px"}}>Chats</h2>
                  <Search/>
                  <FolderList/>
            </Route>
              <Route path='/create'>
                <h2>Create chat</h2>
              </Route>
              <Route path='/frends'>
                <h2>Amigos</h2>
              </Route>
              <Route path='/notifications'>
                <h2>Notificações</h2>
              </Route>
              <Route path='/support'>
                <h2>Suporte</h2>
              </Route>
              <Route path='/setting'>
                <h2>Configurações</h2>
              </Route>
        </Switch>
         </div>
        <div className='navBarColuna2Bottom'>
            <ColorToggleButton orientacao="horizontal"/>
            {/* <SimpleBottomNavigation direcao={"null"}/> */}
            {/* <FixedBottomNavigation/> */}
            {/* <div style={{background:"red",width:"100%"}}>teste</div> */}
        </div>
        
     </div>
  )
}
