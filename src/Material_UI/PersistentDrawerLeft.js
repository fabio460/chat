import  React,{useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export default function PersistentDrawerLeft() {
 
  const [margin,setMargin] = useState('-10%')
  const OpenTela_1 = () => {
    setMargin("-100%");
  };

  const OpenTela_2 = () => {
    setMargin("0%");
  };
  
 
  return (
    <div style={{display:"",width:"100%",background:""}}>
      <span style={{background:"red",width:"100%",marginRight:"0px",transition:"0.5s"}}>
        tela 1
        

        <button onClick={OpenTela_2}>abrir tela 2</button>
        <div>conteudo da tela 1
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        </div>
      </span>
      <span style={{background:"white",width:"100%",marginLeft:"",transition:"0.5s"}}>
        tela 2
        <button onClick={OpenTela_1}>abrir tela 1</button>
        <div>tela 2 e todoseu conteudo</div>
        <div>mais conteudo da tela 2 </div>
      </span>
    </div>
  );
}
