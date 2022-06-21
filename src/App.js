import './App.css';
import Bloco_2 from './Bloco_2'
import {BrowserRouter,Route} from 'react-router-dom'
import Coluna3 from './Components/Coluna_3';
import Coluna2 from './Components/Coluna_2';
import Coluna1 from './Components/Coluna_1';
import PersistentDrawerLeft from './Material_UI/PersistentDrawerLeft';
import Login from '../src/Material_UI/Login';
import Responsivo from './Components/Responsivo';
import Home from './Components/Home';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <div>
      <div className='layoutDesktop'>
       <BrowserRouter>    
         <Switch>
          <Route exact path={'/'}>
              <Login/>
          </Route>
          <Route path={'/'}>
             <Home/>
          </Route>
         </Switch>
      </BrowserRouter> 
      </div>
      <div className='layoutResponsivo'>
        <BrowserRouter>
           <Switch>
              <Route exact path={'/'}>
                <Login/>
              </Route>
              <Route path={'/'}>
                  <Responsivo/>
              </Route>
           </Switch>
        </BrowserRouter>
      </div>
      {/* <Bloco_2/> */}
    </div>
  );
}

export default App;
