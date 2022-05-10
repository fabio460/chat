import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Search from '../Components/Search/Search';
import FolderList from '../Material_UI/FolderList/FolderList';
export default function Coluna_2() {
  return (
    <div class="col bg-light p-2 col-md-4">
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
  )
}
