import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Componentes/Home'
import Login from './Componentes/Login'
import Soket_Io from 'socket.io-client'
const socket = Soket_Io('http://localhost:4000')
export default function App4() {
  return (
    <div className='App4'>
        <BrowserRouter>
           <Switch>
               <Route exact path={'/'}>
                   <Login socket={socket}/>
               </Route>
               <Route path={'/home'}>
                   <Home socket={socket}/>
               </Route>
           </Switch>
        </BrowserRouter>
    </div>
  )
}
