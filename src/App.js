import './App.css';
import Bloco_2 from './Bloco_2'
import {BrowserRouter,Route} from 'react-router-dom'
import Coluna3 from './Components/Coluna_3';
import Coluna2 from './Components/Coluna_2';
import Coluna1 from './Components/Coluna_1';
import PersistentDrawerLeft from './Material_UI/PersistentDrawerLeft';
import Login from '../src/Material_UI/Login';
import Responsivo from './Components/Responsivo';
function App() {
  return (
    <div>
      <div className='layoutDesktop'>
       <BrowserRouter>    
          <Route exact path={'/'}>
              <Login/>
          </Route>
          <Route path={'/home'}>
          <div className="App">
                <div class=" p-1 m-2">
                    <div class="row">
                      <Coluna1/>
                      <Coluna2/>
                      <Coluna3/>
                  </div>
            </div>
          </div>  
          </Route>
      </BrowserRouter> 
      </div>
      <div className='layoutResponsivo'>
        <Responsivo/>
      </div>
      {/* <Bloco_2/> */}
    </div>
  );
}

export default App;
