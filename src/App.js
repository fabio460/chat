import './App.css';

import {BrowserRouter} from 'react-router-dom'
import Coluna3 from './Components/Coluna_3';
import Coluna2 from './Components/Coluna_2';
import Coluna1 from './Components/Coluna_1';
function App() {
  
  return (
    <BrowserRouter>    
        <div className="App">
            <div class=" p-1 m-2">
                <div class="row">
                  <Coluna1/>
                  <Coluna2/>
                  <Coluna3/>
              </div>
        </div>
     </div>  
     </BrowserRouter> 
  );
}

export default App;
