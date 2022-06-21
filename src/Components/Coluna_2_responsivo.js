import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Search from '../Components/Search/Search';
import ColorToggleButton from '../Material_UI/ColorToggleButton';
// import FixedBottomNavigation from '../Material_UI/FixedBottomNavigation';
import FolderList from '../Material_UI/FolderList/FolderListResponsivo';
// import SimpleBottomNavigation from '../Material_UI/SimpleBottomNavigation';
export default function Coluna_2({open_3,open_2}) {
  return (
      <div class="col bg-light p-2 col-md-4" id='col2'>
         <div >
         <Switch>
            <Route exact path={'/chat'}>
                <div style={{height:'563px'}}>
                    <h2 style={{marginBottom:"50px"}}>Chats</h2>
                    <Search/>
                    <div> <FolderList open_3={open_3} open_2={open_2}/></div>
                </div>
            </Route>
              <Route path='/create'>
                <div style={{height:'563px'}}>Create chat</div>
              </Route>
              <Route path='/frends'>
                <div style={{height:'563px'}}>frends</div>
              </Route>
              <Route path='/notifications'>
                <div style={{height:'563px'}}>notifications</div>
              </Route>
              <Route path='/support'>
              <div style={{height:'563px'}}>support</div>
                </Route>
              <Route path='/setting'>
                <div style={{height:'563px'}}>setting</div>
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
