import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function InputLogin({setNome,setEmail,setSenha,inserir}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch',display:'flex',flexDirection:'column',justifyContent:'center',margin:'10px auto' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Usuario" variant="outlined"
         onChange={e=>setNome(e.target.value)}
      />
      <TextField id="outlined-basic" label="email" variant="outlined"
         onChange={e=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="senha" variant="outlined"
         onChange={e=>setSenha(e.target.value)}
      />
        <Button 
             variant="contained"
             sx={{width: '45ch',marginTop:"20px"}}
             onClick={inserir}
          >
             Entrar
        </Button>
    </Box>
  );
}
